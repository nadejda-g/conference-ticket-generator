'use client';

import styles from '@/app/page.module.css'
import infoIcon from '@/assets/images/icon-info.svg'
import importIcon from '@/assets/images/icon-upload.svg'
import {useState} from "react";

const MAX_FILE_SIZE = 500000; // 500kb
const IMAGE_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];

export default function Form () {
    const [emailError, setEmailError] = useState(null)
    const [fileError, setFileError] = useState(null)

    function checkForm(e) {
        e.preventDefault();
        setFileError(null)
        setEmailError(null)

        const emailInput = document.getElementById('email-input')
        const fileInput = document.getElementById('file-input')

        if (fileInput.files.length === 0) {
            setFileError('file is required!')
            return
        }

        if (fileInput.files[0].size > MAX_FILE_SIZE) {
            setFileError('File too large. Please upload a photo under 500KB!')
            return
        }

        if (!IMAGE_MIME_TYPES.includes(fileInput.files[0].type)) {
            setFileError('File is not an image! Please upload a PNG OR JPG!')
            return
        }

        if (!emailInput.value) {
            setEmailError('email is required!')
            return
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailInput.value)) {
            setEmailError('email is not valid!')
            return
        }

        const eventForm = document.getElementById('event-form')
        eventForm.submit()
    }

    function previewFileInput() {
        const preview = document.getElementById('preview-img');
        const file    = document.getElementById('file-input').files[0];
        const reader  = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    return (
        <form id='event-form' action='/ticket' method='GET' onSubmit={(e) => checkForm(e)} className={styles.formContainer}>
            <div className={styles.uploadField}>
                <p className={styles.inputDescription}>Upload Avatar</p>
                <div className={styles.dragDrop}>
                    <div className={styles.squareLogo}>
                        <label htmlFor='file-input'>
                            <img id='preview-img' src={importIcon.src} alt='import icon' className={styles.importIcon}/>
                        </label>
                        <input className={styles.fileInputButtonHtml} type="file" id="file-input"
                               name="file-input" onChange={() => previewFileInput()}/>
                    </div>
                    <p>Click to upload</p>
                </div>
                <p className={styles.avatarInputComment}><img src={infoIcon.src} alt='info icon'
                                                              className={styles.infoIcon}/>
                    Upload your photo (JPG or PNG, max size: 500KB).</p>

                <p style={{color: 'red'}}>{fileError}</p>
            </div>

            <div className={styles.inputField}>
            <p className={styles.inputDescription}>Full Name</p>
                <input type="text" id="name-input" name="name-input"/>
            </div>

            <div className={styles.inputField}>
                <p className={styles.inputDescription}>Email Address</p>
                <input type="text" id="email-input" name="email-input" placeholder='example@email.com'/>
                <p style={{ color: 'red' }}>{ emailError }</p>
            </div>

            <div className={styles.inputField}>
                <p className={styles.inputDescription}>GitHub Username</p>
                <input type="text" id="username-input" name="username-input" placeholder='@yourusername'/>
            </div>

            <div className={styles.generateButton}>
                <button type='submit'>Generate My Ticket</button>
            </div>
        </form>
    )
}
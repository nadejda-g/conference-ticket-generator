import styles from '@/app/page.module.css'
import infoIcon from '@/assets/images/icon-info.svg'
import importIcon from '@/assets/images/icon-upload.svg'

export default function Form () {
    return (
        <div className={styles.formContainer}>

            <div className={styles.uploadField}>
                <p className={styles.inputDescription}>Upload Avatar</p>
                <div className={styles.dragDrop}>
                    <div className={styles.squareLogo}>
                        <label htmlFor='file-input'>
                            <img src={importIcon.src} alt='import icon' className={styles.importIcon}/>
                        </label>
                        <input className={styles.fileInputButtonHtml} type="file" id="file-input"
                               name="uploadingImage"/>
                    </div>
                    <p>Click to upload</p>
                </div>
                <p className={styles.avatarInputComment}><img src={infoIcon.src} alt='info icon' className={styles.infoIcon}/>Upload your photo (JPG
                    or PNG, max size: 500KB).</p>
            </div>

            <div className={styles.inputField}>
                <p className={styles.inputDescription}>Full Name</p>
                <input type="text" id="file-input" name="uploadingImage"/>
            </div>

            <div className={styles.inputField}>
                <p className={styles.inputDescription}>Email Address</p>
                <input type="text" id="file-input" name="example@email.com" placeholder='example@email.com'/>
            </div>

            <div className={styles.inputField}>
                <p className={styles.inputDescription}>GitHub Username</p>
                <input type="text" id="file-input" name="@yourusername" placeholder='@yourusername'/>
            </div>

            <div className={styles.generateButton}>
                <button>Generate My Ticket</button>
            </div>
        </div>
    )
}
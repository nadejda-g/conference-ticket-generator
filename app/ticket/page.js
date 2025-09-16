'use client';

import styles from "@/app/page.module.css";
import Logo from "@/lib/Components/Logo";
import Ticket from './ticket';
import {useSearchParams} from "next/navigation";


export default function TicketPage() {
    const searchParams = useSearchParams()
    const email = searchParams.get('email-input')
    const username = searchParams.get('username-input')
    const name = searchParams.get('name-input')
    const file = searchParams.get('file-input')
    const fileBase64 = searchParams.get('file-input-base64')

    return (
        <div className={styles.mainPage}>
            <Logo/>
            <div className={styles.header}>
                <p className={styles.mainHeader}>Congrats, <span className={styles.nameOrange}>{name}</span>! Your ticket is ready.</p>
                <p className={styles.subHeader}>We&#39;ve emailed your ticket to<br/><span className={styles.emailOrange}>{email}</span> and will send updates in<br/>the run up to the event.</p>
            </div>
            <Ticket name={name} username={username} file={file} email={email} fileBase64={fileBase64}/>
        </div>
    )
}
import styles from "@/app/page.module.css";
import Logo from "@/lib/Components/Logo";
import Ticket from './ticket';


export default function TicketPage() {
    return (
        <div className={styles.mainPage}>
            <Logo/>
            <div className={styles.header}>
                <p className={styles.mainHeader}>Congrats, Jonatan Kristof! Your ticket is ready.</p>
                <p className={styles.subHeader}>We've emailed your ticket to jonatan@email.com and will send updates in the run up to the event.</p>
            </div>
            <Ticket/>
        </div>
    )
}
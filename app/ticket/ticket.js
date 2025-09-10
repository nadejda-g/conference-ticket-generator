import styles from '@/app/page.module.css';
import ticketForm from '@/assets/images/pattern-ticket.svg';
import smallLogo from '@/assets/images/logo-mark.svg';
import avatar from '@/assets/images/image-avatar.jpg';
import githubLogo from '@/assets/images/icon-github.svg';

export default function Ticket({ name, email, file, username}) {
    const ticketNumber = Math.floor(100000 + Math.random() * 900000)

    return (
        <div className={styles.ticket}>
            <img src={ticketForm.src} alt='ticket'/>

            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "24px"
                }}>
                    <div className={styles.upperTicketPart}>
                        <div className={styles.conferenceLogo}>
                            <img src={smallLogo.src} alt='conference-logo'/>
                        </div>

                        <div className={styles.eventInfo}>
                            <p className={styles.eventName}>Coding Conf</p>
                            <div className={styles.eventDate}>
                                <p>Jan 31, 2025</p>
                                <p> / </p>
                                <p>Austin, TX</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.speakerInfo}>
                        <img src={avatar.src} alt='speaker-logo' className={styles.speakerAvatar}/>
                        <div className={styles.speakerDetails}>
                            <p className={styles.fullName}>{name}</p>
                            <div className={styles.speakerSocialInfo}>
                                <img src={githubLogo.src} alt='github-logo'/>
                                <p className={styles.speakerEmail}>@{username}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.ticketNumber}>
                    <p>#{ticketNumber}</p>
                </div>
            </div>


        </div>
    )
}
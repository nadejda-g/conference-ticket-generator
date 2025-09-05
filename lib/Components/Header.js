import styles from '@/app/page.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
                <p className={styles.mainHeader}>Your Journey to Coding Conf 2025 Starts Here!</p>
                <p className={styles.subHeader}>Secure your spot at next year’s biggest coding conference.</p>
        </div>
    )
}
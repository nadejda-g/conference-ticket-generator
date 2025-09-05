import styles from '@/app/page.module.css'
import logo from '@/assets/images/logo-full.svg'
import Link from "next/link";
import Image from "next/image";

export default function Logo () {
    return (
        <div className={styles.logo}>
            <Link href={'/'}>
                <Image
                    width={logo.width}
                    height={logo.height}
                    src={logo.src}
                    alt="logo"
                />
            </Link>
        </div>
    )
}
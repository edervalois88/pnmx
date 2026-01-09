'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const router = useRouter();

    // Simple language toggler for now (can be enhanced later)
    // Note: ideally we use a proper router wrapper or Link from navigation adapter
    const toggleLanguage = () => {
        // This is a placeholder logic. Real implementation depends on how routing is set up for i18n
        // For this simple setup, we might assume the locale is handled by next-intl automatically or via middleware
        // But since we are using basic setup, we will just reload for now or skip if complex
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>PouchNation LatAm</div>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/pouchevents" className={styles.navLink}>{t('events')}</Link>
                <Link href="/pouchvenues" className={styles.navLink}>{t('venues')}</Link>
                <Link href="/pouchconnect" className={styles.navLink}>PouchConnect</Link>
            </nav>
            <div className={styles.actions}>
                <button className={`${styles.button} ${styles.langSwitch}`}>ES / EN</button>
                <Link href="#contact" className={`${styles.button} ${styles.primaryButton}`}>{t('contact')}</Link>
            </div>
        </header>
    );
}

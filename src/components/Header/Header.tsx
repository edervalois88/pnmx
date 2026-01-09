'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
    const t = useTranslations('Navigation');
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image
                    src="/logo-wide.png"
                    alt="PouchNation LatAm"
                    width={180}
                    height={40}
                    className={styles.logoImage}
                    priority
                />
            </div>

            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>Home</Link>

                {/* Dropdown for Solutions */}
                <div className={styles.dropdown}>
                    <span className={styles.navLink}>
                        {t('solutions')} <ChevronDown size={14} className={styles.arrowDown} />
                    </span>
                    <div className={styles.dropdownContent}>
                        <Link href="/pouchvenues" className={styles.dropdownItem}>{t('venues')}</Link>
                        <Link href="/pouchevents" className={styles.dropdownItem}>{t('events')}</Link>
                        <Link href="/pouchconnect" className={styles.dropdownItem}>Developers (API)</Link>
                    </div>
                </div>

                <Link href="#about" className={styles.navLink}>{t('about')}</Link>
                <Link href="#contact" className={styles.navLink}>{t('contact')}</Link>
            </nav>

            <div className={styles.actions}>
                <button
                    onClick={toggleTheme}
                    className={`${styles.button} ${styles.themeToggle}`}
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? (
                        <Sun size={20} color="#fff" />
                    ) : (
                        <Moon size={20} color="#000" />
                    )}
                </button>
                <button className={`${styles.button} ${styles.langSwitch}`}>ES / EN</button>
                <Link href="#contact" className={`${styles.button} ${styles.primaryButton}`}>
                    {t('bookDemo')}
                </Link>
            </div>
        </header>
    );
}

'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const t = useTranslations('Navigation');
    const { theme, toggleTheme } = useTheme();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);

    const switchLocale = (newLocale: string) => {
        // Remove current locale from pathname and add new one
        const segments = pathname.split('/').filter(Boolean);
        if (segments[0] === 'es' || segments[0] === 'en') {
            segments.shift();
        }
        const newPath = `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
        router.push(newPath);
        setLangDropdownOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src="/logo-full.png"
                        alt="PouchNation"
                        width={200}
                        height={50}
                        className={styles.logoImage}
                        priority
                    />
                </Link>
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

                {/* Language Selector Dropdown */}
                <div className={styles.dropdown}>
                    <button
                        className={`${styles.button} ${styles.langSwitch}`}
                        onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    >
                        <Globe size={16} style={{ marginRight: '0.5rem' }} />
                        {locale.toUpperCase()}
                    </button>
                    {langDropdownOpen && (
                        <div className={styles.dropdownContent} style={{ minWidth: '120px' }}>
                            <button
                                onClick={() => switchLocale('es')}
                                className={styles.dropdownItem}
                                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                🇲🇽 Español
                            </button>
                            <button
                                onClick={() => switchLocale('en')}
                                className={styles.dropdownItem}
                                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                🇺🇸 English
                            </button>
                        </div>
                    )}
                </div>

                <Link href="#contact" className={`${styles.button} ${styles.primaryButton}`}>
                    {t('bookDemo')}
                </Link>
            </div>
        </header>
    );
}

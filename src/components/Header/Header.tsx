'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Moon, Sun, Globe, Menu, X } from 'lucide-react';
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split('/').filter(Boolean);
        if (segments[0] === 'es' || segments[0] === 'en') {
            segments.shift();
        }
        const newPath = `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
        router.push(newPath);
        setLangDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/" className={styles.logoLink} onClick={() => setIsMobileMenuOpen(false)}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/logo-full.png"
                            alt="PouchNation"
                            fill
                            className={styles.logoImage}
                            priority
                        />
                    </div>
                </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
                className={styles.mobileMenuBtn}
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation and Actions Container - Collapsible on Mobile */}
            <div className={`${styles.menuContainer} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                <nav className={styles.nav}>
                    <Link
                        href="/"
                        className={`${styles.navLink} ${pathname === '/' || pathname === '/es' ? styles.active : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Inicio
                    </Link>

                    {/* Dropdown for Solutions */}
                    <div className={`${styles.dropdown} ${styles.navDropdown}`}>
                        <span className={`${styles.navLink} ${pathname.includes('/pouch') ? styles.active : ''}`}>
                            Soluciones <ChevronDown size={14} className={styles.arrowDown} />
                        </span>
                        <div className={styles.dropdownContent}>
                            <Link href="/pouchvenues" className={styles.dropdownItem} onClick={() => setIsMobileMenuOpen(false)}>PouchVenues</Link>
                            <Link href="/pouchevents" className={styles.dropdownItem} onClick={() => setIsMobileMenuOpen(false)}>PouchEvents</Link>
                            <Link href="/pouchconnect" className={styles.dropdownItem} onClick={() => setIsMobileMenuOpen(false)}>PouchConnect (API)</Link>
                        </div>
                    </div>

                    <Link
                        href="/recursos-ia"
                        className={`${styles.navLink} ${pathname === '/recursos-ia' ? styles.active : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span className={styles.iconText}>⚡</span> Recursos IA
                    </Link>

                    <Link
                        href="/about-us"
                        className={`${styles.navLink} ${pathname === '/about-us' ? styles.active : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Nosotros
                    </Link>
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

                    <Link
                        href="/contact"
                        className={`${styles.button} ${styles.primaryButton}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('bookDemo')}
                    </Link>
                </div>
            </div>
        </header>
    );
}

'use client';

import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brandCol}>
                        <span className={styles.logo}>PouchNation LatAm</span>
                        <p className={styles.tagline}>
                            {t('HomePage.subtitle')}
                        </p>
                    </div>

                    <div className={styles.linksCol}>
                        <div className={styles.linkGroup}>
                            <h4>{t('Navigation.solutions')}</h4>
                            <ul>
                                <li><a href="#events">{t('Navigation.events')}</a></li>
                                <li><a href="#venues">{t('Navigation.venues')}</a></li>
                            </ul>
                        </div>
                        <div className={styles.linkGroup}>
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">{t('Navigation.about')}</a></li>
                                <li><a href="#contact">{t('Navigation.contact')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p>© {new Date().getFullYear()} PouchNation. All rights reserved.</p>
                    <p>Tropicalized for LatAm 🌴</p>
                </div>
            </div>
        </footer>
    );
}

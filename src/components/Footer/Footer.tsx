'use client';

import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

import Link from 'next/link';

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
                            <h4>Soluciones</h4>
                            <ul>
                                <li><Link href="/pouchvenues">PouchVenues</Link></li>
                                <li><Link href="/pouchevents">PouchEvents</Link></li>
                                <li><Link href="/pouchconnect">PouchConnect (API)</Link></li>
                            </ul>
                        </div>
                        <div className={styles.linkGroup}>
                            <h4>Compañía</h4>
                            <ul>
                                <li><Link href="/about-us">Nosotros</Link></li>
                                <li><Link href="/contact">Contacto</Link></li>
                                <li><Link href="/recursos-ia">Recursos IA</Link></li>
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

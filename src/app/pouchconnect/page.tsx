'use client';

import { useTranslations } from 'next-intl';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './page.module.css';

export default function PouchConnect() {
    const t = useTranslations('PouchConnect');
    const details = ['f1', 'f2', 'f3'] as const;

    return (
        <div className={styles.page}>
            <Header />
            <main>
                <section className={styles.hero}>
                    <h1 className={styles.title}>{t('title')}</h1>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </section>
                <section className={styles.grid}>
                    {details.map((key) => (
                        <div key={key} className={styles.card}>
                            <h3>{t(`features.${key}.title`)}</h3>
                            <p>{t(`features.${key}.desc`)}</p>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}

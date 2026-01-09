'use client';

import { useTranslations } from 'next-intl';
import styles from './TrustBar.module.css';

export default function TrustBar() {
    const t = useTranslations('TrustBar');

    // Placeholder text for logos if we don't have SVGs yet
    const partners = ['AMPROFEC', 'MPI México', 'OXXO Pay', 'Visa', 'Mastercard'];

    return (
        <section className={styles.bar}>
            <p className={styles.title}>{t('title')}</p>
            <div className={styles.logoGrid}>
                {partners.map((partner) => (
                    <span key={partner} className={styles.logoPlaceholder}>{partner}</span>
                ))}
            </div>
        </section>
    );
}

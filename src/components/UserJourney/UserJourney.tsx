'use client';

import { useTranslations } from 'next-intl';
import styles from './UserJourney.module.css';

export default function UserJourney() {
    const t = useTranslations('UserJourney');

    const steps = [1, 2, 3, 4];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.timeline}>
                {steps.map((num) => (
                    <div key={num} className={styles.step}>
                        <div className={styles.circle}>{num}</div>
                        <p className={styles.stepText}>{t(`step${num}`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

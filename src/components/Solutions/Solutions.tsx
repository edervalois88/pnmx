'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import styles from './Solutions.module.css';

export default function Solutions() {
    const t = useTranslations('Solutions');

    const categories = ['events', 'venues'] as const;

    return (
        <section id="solutions" className={styles.section}>
            <h2 className={styles.title}>{t('title')}</h2>
            <p className={styles.subtitle}>{t('subtitle')}</p>

            <div className={styles.grid}>
                {categories.map((cat) => (
                    <div key={cat} className={styles.card}>
                        <h3 className={styles.cardTitle}>{t(`${cat}.title`)}</h3>
                        <p className={styles.cardDesc}>{t(`${cat}.desc`)}</p>
                        <ul className={styles.featureList}>
                            {/* We'll assume fixed 4 features for now as defined in JSON */}
                            {[0, 1, 2, 3].map((idx) => {
                                // Accessing array in json via next-intl can be tricky if not explicit
                                // A common pattern is t.raw or structured access, but let's try direct key if possible 
                                // or just iterate known keys if the structure allows.
                                // For safety with type checking in next-intl, we often use specific keys.
                                // Let's assume the JSON is an array or object we can map. 
                                // Actually next-intl returns strings usually.
                                // Let's rely on `t.rich` or similar if we want markup, but here we just need text.
                                // "features" is an array in JSON.
                                return (
                                    <li key={idx} className={styles.featureItem}>
                                        <CheckCircle2 className={styles.checkIcon} size={20} />
                                        {t(`${cat}.features.${idx}`)}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

'use client';

import { useTranslations } from 'next-intl';
import { TrendingUp, BarChart3, ShieldCheck, WifiOff } from 'lucide-react';
import styles from './FeatureGrid.module.css';

export default function FeatureGrid() {
    const t = useTranslations('Features');

    const features = [
        { key: 'f1', Icon: TrendingUp },
        { key: 'f2', Icon: BarChart3 },
        { key: 'f3', Icon: ShieldCheck },
        { key: 'f4', Icon: WifiOff },
    ];

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>{t('title')}</h2>
                </div>
                <div className={styles.grid}>
                    {features.map(({ key, Icon }) => (
                        <div key={key} className={styles.item}>
                            <div className={styles.iconWrapper}>
                                <Icon size={24} />
                            </div>
                            <h3 className={styles.itemTitle}>{t(`${key}.title`)}</h3>
                            <p className={styles.itemText}>{t(`${key}.desc`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

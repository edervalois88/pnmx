'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('HomePage');

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {t.rich('heroTitle', {
                            highlight: (chunks) => <span className={styles.highlight}>{chunks}</span>
                        })}
                    </h1>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>

                    <Link href="#contact" className={styles.ctaButton}>
                        {t('getStarted')}
                    </Link>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>200+</span>
                            <span className={styles.statLabel}>{t('stats.customers')}</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>290M</span>
                            <span className={styles.statLabel}>{t('stats.datapoints')}</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>$100M</span>
                            <span className={styles.statLabel}>{t('stats.transactions')}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/hero-image.png"
                        alt="PouchNation Experience"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

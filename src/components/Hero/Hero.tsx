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
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Líder en Tecnología Cashless LATAM
                    </div>

                    <h1 className={styles.title}>
                        Tu evento en México,<br />
                        <span className={styles.gradientText}>Sin Efectivo.</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Digitaliza la experiencia de tus asistentes. Aumenta tus ingresos un 30% y elimina el robo hormiga. Tecnología que funciona <span className={styles.boldWhite}>incluso sin internet</span>.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Link href="#contact" className={styles.ctaButton}>
                            Cotizar Evento
                        </Link>
                        <Link href="#video" className={styles.secondaryButton}>
                            Ver Video
                        </Link>
                    </div>
                </div>

                {/* Mockup Overlay Card - Now standalone */}
                <div className={styles.floatingCard}>
                    <div className={styles.cardHeader}>
                        <div>
                            <div className={styles.cardLabel}>Ventas Tiempo Real</div>
                            <div className={styles.cardValue}>$1,245,890 <span className={styles.cardCurrency}>MXN</span></div>
                        </div>
                        <div className={styles.cardBadge}>+32% vs Efectivo</div>
                    </div>
                    {/* Simple Bar Chart Visualization */}
                    <div className={styles.chart}>
                        <div className={styles.bar} style={{ height: '40%' }}></div>
                        <div className={styles.bar} style={{ height: '60%' }}></div>
                        <div className={`${styles.bar} ${styles.activeBar}`} style={{ height: '85%' }}></div>
                        <div className={styles.bar} style={{ height: '70%' }}></div>
                        <div className={styles.bar} style={{ height: '65%' }}></div>
                    </div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className={`${styles.floatingShape} ${styles.shape1}`} />
            <div className={`${styles.floatingShape} ${styles.shape2}`} />
        </section>
    );
}

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('HomePage');

    // Animated counters for statistics
    const customers = useCountUp({ end: 200, duration: 2000, suffix: '+' });
    const dataPoints = useCountUp({ end: 290, duration: 2000, suffix: 'M' });
    const transactions = useCountUp({ end: 100, duration: 2000, prefix: '$', suffix: 'M' });

    // Animated counter for revenue card
    const revenue = useCountUp({
        end: 1245890,
        duration: 2500,
        prefix: '$',
        suffix: ''
    });

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                {/* Left Column - Content */}
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

                    {/* Statistics Section - below CTAs */}
                    <div className={styles.statsSection} ref={customers.ref}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>{customers.value}</div>
                            <div className={styles.statLabel}>Clientes Satisfechos</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>{dataPoints.value}</div>
                            <div className={styles.statLabel}>Datos Recolectados</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>{transactions.value}</div>
                            <div className={styles.statLabel}>Transacciones</div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Visual Card */}
                <div className={styles.visualColumn}>
                    <div className={styles.floatingCard} ref={revenue.ref}>
                        <div className={styles.cardHeader}>
                            <div>
                                <div className={styles.cardLabel}>Ventas Tiempo Real</div>
                                <div className={styles.cardValue}>
                                    {revenue.value} <span className={styles.cardCurrency}>MXN</span>
                                </div>
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
            </div>

            {/* Decorative background elements */}
            <div className={`${styles.floatingShape} ${styles.shape1}`} />
            <div className={`${styles.floatingShape} ${styles.shape2}`} />
        </section>
    );
}

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './Hero.module.css';

export default function Hero() {
    const t = useTranslations('HomePage');

    // Animated counters for hero stats (below image)
    const users = useCountUp({ end: 10, duration: 2000, suffix: 'M+' });
    const processed = useCountUp({ end: 500, duration: 2000, prefix: '$', suffix: 'M' });
    const uptime = useCountUp({ end: 99.9, duration: 2000, decimals: 1, suffix: '%' });

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

                    {/* Statistics Section - below CTAs, outside of card */}
                    <div className={styles.heroStats}>
                        <div className={styles.heroStatItem} ref={users.ref}>
                            <div className={styles.heroStatValue}>{users.value}</div>
                            <div className={styles.heroStatLabel}>Usuarios</div>
                        </div>
                        <div className={styles.heroStatItem} ref={processed.ref}>
                            <div className={styles.heroStatValue}>{processed.value}</div>
                            <div className={styles.heroStatLabel}>Procesados</div>
                        </div>
                        <div className={styles.heroStatItem} ref={uptime.ref}>
                            <div className={styles.heroStatValue}>{uptime.value}</div>
                            <div className={styles.heroStatLabel}>Uptime</div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Visual Card with Background Image */}
                <div className={styles.visualColumn}>
                    {/* Background Image Container */}
                    <div className={styles.imageContainer}>
                        <Image
                            src="/hero-payment-card.png"
                            alt="Pago cashless con tarjeta PouchNATION en playa"
                            fill
                            className={styles.heroBackgroundImage}
                            priority
                        />
                    </div>

                    {/* Floating Card - simplified like original */}
                    <div className={styles.floatingCard} ref={revenue.ref}>
                        <div className={styles.cardHeader}>
                            <div>
                                <div className={styles.cardLabel}>Ventas Vivo</div>
                                <div className={styles.cardValue}>{revenue.value}</div>
                            </div>
                            <div className={styles.cardBadge}>+32%</div>
                        </div>

                        {/* Horizontal Progress Bars */}
                        <div className={styles.progressBars}>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: '75%', backgroundColor: '#04AEF0' }}></div>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: '50%', backgroundColor: '#3B82F6' }}></div>
                            </div>
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

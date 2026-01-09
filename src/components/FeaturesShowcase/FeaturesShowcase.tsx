'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturesShowcase.module.css';

export default function FeaturesShowcase() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left side - Text content */}
                <div className={styles.content}>
                    <div className={styles.badge}>Más Rápido y Más Inteligente</div>
                    <h2 className={styles.title}>
                        PouchNATION Hace <br />
                        Todo Más Fácil
                    </h2>
                    <p className={styles.description}>
                        Nuestra plataforma de pagos sin efectivo y gestión de invitados
                        ayuda a eventos y venues a aumentar ingresos, acelerar transacciones
                        y optimizar operaciones.
                    </p>
                </div>

                {/* Right side - Cards */}
                <div className={styles.cards}>
                    {/* Venues Card */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/venue-waterpark.png"
                                alt="Para Venues"
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Para Venues</h3>
                            <p className={styles.cardDescription}>
                                Operaciones inteligentes, fluidas y generadoras de ingresos.
                            </p>
                            <Link href="/pouchvenues" className={styles.cardLink}>
                                Conoce más →
                            </Link>
                        </div>
                    </div>

                    {/* Events Card */}
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/event-concert.png"
                                alt="Para Eventos"
                                fill
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Para Eventos</h3>
                            <p className={styles.cardDescription}>
                                La solución definitiva para eventos impactantes y sin complicaciones.
                            </p>
                            <Link href="/pouchevents" className={styles.cardLink}>
                                Conoce más →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

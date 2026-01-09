'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './AboutSection.module.css';

export default function AboutSection() {
    const imageReveal = useScrollReveal({ threshold: 0.2 });
    const contentReveal = useScrollReveal({ threshold: 0.2 });

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left side - Image */}
                <div
                    ref={imageReveal.ref}
                    className={`${styles.imageWrapper} ${imageReveal.isVisible ? styles.visible : ''}`}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src="/nfc-wristband.png"
                            alt="Pulsera NFC para pagos"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Right side - Content */}
                <div
                    ref={contentReveal.ref}
                    className={`${styles.content} ${contentReveal.isVisible ? styles.visible : ''}`}
                >
                    <div className={styles.badge}>Sobre Nosotros</div>
                    <h2 className={styles.title}>
                        Más de una Década de <br />
                        Soluciones Globales <br />
                        para Eventos
                    </h2>
                    <p className={styles.description}>
                        Con más de una década de experiencia en 6 continentes,
                        PouchNATION es un socio de confianza para eventos y venues
                        a nivel mundial, proporcionando soluciones integrales de principio a fin.
                    </p>

                    {/* Stats */}
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>10+</div>
                            <div className={styles.statLabel}>Años de Experiencia</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>6</div>
                            <div className={styles.statLabel}>Continentes</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>1000+</div>
                            <div className={styles.statLabel}>Eventos Exitosos</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

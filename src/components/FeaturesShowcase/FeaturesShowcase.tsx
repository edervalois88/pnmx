'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './FeaturesShowcase.module.css';

const features = [
    {
        id: 'venues',
        title: 'Para Venues',
        subtitle: 'Operaciones inteligentes, fluidas y generadoras de ingresos.',
        description: 'Nuestra plataforma de pagos sin efectivo y gestión de invitados ayuda a eventos y venues a aumentar ingresos, acelerar transacciones y optimizar operaciones.',
        image: '/venue-waterpark.png',
        link: '/pouchvenues',
        color: '#04AEF0',
    },
    {
        id: 'events',
        title: 'Para Eventos',
        subtitle: 'La solución definitiva para eventos impactantes y sin complicaciones.',
        description: 'Check-ins sin esfuerzo y pagos sin efectivo—configuración fácil, eventos más fluidos, mayores ganancias. Perfecto para festivales y conciertos.',
        image: '/event-concert.png',
        link: '/pouchevents',
        color: '#8B5CF6',
    },
];

export default function FeaturesShowcase() {
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const reveal = useScrollReveal({ threshold: 0.2 });

    return (
        <section className={styles.section}>
            <div className={styles.container} ref={reveal.ref}>
                {/* Header */}
                <div className={`${styles.header} ${reveal.isVisible ? styles.visible : ''}`}>
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

                {/* Expandable Cards */}
                <div className={`${styles.cardsContainer} ${reveal.isVisible ? styles.visible : ''}`}>
                    {features.map((feature) => {
                        const isActive = activeCard === feature.id;
                        const isOtherActive = activeCard !== null && activeCard !== feature.id;

                        return (
                            <div
                                key={feature.id}
                                className={`${styles.expandCard} ${isActive ? styles.active : ''} ${isOtherActive ? styles.collapsed : ''}`}
                                onMouseEnter={() => setActiveCard(feature.id)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Background Image */}
                                <div className={styles.cardBackground}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className={styles.backgroundImage}
                                    />
                                    <div className={styles.overlay} style={{ background: `linear-gradient(135deg, ${feature.color}CC 0%, ${feature.color}99 100%)` }}></div>
                                </div>

                                {/* Content */}
                                <div className={styles.cardContent}>
                                    {/* Collapsed View - Title Only */}
                                    <div className={styles.collapsedContent}>
                                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                                    </div>

                                    {/* Expanded View - Full Info */}
                                    <div className={styles.expandedContent}>
                                        <h3 className={styles.cardTitleExpanded}>{feature.title}</h3>
                                        <p className={styles.cardSubtitle}>{feature.subtitle}</p>
                                        <p className={styles.cardDescription}>{feature.description}</p>
                                        <Link href={feature.link} className={styles.cardLink}>
                                            Conoce más
                                            <ArrowRight size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

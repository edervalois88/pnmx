'use client';

import { TrendingUp, BarChart3, ShieldCheck, Wifi } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './FeatureGrid.module.css';

const features = [
    {
        icon: TrendingUp,
        title: 'Cumplimiento Fiscal (SAT)',
        description: 'Módulo de Autofacturación CFDI 4.0 integrado. Tus asistentes facturan sus consumos en segundos.',
        color: '#04AEF0',
    },
    {
        icon: BarChart3,
        title: 'Transparencia Radical',
        description: 'Reembolsos automáticos y sin letras chiquitas. Cumple con los nuevos lineamientos de la Profeco.',
        color: '#8B5CF6',
    },
    {
        icon: ShieldCheck,
        title: 'Seguridad 100% Offline',
        description: 'Nuestra red local no se cae. Sigue vendiendo en Tulum o el desierto aunque falle el 4G.',
        color: '#10B981',
    },
    {
        icon: Wifi,
        title: 'Blindaje Financiero',
        description: 'El staff nunca toca el dinero. Elimina el riesgo de efectivo circulante y desaparece en barra.',
        color: '#F59E0B',
    },
];

export default function FeatureGrid() {
    const reveal = useScrollReveal({ threshold: 0.2 });

    return (
        <section className={styles.section} id="features">
            <div className={styles.container} ref={reveal.ref}>
                {/* Header */}
                <div className={`${styles.header} ${reveal.isVisible ? styles.visible : ''}`}>
                    <h2 className={styles.title}>
                        Por qué PouchNATION es el <br />
                        <span className={styles.titleAccent}>Estándar en México</span>
                    </h2>
                </div>

                {/* Compact Grid */}
                <div className={`${styles.grid} ${reveal.isVisible ? styles.visible : ''}`}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={styles.featureCard}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.iconBox} style={{ backgroundColor: `${feature.color}15` }}>
                                    <Icon size={24} color={feature.color} strokeWidth={2.5} />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDesc}>{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

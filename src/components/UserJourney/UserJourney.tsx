'use client';

import { useState } from 'react';
import { Smartphone, Zap, ShoppingBag, TrendingUp, CreditCard, Users, CheckCircle, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './UserJourney.module.css';

const journeySteps = [
    {
        id: 1,
        icon: Smartphone,
        title: 'Recarga Fácil',
        subtitle: 'Online o OXXO Pay',
        description: 'Carga saldo desde tu celular o en cualquier OXXO. Sin filas, sin complicaciones.',
        color: '#04AEF0',
        gradient: 'linear-gradient(135deg, #04AEF0 0%, #0284C7 100%)',
    },
    {
        id: 2,
        icon: Zap,
        title: 'Acceso Rápido',
        subtitle: 'NFC & QR',
        description: 'Entra al evento con tu pulsera NFC o código QR. Acceso instantáneo sin contacto.',
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    },
    {
        id: 3,
        icon: ShoppingBag,
        title: 'Consume Tap & Go',
        subtitle: 'Sin Efectivo',
        description: 'Compra comida, bebidas y mercancía con solo acercar tu pulsera. Rápido y seguro.',
        color: '#10B981',
        gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    },
    {
        id: 4,
        icon: TrendingUp,
        title: 'Reembolso Automático',
        subtitle: 'Saldo Restante',
        description: 'Al finalizar el evento, tu saldo no usado regresa automáticamente a tu cuenta.',
        color: '#F59E0B',
        gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    },
];

export default function UserJourney() {
    const [activeStep, setActiveStep] = useState(0);
    const reveal = useScrollReveal({ threshold: 0.1 });

    return (
        <section className={styles.section} id="journey">
            <div className={styles.container} ref={reveal.ref}>
                {/* Header */}
                <div className={`${styles.header} ${reveal.isVisible ? styles.visible : ''}`}>
                    <div className={styles.badge}>
                        <Sparkles size={16} />
                        Experiencia del Usuario
                    </div>
                    <h2 className={styles.title}>
                        El Viaje del Usuario <br />
                        <span className={styles.titleAccent}>Mexicano</span>
                    </h2>
                    <p className={styles.description}>
                        Desde la recarga hasta el reembolso, cada paso está diseñado
                        para hacer tu experiencia fluida y sin complicaciones.
                    </p>
                </div>

                {/* Journey Timeline */}
                <div className={`${styles.timeline} ${reveal.isVisible ? styles.visible : ''}`}>
                    {journeySteps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === index;

                        return (
                            <div
                                key={step.id}
                                className={`${styles.stepWrapper} ${isActive ? styles.active : ''}`}
                                onMouseEnter={() => setActiveStep(index)}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                {/* Connector Line */}
                                {index < journeySteps.length - 1 && (
                                    <div className={styles.connector} style={{ background: step.gradient }}></div>
                                )}

                                {/* Step Card */}
                                <div className={styles.stepCard}>
                                    {/* Number Badge */}
                                    <div className={styles.stepNumber} style={{ background: step.gradient }}>
                                        {step.id}
                                    </div>

                                    {/* Icon Circle */}
                                    <div className={styles.iconCircle} style={{ background: step.gradient }}>
                                        <Icon size={32} color="white" />
                                    </div>

                                    {/* Content */}
                                    <div className={styles.stepContent}>
                                        <div className={styles.stepSubtitle} style={{ color: step.color }}>
                                            {step.subtitle}
                                        </div>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDescription}>{step.description}</p>
                                    </div>

                                    {/* Hover Effect Glow */}
                                    <div className={styles.glowEffect} style={{ background: step.gradient }}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats */}
                <div className={`${styles.stats} ${reveal.isVisible ? styles.visible : ''}`}>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <Users size={28} color="#04AEF0" />
                        </div>
                        <div className={styles.statValue}>10M+</div>
                        <div className={styles.statLabel}>Usuarios Satisfechos</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <CreditCard size={28} color="#10B981" />
                        </div>
                        <div className={styles.statValue}>$500M</div>
                        <div className={styles.statLabel}>Procesados</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <CheckCircle size={28} color="#8B5CF6" />
                        </div>
                        <div className={styles.statValue}>99.9%</div>
                        <div className={styles.statLabel}>Uptime</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

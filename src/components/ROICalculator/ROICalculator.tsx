'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Users, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ROICalculator.module.css';

export default function ROICalculator() {
    const [attendees, setAttendees] = useState(5000);
    const [avgSpend, setAvgSpend] = useState(500);

    const reveal = useScrollReveal({ threshold: 0.2 });

    const formatMoney = (amount: number) => {
        return '$' + amount.toLocaleString('es-MX', { maximumFractionDigits: 0 });
    };

    const cashRevenue = attendees * avgSpend;
    const cashlessUplift = cashRevenue * 0.30; // 30% increase
    const totalRevenue = cashRevenue + cashlessUplift;
    const savedTime = attendees * 0.5; // 30 seconds saved per transaction

    return (
        <section className={styles.section} id="calculator">
            <div className={styles.container} ref={reveal.ref}>
                {/* Header */}
                <div className={`${styles.header} ${reveal.isVisible ? styles.visible : ''}`}>
                    <div className={styles.badge}>Calculadora de Impacto</div>
                    <h2 className={styles.title}>
                        Descubre el Potencial <br />
                        de Tu Evento
                    </h2>
                    <p className={styles.description}>
                        Calcula cuánto puedes aumentar tus ingresos y mejorar la experiencia
                        de tus asistentes con pagos sin efectivo.
                    </p>
                </div>

                {/* Calculator Grid */}
                <div className={`${styles.calculatorGrid} ${reveal.isVisible ? styles.visible : ''}`}>
                    {/* Left Side - Inputs */}
                    <div className={styles.inputsSection}>
                        <div className={styles.inputCard}>
                            <div className={styles.inputHeader}>
                                <Users size={24} color="#04AEF0" />
                                <span className={styles.inputLabel}>Número de Asistentes</span>
                            </div>
                            <div className={styles.inputValue}>{attendees.toLocaleString()}</div>
                            <input
                                type="range"
                                min="500"
                                max="50000"
                                step="500"
                                value={attendees}
                                onChange={(e) => setAttendees(Number(e.target.value))}
                                className={styles.slider}
                            />
                        </div>

                        <div className={styles.inputCard}>
                            <div className={styles.inputHeader}>
                                <DollarSign size={24} color="#04AEF0" />
                                <span className={styles.inputLabel}>Gasto Promedio por Persona</span>
                            </div>
                            <div className={styles.inputValue}>{formatMoney(avgSpend)} MXN</div>
                            <input
                                type="range"
                                min="100"
                                max="3000"
                                step="50"
                                value={avgSpend}
                                onChange={(e) => setAvgSpend(Number(e.target.value))}
                                className={styles.slider}
                            />
                        </div>
                    </div>

                    {/* Right Side - Results */}
                    <div className={styles.resultsSection}>
                        <div className={styles.resultCard}>
                            <div className={styles.resultHeader}>
                                <TrendingUp size={28} color="#04AEF0" />
                                <span className={styles.resultTitle}>Tu Impacto con PouchNATION</span>
                            </div>

                            <div className={styles.resultStats}>
                                <div className={styles.statItem}>
                                    <div className={styles.statLabel}>Ingresos con Efectivo</div>
                                    <div className={styles.statValue}>{formatMoney(cashRevenue)} MXN</div>
                                </div>

                                <div className={styles.upliftStat}>
                                    <div className={styles.upliftLabel}>
                                        <Zap size={20} color="#10B981" />
                                        Incremento Cashless (+30%)
                                    </div>
                                    <div className={styles.upliftValue}>+{formatMoney(cashlessUplift)} MXN</div>
                                </div>

                                <div className={styles.totalStat}>
                                    <div className={styles.totalLabel}>Ingresos Totales Proyectados</div>
                                    <div className={styles.totalValue}>{formatMoney(totalRevenue)} MXN</div>
                                </div>
                            </div>

                            <div className={styles.benefits}>
                                <div className={styles.benefitItem}>
                                    <div className={styles.benefitIcon}>⚡</div>
                                    <div>
                                        <div className={styles.benefitTitle}>Velocidad 3x Mayor</div>
                                        <div className={styles.benefitDesc}>Transacciones más rápidas</div>
                                    </div>
                                </div>
                                <div className={styles.benefitItem}>
                                    <div className={styles.benefitIcon}>💰</div>
                                    <div>
                                        <div className={styles.benefitTitle}>-40% Costos</div>
                                        <div className={styles.benefitDesc}>Reducción operativa</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

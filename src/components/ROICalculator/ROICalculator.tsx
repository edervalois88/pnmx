'use client';

import { useState } from 'react';
import styles from './ROICalculator.module.css';

export default function ROICalculator() {
    const [attendees, setAttendees] = useState(5000);
    const [ticket, setTicket] = useState(500);

    const formatMoney = (amount: number) => {
        return '$' + amount.toLocaleString('es-MX', { maximumFractionDigits: 0 }) + ' MXN';
    };

    const baseRevenue = attendees * ticket;
    const uplift = baseRevenue * 0.30;
    const total = baseRevenue + uplift;

    return (
        <section className={styles.section} id="calculator">
            <div className={styles.container}>
                <div>
                    <h2 className={styles.title}>Calculadora de Impacto</h2>
                    <p className={styles.subtitle}>
                        Visualiza cuánto dinero estás dejando sobre la mesa por usar efectivo o tokens físicos.
                    </p>
                    <div className={styles.benefitList}>
                        <div className={styles.benefitItem}>
                            <span className={styles.benefitIcon}>↑</span>
                            <span>Velocidad de barra <strong>3x</strong></span>
                        </div>
                        <div className={styles.benefitItem}>
                            <span className={styles.benefitIcon}>↓</span>
                            <span>Costos operativos <strong>-40%</strong></span>
                        </div>
                    </div>
                </div>

                <div className={styles.calculatorCard}>
                    <div className={styles.inputGroup}>
                        <div className={styles.labelRow}>
                            <span className={styles.label}>Asistentes</span>
                            <span className={styles.value}>{attendees.toLocaleString()}</span>
                        </div>
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

                    <div className={styles.inputGroup}>
                        <div className={styles.labelRow}>
                            <span className={styles.label}>Ticket Promedio</span>
                            <span className={styles.value}>${ticket} MXN</span>
                        </div>
                        <input
                            type="range"
                            min="100"
                            max="3000"
                            step="50"
                            value={ticket}
                            onChange={(e) => setTicket(Number(e.target.value))}
                            className={styles.slider}
                        />
                    </div>

                    <div className={styles.resultBox}>
                        <div className={styles.resultRow}>
                            <span className={styles.resultLabel}>Ingresos Actuales</span>
                            <span className={styles.resultVal}>{formatMoney(baseRevenue)}</span>
                        </div>
                        <div className={styles.resultRow}>
                            <span className={styles.upliftText}>Uplift Cashless (+30%)</span>
                            <span className={styles.upliftAmount}>+{formatMoney(uplift)}</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span className={styles.totalLabel}>Total Pouch</span>
                            <span className={styles.totalAmount}>{formatMoney(total)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState } from 'react';
import { Upload, Brain, Eye } from 'lucide-react';
import styles from './AISuite.module.css';

export default function AISuite() {
    const [analyzing, setAnalyzing] = useState(false);

    const handleAnalyze = () => {
        setAnalyzing(true);
        setTimeout(() => setAnalyzing(false), 2000); // Simulate loading
    };

    return (
        <section className={styles.section} id="ai-tools">
            <div className={styles.backgroundGlow} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Inteligencia Artificial Pouch</span>
                    <h2 className={styles.title}>Suite de Optimización de Eventos</h2>
                    <p className={styles.description}>
                        Dos herramientas potentes impulsadas por Gemini para planear tu estrategia y optimizar tu operación.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Strategy Tool */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <Brain size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>Consultor Estratégico</h3>
                        </div>

                        <div className={styles.cardForm}>
                            <div>
                                <label className={styles.inputLabel}>Tipo de Evento</label>
                                <select className={styles.select}>
                                    <option>Festival de Música</option>
                                    <option>Torneo Deportivo</option>
                                    <option>Convención</option>
                                    <option>Hotel All-Inclusive</option>
                                </select>
                            </div>
                            <div>
                                <label className={styles.inputLabel}>Mayor Reto</label>
                                <select className={styles.select}>
                                    <option value="connectivity">Mala conectividad / Internet</option>
                                    <option value="theft">Robo de efectivo (Staff)</option>
                                    <option value="queues">Filas largas en barras</option>
                                    <option value="sat">Problemas con Facturación SAT</option>
                                </select>
                            </div>

                            <button className={styles.actionButton}>
                                Generar Pitch
                            </button>
                        </div>
                    </div>

                    {/* Vision Tool */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.iconWrapper} ${styles.secondaryIcon}`}>
                                <Eye size={24} />
                            </div>
                            <div>
                                <h3 className={styles.cardTitle}>Optimizador de Menú</h3>
                                <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>De foto a precios optimizados.</p>
                            </div>
                        </div>

                        <div className={styles.uploadArea}>
                            <Upload size={32} color="#6B7280" />
                            <p className={styles.uploadText}>Sube foto de tu menú/pizarra</p>
                            <p className={styles.uploadSub}>Detecta precios ineficientes</p>
                        </div>

                        <button
                            className={`${styles.actionButton} ${styles.secondaryAction}`}
                            onClick={handleAnalyze}
                        >
                            {analyzing ? 'Analizando...' : 'Analizar Imagen'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

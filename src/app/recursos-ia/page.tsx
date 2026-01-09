'use client';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AISuite from '../../components/AISuite/AISuite';
import styles from './page.module.css';

export default function RecursosIA() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>⚡ Recursos IA</div>
                        <h1 className={styles.title}>
                            Suite de Optimización <br />
                            Impulsada por IA
                        </h1>
                        <p className={styles.description}>
                            Descubre cómo la inteligencia artificial puede transformar
                            tus eventos y venues con análisis predictivo, automatización
                            inteligente y optimización en tiempo real.
                        </p>
                    </div>
                </div>
                <AISuite />
            </main>
            <Footer />
        </div>
    );
}

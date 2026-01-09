'use client';

import { useTranslations } from 'next-intl';
import Header from '../components/Header/Header';
import styles from './page.module.css';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.subtitle}>{t('subtitle')}</p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryButton}>{t('getStarted')}</button>
            <button className={styles.secondaryButton}>{t('learnMore')}</button>
          </div>
        </section>

        {/* Placeholder for other sections */}
        <section id="solutions" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2>Soluciones Tropicalizadas</h2>
          <p>Adaptadas para el mercado Latinoamericano.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 PouchNation LatAm</p>
      </footer>
    </div>
  );
}

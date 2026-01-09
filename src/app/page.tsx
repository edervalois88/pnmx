'use client';

import { useTranslations } from 'next-intl';
import Header from '../components/Header/Header';
import Solutions from '../components/Solutions/Solutions';
import FeatureGrid from '../components/FeatureGrid/FeatureGrid';
import Footer from '../components/Footer/Footer';
import TrustBar from '../components/TrustBar/TrustBar';
import UserJourney from '../components/UserJourney/UserJourney';
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

        <TrustBar />
        <Solutions />
        <UserJourney />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

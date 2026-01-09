'use client';

import { useTranslations } from 'next-intl';
import Hero from '../components/Hero/Hero';
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
        <Hero />

        <TrustBar />
        <Solutions />
        <UserJourney />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

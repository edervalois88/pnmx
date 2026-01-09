'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './TrustBar.module.css';

export default function TrustBar() {
    const t = useTranslations('TrustBar');

    const partners = [
        { name: 'AMPROFEC', logo: '/partners/amprofec.png', width: 160, height: 70 },
        { name: 'MPI México', logo: '/partners/mpi-mexico.png', width: 180, height: 70 },
        { name: 'OXXO Pay', logo: '/partners/oxxo-pay.png', width: 200, height: 60 },
        { name: 'Visa', logo: '/partners/visa.png', width: 140, height: 60 },
        { name: 'Mastercard', logo: '/partners/mastercard.png', width: 140, height: 90 }
    ];

    return (
        <section className={styles.bar}>
            <p className={styles.title}>{t('title')}</p>
            <div className={styles.logoGrid}>
                {partners.map((partner) => (
                    <div key={partner.name} className={styles.logoContainer}>
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={partner.width}
                            height={partner.height}
                            className={styles.logo}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

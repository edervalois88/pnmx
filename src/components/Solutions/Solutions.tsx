'use client';

import Link from 'next/link';
import { DollarSign, Package, CheckCircle, Smartphone, Wifi, FileText, Ticket, UserCheck, Tag, UserCircle, CreditCard, Code } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Solutions.module.css';
import Image from 'next/image';

const venuesFeatures = [
    { icon: DollarSign, title: 'Pagos Sin Efectivo', color: '#04AEF0' },
    { icon: Package, title: 'Gestión de Inventario', color: '#04AEF0' },
    { icon: CheckCircle, title: 'Check-In & Check-Out', color: '#04AEF0' },
    { icon: Smartphone, title: 'Pedidos Móviles', color: '#04AEF0' },
    { icon: Wifi, title: 'Funcionalidad Offline', color: '#04AEF0' },
    { icon: FileText, title: 'Reportes en Tiempo Real', color: '#04AEF0' },
    { icon: Ticket, title: 'Sistema de Vouchers', color: '#04AEF0' },
    { icon: UserCheck, title: 'Control de Acceso', color: '#04AEF0' },
];

const eventsFeatures = [
    { icon: Ticket, title: 'Ticketing Online', color: '#04AEF0' },
    { icon: DollarSign, title: 'Pagos Sin Efectivo', color: '#04AEF0' },
    { icon: UserCheck, title: 'Control de Acceso', color: '#04AEF0' },
    { icon: Smartphone, title: 'Pedidos Móviles', color: '#04AEF0' },
    { icon: Tag, title: 'Tags NFC Personalizados', color: '#04AEF0' },
    { icon: UserCircle, title: 'Escaneo & Registro', color: '#04AEF0' },
    { icon: FileText, title: 'Reportes & Analytics', color: '#04AEF0' },
    { icon: CreditCard, title: 'Sistema de Vouchers', color: '#04AEF0' },
];

export default function Solutions() {
    const venuesReveal = useScrollReveal({ threshold: 0.1 });
    const eventsReveal = useScrollReveal({ threshold: 0.1 });
    const developersReveal = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="solutions" className={styles.section}>
            {/* Venues Section */}
            <div className={styles.solutionBlock} ref={venuesReveal.ref}>
                <div className={styles.stickyTitle}>
                    <div className={styles.badge}>Soluciones</div>
                    <h2 className={styles.title}>Para Venues</h2>
                    <p className={styles.description}>
                        Optimiza entrada y pagos con nuestro sistema todo-en-uno—rápido,
                        sin efectivo y sin complicaciones.
                    </p>
                    <Link href="/pouchvenues" className={styles.learnMore}>
                        Conoce más →
                    </Link>
                </div>
                <div className={`${styles.featuresGrid} ${venuesReveal.isVisible ? styles.visible : ''}`}>
                    {venuesFeatures.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className={styles.featureCard} style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className={styles.iconWrapper} style={{ backgroundColor: `${feature.color}15` }}>
                                    <Icon size={48} color={feature.color} />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Events Section */}
            <div className={styles.solutionBlock} ref={eventsReveal.ref}>
                <div className={styles.stickyTitle}>
                    <div className={styles.badge}>Soluciones</div>
                    <h2 className={styles.title}>Para Eventos</h2>
                    <p className={styles.description}>
                        Check-ins sin esfuerzo y pagos sin efectivo—configuración fácil,
                        eventos más fluidos, mayores ganancias.
                    </p>
                    <Link href="/pouchevents" className={styles.learnMore}>
                        Conoce más →
                    </Link>
                </div>
                <div className={`${styles.featuresGrid} ${eventsReveal.isVisible ? styles.visible : ''}`}>
                    {eventsFeatures.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div key={idx} className={styles.featureCard} style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className={styles.iconWrapper} style={{ backgroundColor: `${feature.color}15` }}>
                                    <Icon size={48} color={feature.color} />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Developers Section */}
            <div className={styles.solutionBlock} ref={developersReveal.ref}>
                <div className={styles.stickyTitle}>
                    <div className={styles.badge}>Soluciones</div>
                    <h2 className={styles.title}>Para Desarrolladores</h2>
                    <p className={styles.description}>
                        Con nuestra amplia gama de API's abiertas, puedes vincular aplicaciones
                        de terceros a nuestro sistema proporcionando operaciones más fluidas y
                        mejores experiencias para los invitados. ¡Configura, prueba y activa en solo unos pasos!
                    </p>
                    <Link href="/pouchconnect" className={styles.learnMore}>
                        Conoce más →
                    </Link>
                </div>
                <div className={`${styles.developerImage} ${developersReveal.isVisible ? styles.visible : ''}`}>
                    <Image
                        src="/event-concert.png"
                        alt="Desarrolladores API"
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}

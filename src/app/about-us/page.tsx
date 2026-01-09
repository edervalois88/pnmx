'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Linkedin, ArrowRight, Globe, Users, Target, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

const tabs = [
    {
        id: 'mission',
        label: 'Misión',
        icon: Target,
        content: 'Empoderar el panorama de la hospitalidad con experiencia en plataforma integral de gestión de invitados y sistema de ventas sin efectivo.',
    },
    {
        id: 'vision',
        label: 'Visión',
        icon: Globe,
        content: 'Ser pioneros en la transformación global de la gestión de venues y eventos, entregando soluciones más inteligentes y sostenibles que empoderen a las empresas a prosperar a través de innovación digital fluida y experiencias excepcionales para invitados.',
    },
    {
        id: 'values',
        label: 'Valores',
        icon: Heart,
        content: 'Nuestro objetivo es ayudar a las empresas a tener éxito y hacer sonreír a los invitados. Lo hacemos trabajando duro, siendo honestos y desarrollando soluciones inteligentes.',
    },
];

const team = [
    {
        name: 'Koen van Geene',
        role: 'CEO',
        image: '/team-ceo.png',
        linkedin: '#',
    },
    {
        name: 'Randeep Chaudhary',
        role: 'CTO',
        image: '/team-cto.png',
        linkedin: '#',
    },
    {
        name: 'Viviana González',
        role: 'GM México',
        image: '/team-gm.png',
        linkedin: '#',
    },
];

const stats = [
    { number: '500+', label: 'Venues Activos' },
    { number: '50+', label: 'Países' },
    { number: '10M+', label: 'Transacciones/Año' },
    { number: '99.9%', label: 'Uptime' },
];

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState('mission');
    const heroReveal = useScrollReveal({ threshold: 0.2 });
    const tabsReveal = useScrollReveal({ threshold: 0.2 });
    const statsReveal = useScrollReveal({ threshold: 0.2 });
    const teamReveal = useScrollReveal({ threshold: 0.2 });

    return (
        <div className={styles.page}>
            <Header />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>El Viaje de PouchNATION</h1>
                        <p className={styles.heroSubtitle}>
                            Descubre nuestra misión, visión, valores, lo que hacemos y las personas detrás de todo.
                        </p>
                    </div>
                </section>

                {/* Mission/Vision/Values Tabs */}
                <section className={styles.tabsSection} ref={tabsReveal.ref}>
                    <div className={`${styles.tabsContainer} ${tabsReveal.isVisible ? styles.visible : ''}`}>
                        <div className={styles.tabsHeader}>
                            <div className={styles.badge}>Quiénes Somos</div>
                            <h2 className={styles.sectionTitle}>Nuestra Esencia</h2>
                        </div>

                        <div className={styles.tabs}>
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <Icon size={20} />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className={styles.tabContent}>
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`${styles.tabPane} ${activeTab === tab.id ? styles.active : ''}`}
                                >
                                    <p>{tab.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className={styles.statsSection} ref={statsReveal.ref}>
                    <div className={`${styles.statsContainer} ${statsReveal.isVisible ? styles.visible : ''}`}>
                        <div className={styles.statsHeader}>
                            <div className={styles.badge}>Alcance Global, Impacto Local</div>
                            <h2 className={styles.sectionTitle}>Confiados en Todo el Mundo</h2>
                            <p className={styles.sectionDescription}>
                                En todo tipo de negocios de hospitalidad. Deja que las tecnologías de PouchNATION
                                optimicen los viajes de tus invitados.
                            </p>
                        </div>

                        <div className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <div className={styles.statNumber}>{stat.number}</div>
                                    <div className={styles.statLabel}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className={styles.teamSection} ref={teamReveal.ref}>
                    <div className={`${styles.teamContainer} ${teamReveal.isVisible ? styles.visible : ''}`}>
                        <div className={styles.teamHeader}>
                            <div className={styles.badge}>Equipo de Liderazgo</div>
                            <h2 className={styles.sectionTitle}>
                                Los Visionarios que Lideran PouchNATION
                            </h2>
                            <p className={styles.sectionDescription}>
                                PouchNATION está liderado por un equipo de profesionales experimentados en hospitalidad
                                y tecnología, comprometidos con transformar la industria.
                            </p>
                        </div>

                        <div className={styles.teamGrid}>
                            {team.map((member, index) => (
                                <div key={index} className={styles.teamCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <div className={styles.teamImageWrapper}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className={styles.teamImage}
                                        />
                                    </div>
                                    <div className={styles.teamInfo}>
                                        <h3 className={styles.teamName}>{member.name}</h3>
                                        <p className={styles.teamRole}>{member.role}</p>
                                        <Link href={member.linkedin} className={styles.linkedinLink}>
                                            <Linkedin size={20} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Potencia Tu Evento con Tecnología Inteligente
                        </h2>
                        <p className={styles.ctaDescription}>
                            Únete a cientos de venues y eventos que ya confían en PouchNATION para
                            optimizar operaciones y crear experiencias inolvidables.
                        </p>
                        <Link href="#contact" className={styles.ctaButton}>
                            Agenda una Demo
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

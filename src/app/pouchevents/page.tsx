'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Ticket, DollarSign, Shield, Smartphone, Tag, UserCheck, Calendar, TrendingUp, Users, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

const eventTypes = [
    { id: 1, name: 'Festivales Musicales', image: '/event-festival.png' },
    { id: 2, name: 'Conciertos', image: '/event-concert.png' },
    { id: 3, name: 'Conferencias', image: '/event-conference.png' },
    { id: 4, name: 'Festivales Gastronómicos', image: '/event-food-festival.png' },
    { id: 5, name: 'Exposiciones', image: '/event-conference.png' },
    { id: 6, name: 'Eventos Deportivos', image: '/event-festival.png' },
];

const benefits = [
    {
        icon: TrendingUp,
        title: 'Vende Más, Más Rápido',
        description: 'Pagos sin efectivo y créditos precargados eliminan fricción, incentivando a los asistentes a comprar más y gastar más rápido.',
        color: '#10B981',
    },
    {
        icon: Zap,
        title: 'Pagos Sin Fricción',
        description: 'Habilita transacciones rápidas y seguras vía pulseras NFC o dispositivos móviles, eliminando manejo de efectivo y largas filas.',
        color: '#F59E0B',
    },
    {
        icon: Calendar,
        title: 'Gestión Inteligente de Entradas',
        description: 'Reduce cuellos de botella con check-ins automatizados, entrada rápida y autenticación basada en RFID/NFC.',
        color: '#8B5CF6',
    },
];

const operations = [
    {
        icon: Users,
        title: 'Operaciones Simplificadas',
        description: 'Rastrea cada transacción, elimina errores humanos y reduce costos de personal con sistemas automatizados.',
        color: '#04AEF0',
    },
    {
        icon: BarChart3,
        title: 'Engagement Basado en Datos',
        description: 'Captura comportamiento de asistentes en tiempo real, tendencias de gasto y rendimiento del evento para optimizar experiencias futuras.',
        color: '#EC4899',
    },
    {
        icon: Smartphone,
        title: 'Pedidos y Upselling Sin Esfuerzo',
        description: 'Permite a los asistentes pre-ordenar comida, bebidas y mercancía, asegurando conveniencia y maximizando ventas on-site.',
        color: '#10B981',
    },
];

const features = [
    { icon: Ticket, title: 'Ticketing Online', description: 'Ofrece una forma rápida y conveniente de comprar boletos en cualquier momento y lugar.', color: '#04AEF0' },
    { icon: DollarSign, title: 'Pagos Sin Efectivo', description: 'Elimina manejo de efectivo, acelera transacciones e incrementa el gasto.', color: '#10B981' },
    { icon: Shield, title: 'Control de Acceso', description: 'Reduce fraude y mejora seguridad con verificación automatizada de asistentes.', color: '#8B5CF6' },
    { icon: Smartphone, title: 'Pedidos Móviles', description: 'Permite a los asistentes ordenar comida, bebidas y mercancía desde sus smartphones.', color: '#F59E0B' },
    { icon: Tag, title: 'Tags NFC Personalizados', description: 'Mejora el engagement y optimiza operaciones con pulseras RFID/NFC.', color: '#EC4899' },
    { icon: UserCheck, title: 'Escaneo de Tickets & Registro', description: 'Agiliza la entrada y reduce tiempos de espera con fast-track entry.', color: '#06B6D4' },
];

export default function PouchEvents() {
    const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
    const heroReveal = useScrollReveal({ threshold: 0.2 });
    const carouselReveal = useScrollReveal({ threshold: 0.2 });
    const benefitsReveal = useScrollReveal({ threshold: 0.2 });
    const operationsReveal = useScrollReveal({ threshold: 0.2 });
    const featuresReveal = useScrollReveal({ threshold: 0.2 });

    return (
        <div className={styles.page}>
            <Header />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Soluciones</div>
                        <h1 className={styles.heroTitle}>Para Eventos</h1>
                        <p className={styles.heroSubtitle}>
                            Check-ins sin esfuerzo y pagos sin efectivo—configuración fácil,
                            eventos más fluidos, mayores ganancias!
                        </p>
                    </div>
                </section>

                {/* Event Types Carousel */}
                <section className={styles.carouselSection} ref={carouselReveal.ref}>
                    <div className={`${styles.carouselHeader} ${carouselReveal.isVisible ? styles.visible : ''}`}>
                        <div className={styles.badge}>Soluciones para Cada Tipo de Evento</div>
                        <h2 className={styles.sectionTitle}>Los Eventos que Elevamos</h2>
                        <p className={styles.sectionDescription}>
                            Ya sea un festival de música, conferencia o exposición, nuestra tecnología
                            optimiza ticketing, pagos y acceso—para que los organizadores puedan enfocarse
                            en crear eventos increíbles.
                        </p>
                    </div>

                    <div className={`${styles.carouselContainer} ${carouselReveal.isVisible ? styles.visible : ''}`}>
                        {eventTypes.map((event) => {
                            const isActive = hoveredEvent === event.id;
                            const isOtherActive = hoveredEvent !== null && hoveredEvent !== event.id;

                            return (
                                <div
                                    key={event.id}
                                    className={`${styles.expandableCard} ${isActive ? styles.active : ''} ${isOtherActive ? styles.collapsed : ''}`}
                                    onMouseEnter={() => setHoveredEvent(event.id)}
                                    onMouseLeave={() => setHoveredEvent(null)}
                                >
                                    <div className={styles.cardBackground}>
                                        <Image
                                            src={event.image}
                                            alt={event.name}
                                            fill
                                            className={styles.backgroundImage}
                                        />
                                        <div className={styles.overlay}></div>
                                    </div>

                                    <div className={styles.cardContent}>
                                        <h3 className={styles.eventName}>{event.name}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Benefits Section - Different Layout */}
                <section className={styles.benefitsSection} ref={benefitsReveal.ref}>
                    <div className={`${styles.benefitsHeader} ${benefitsReveal.isVisible ? styles.visible : ''}`}>
                        <div className={styles.badge}>Nuestro Valor</div>
                        <h2 className={styles.sectionTitle}>
                            Ayudamos a Tu Negocio a Crecer
                        </h2>
                        <p className={styles.sectionDescription}>
                            PouchNATION es el socio tecnológico definitivo para eventos, ayudando a organizadores
                            a maximizar ingresos, optimizar operaciones y crear experiencias inolvidables.
                        </p>
                    </div>

                    <div className={`${styles.benefitsGrid} ${benefitsReveal.isVisible ? styles.visible : ''}`}>
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className={styles.benefitCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <div className={styles.benefitIcon} style={{ backgroundColor: `${benefit.color}15` }}>
                                        <Icon size={32} color={benefit.color} />
                                    </div>
                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                    <p className={styles.benefitDescription}>{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Operations Section - Sticky Scroll */}
                <section className={styles.stickySection} ref={operationsReveal.ref}>
                    <div className={styles.stickyContainer}>
                        <div className={styles.stickyTitle}>
                            <div className={styles.badge}>Soluciones</div>
                            <h2 className={styles.sectionTitle}>
                                Convierte Tu Evento en <br />
                                Una Máquina de Ganancias
                            </h2>
                            <p className={styles.sectionDescription}>
                                Olvida las filas largas, errores de efectivo e ingresos perdidos. Con PouchNATION,
                                los asistentes disfrutan de acceso rápido, transacciones instantáneas y un viaje sin esfuerzo
                                mientras maximizas rentabilidad y engagement.
                            </p>
                        </div>

                        <div className={`${styles.stickyContent} ${operationsReveal.isVisible ? styles.visible : ''}`}>
                            {operations.map((operation, index) => {
                                const Icon = operation.icon;
                                return (
                                    <div key={index} className={styles.operationCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                        <div className={styles.operationIcon} style={{ backgroundColor: `${operation.color}15` }}>
                                            <Icon size={32} color={operation.color} />
                                        </div>
                                        <h3 className={styles.operationTitle}>{operation.title}</h3>
                                        <p className={styles.operationDescription}>{operation.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Features Grid - Different Style */}
                <section className={styles.featuresSection} ref={featuresReveal.ref}>
                    <div className={`${styles.featuresHeader} ${featuresReveal.isVisible ? styles.visible : ''}`}>
                        <h2 className={styles.sectionTitle}>
                            Convierte Tu Evento en una Potencia <br />
                            Generadora de Ganancias y Sin Complicaciones
                        </h2>
                    </div>

                    <div className={`${styles.featuresGrid} ${featuresReveal.isVisible ? styles.visible : ''}`}>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className={styles.featureCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <div className={styles.featureIconWrapper} style={{ backgroundColor: `${feature.color}15` }}>
                                        <Icon size={28} color={feature.color} />
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA Section - Different Color */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>¿Listo para Llevar Tu Evento al Siguiente Nivel?</h2>
                        <p className={styles.ctaDescription}>
                            Únete a cientos de organizadores de eventos en México y LATAM que confían en PouchNATION
                            para crear experiencias inolvidables y maximizar ganancias.
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

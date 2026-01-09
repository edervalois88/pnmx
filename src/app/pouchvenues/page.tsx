'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { DollarSign, Package, CheckCircle, Smartphone, Wifi, FileText, ArrowRight, Zap, TrendingUp, BarChart3, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

const venueTypes = [
    { id: 1, name: 'Hoteles & Resorts', image: '/venue-beach-club.png' },
    { id: 2, name: 'Beach Clubs', image: '/venue-beach-club.png' },
    { id: 3, name: 'Nightclubs', image: '/venue-nightclub.png' },
    { id: 4, name: 'Restaurantes', image: '/venue-restaurant.png' },
    { id: 5, name: 'Parques Acuáticos', image: '/venue-waterpark.png' },
    { id: 6, name: 'Centros de Convenciones', image: '/event-concert.png' },
];

const benefits = [
    {
        icon: TrendingUp,
        title: 'Maximiza Ingresos',
        description: 'Transacciones sin efectivo y créditos precargados fomentan mayor gasto y eliminan fugas de efectivo a través de un ecosistema de pago seguro.',
    },
    {
        icon: Zap,
        title: 'Pagos Sin Fricción',
        description: 'Habilita compras instantáneas y sin complicaciones vía pulseras NFC o dispositivos móviles—sin esperas, sin retrasos, experiencia más fluida para invitados y servicio más rápido para el staff.',
    },
    {
        icon: Users,
        title: 'Experiencia Fluida',
        description: 'Reduce filas, acelera transacciones y crea un viaje más agradable y sin complicaciones para tus invitados.',
    },
];

const operations = [
    {
        icon: BarChart3,
        title: 'Simplifica Operaciones',
        description: 'Rastreo en tiempo real y reportes automatizados aseguran transparencia y reducen la carga administrativa.',
    },
    {
        icon: FileText,
        title: 'Decisiones Basadas en Datos',
        description: 'Obtén insights valiosos sobre comportamiento de invitados, patrones de gasto y eficiencia operativa para tomar decisiones de negocio más inteligentes.',
    },
    {
        icon: Wifi,
        title: 'Conectividad Sin Esfuerzo',
        description: 'Sincroniza con PMS existentes y herramientas operativas para optimizar la gestión del venue, asegurando un flujo de datos y operaciones sin interrupciones.',
    },
];

const features = [
    { icon: DollarSign, title: 'Pagos Sin Efectivo', description: 'Transacciones rápidas, seguras y sin complicaciones con tecnología NFC.' },
    { icon: Package, title: 'Gestión de Inventario', description: 'Monitorea y optimiza niveles de stock sin esfuerzo.' },
    { icon: CheckCircle, title: 'Check-In & Check-Out', description: 'Simplifica y acelera procesos de front-desk con manejo automatizado de invitados.' },
    { icon: Smartphone, title: 'Pedidos Móviles', description: 'Permite a los invitados ordenar vía smartphones para mayor conveniencia.' },
    { icon: Wifi, title: 'Funcionalidad Offline', description: 'Opera sin internet, asegurando servicio ininterrumpido.' },
    { icon: FileText, title: 'Reportes en Tiempo Real', description: 'Accede a insights de negocio y analytics en tiempo real para optimizar la toma de decisiones.' },
];

export default function PouchVenues() {
    const [hoveredVenue, setHoveredVenue] = useState<number | null>(null);
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
                        <h1 className={styles.heroTitle}>Para Venues</h1>
                        <p className={styles.heroSubtitle}>
                            Optimiza entrada y pagos con nuestro sistema todo-en-uno—rápido,
                            sin efectivo y sin complicaciones.
                        </p>
                    </div>
                </section>

                {/* Venue Types Carousel */}
                <section className={styles.carouselSection} ref={carouselReveal.ref}>
                    <div className={`${styles.carouselHeader} ${carouselReveal.isVisible ? styles.visible : ''}`}>
                        <div className={styles.badge}>Soluciones Inteligentes para Cada Espacio</div>
                        <h2 className={styles.sectionTitle}>Los Venues que Potenciamos</h2>
                        <p className={styles.sectionDescription}>
                            Desde hostels vibrantes hasta parques temáticos emocionantes, nuestra tecnología
                            ayuda a los venues a operar sin problemas, mejorar experiencias de invitados y simplificar operaciones—todo en un solo sistema.
                        </p>
                    </div>

                    <div className={`${styles.carouselContainer} ${carouselReveal.isVisible ? styles.visible : ''}`}>
                        {venueTypes.map((venue) => {
                            const isActive = hoveredVenue === venue.id;
                            const isOtherActive = hoveredVenue !== null && hoveredVenue !== venue.id;

                            return (
                                <div
                                    key={venue.id}
                                    className={`${styles.expandableCard} ${isActive ? styles.active : ''} ${isOtherActive ? styles.collapsed : ''}`}
                                    onMouseEnter={() => setHoveredVenue(venue.id)}
                                    onMouseLeave={() => setHoveredVenue(null)}
                                >
                                    {/* Background Image */}
                                    <div className={styles.cardBackground}>
                                        <Image
                                            src={venue.image}
                                            alt={venue.name}
                                            fill
                                            className={styles.backgroundImage}
                                        />
                                        <div className={styles.overlay}></div>
                                    </div>

                                    {/* Venue Name */}
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.venueName}>{venue.name}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Benefits Section - Sticky Scroll */}
                <section className={styles.stickySection} ref={benefitsReveal.ref}>
                    <div className={styles.stickyContainer}>
                        <div className={styles.stickyTitle}>
                            <div className={styles.badge}>Nuestro Valor</div>
                            <h2 className={styles.sectionTitle}>
                                Ayudamos a Tu <br />
                                Negocio a Crecer
                            </h2>
                            <p className={styles.sectionDescription}>
                                Incrementa el gasto de invitados hasta un 30% con nuestra tecnología NFC fácil de usar.
                                Sin efectivo, sin complicaciones—solo pagos más rápidos e inteligentes.
                            </p>
                        </div>

                        <div className={`${styles.stickyContent} ${benefitsReveal.isVisible ? styles.visible : ''}`}>
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index} className={styles.benefitCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                        <div className={styles.benefitIcon}>
                                            <Icon size={32} color="#04AEF0" />
                                        </div>
                                        <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                        <p className={styles.benefitDescription}>{benefit.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Operations Section - Sticky Scroll */}
                <section className={styles.stickySection} ref={operationsReveal.ref}>
                    <div className={styles.stickyContainer}>
                        <div className={styles.stickyTitle}>
                            <div className={styles.badge}>Soluciones</div>
                            <h2 className={styles.sectionTitle}>
                                Inteligente, Fluido <br />
                                e Impulsado por Datos
                            </h2>
                            <p className={styles.sectionDescription}>
                                Con PouchNATION, los venues operan de manera más eficiente, generan mayores ingresos
                                y crean experiencias excepcionales para invitados—todo a través de una solución única e inteligente.
                            </p>
                        </div>

                        <div className={`${styles.stickyContent} ${operationsReveal.isVisible ? styles.visible : ''}`}>
                            {operations.map((operation, index) => {
                                const Icon = operation.icon;
                                return (
                                    <div key={index} className={styles.benefitCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                        <div className={styles.benefitIcon}>
                                            <Icon size={32} color="#8B5CF6" />
                                        </div>
                                        <h3 className={styles.benefitTitle}>{operation.title}</h3>
                                        <p className={styles.benefitDescription}>{operation.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className={styles.featuresSection} ref={featuresReveal.ref}>
                    <div className={`${styles.featuresHeader} ${featuresReveal.isVisible ? styles.visible : ''}`}>
                        <h2 className={styles.sectionTitle}>Control Completo del Venue</h2>
                        <p className={styles.sectionDescription}>
                            Desde check-ins hasta gestión de inventario, PouchNATION ofrece las herramientas
                            que necesitas para administrar cada aspecto de tu venue con facilidad.
                        </p>
                    </div>

                    <div className={`${styles.featuresGrid} ${featuresReveal.isVisible ? styles.visible : ''}`}>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className={styles.featureCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <div className={styles.featureIcon}>
                                        <Icon size={28} color="#04AEF0" />
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>¿Listo para Transformar Tu Venue?</h2>
                        <p className={styles.ctaDescription}>
                            Únete a cientos de venues en México y LATAM que ya confían en PouchNATION
                            para optimizar operaciones y maximizar ingresos.
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

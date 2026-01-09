'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Calendar, Calculator, CreditCard, Code, Zap, Shield, ArrowRight, Book, Terminal, Cloud } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

const apis = [
    {
        icon: Calendar,
        title: 'Bookings API',
        description: 'Sincroniza las reservas y bookings de tu sistema con nuestras plataformas PouchEVENTS y PouchVENUES.',
        color: '#04AEF0',
        link: '#bookings',
    },
    {
        icon: Calculator,
        title: 'Accounting API',
        description: 'Sincroniza tu libro contable con nuestras plataformas y otros sistemas como Mews, Cloudbeds y más.',
        color: '#10B981',
        link: '#accounting',
    },
    {
        icon: CreditCard,
        title: 'Payments API',
        description: 'Crea y autoriza tus propios pagos. Ofrecemos una amplia gama de gateways de pago para integración fácil.',
        color: '#8B5CF6',
        link: '#payments',
    },
];

const features = [
    {
        icon: Code,
        title: 'RESTful APIs',
        description: 'APIs modernas y bien documentadas siguiendo los estándares REST.',
    },
    {
        icon: Shield,
        title: 'Seguridad Robusta',
        description: 'Autenticación OAuth 2.0 y encriptación end-to-end.',
    },
    {
        icon: Zap,
        title: 'Alto Rendimiento',
        description: 'Respuestas rápidas con 99.9% de uptime garantizado.',
    },
    {
        icon: Book,
        title: 'Documentación Completa',
        description: 'Guías detalladas, ejemplos de código y referencias de API.',
    },
    {
        icon: Terminal,
        title: 'SDKs Disponibles',
        description: 'Librerías para JavaScript, Python, PHP y más lenguajes.',
    },
    {
        icon: Cloud,
        title: 'Webhooks',
        description: 'Recibe notificaciones en tiempo real de eventos importantes.',
    },
];

const codeExample = `// Ejemplo de integración con Bookings API
const pouchConnect = require('@pouchnation/connect');

const client = new pouchConnect.BookingsAPI({
  apiKey: 'tu_api_key',
  environment: 'production'
});

// Crear una nueva reserva
const booking = await client.bookings.create({
  venueId: 'venue_123',
  guestName: 'Juan Pérez',
  checkIn: '2024-03-15',
  checkOut: '2024-03-17',
  guests: 2
});

console.log('Reserva creada:', booking.id);`;

export default function PouchConnect() {
    const heroReveal = useScrollReveal({ threshold: 0.2 });
    const apisReveal = useScrollReveal({ threshold: 0.2 });
    const codeReveal = useScrollReveal({ threshold: 0.2 });
    const featuresReveal = useScrollReveal({ threshold: 0.2 });

    return (
        <div className={styles.page}>
            <Header />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Soluciones</div>
                        <h1 className={styles.heroTitle}>Para Desarrolladores</h1>
                        <p className={styles.heroSubtitle}>
                            Descubre nuestras APIs y aprende cómo integrar tu sistema con nuestra
                            plataforma de pagos sin efectivo y gestión de invitados.
                        </p>
                        <Link href="#apis" className={styles.ctaButton}>
                            Comenzar
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className={styles.heroGlow}></div>
                </section>

                {/* APIs Section */}
                <section className={styles.apisSection} id="apis" ref={apisReveal.ref}>
                    <div className={`${styles.apisHeader} ${apisReveal.isVisible ? styles.visible : ''}`}>
                        <div className={styles.badge}>Conexión Fácil</div>
                        <h2 className={styles.sectionTitle}>
                            Integra Tu Sistema con Nuestras Potentes APIs
                        </h2>
                        <p className={styles.sectionDescription}>
                            Haz que tu sistema se comunique con el nuestro para mejorar la eficiencia,
                            acelerar procesos y simplificar tareas.
                        </p>
                    </div>

                    <div className={`${styles.apisGrid} ${apisReveal.isVisible ? styles.visible : ''}`}>
                        {apis.map((api, index) => {
                            const Icon = api.icon;
                            return (
                                <div key={index} className={styles.apiCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <div className={styles.apiIcon} style={{ backgroundColor: `${api.color}15`, color: api.color }}>
                                        <Icon size={32} />
                                    </div>
                                    <h3 className={styles.apiTitle}>{api.title}</h3>
                                    <p className={styles.apiDescription}>{api.description}</p>
                                    <Link href={api.link} className={styles.apiLink} style={{ color: api.color }}>
                                        Conoce más
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Code Example Section */}
                <section className={styles.codeSection} ref={codeReveal.ref}>
                    <div className={styles.codeContainer}>
                        <div className={`${styles.codeContent} ${codeReveal.isVisible ? styles.visible : ''}`}>
                            <div className={styles.badge}>Ejemplo de Código</div>
                            <h2 className={styles.sectionTitle}>Integración Simple y Rápida</h2>
                            <p className={styles.sectionDescription}>
                                Comienza a integrar en minutos con nuestras librerías y documentación clara.
                            </p>
                        </div>
                        <div className={`${styles.codeBlock} ${codeReveal.isVisible ? styles.visible : ''}`}>
                            <div className={styles.codeHeader}>
                                <div className={styles.codeDots}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className={styles.codeTitle}>bookings-integration.js</span>
                            </div>
                            <pre className={styles.codeText}>
                                <code>{codeExample}</code>
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className={styles.featuresSection} ref={featuresReveal.ref}>
                    <div className={`${styles.featuresHeader} ${featuresReveal.isVisible ? styles.visible : ''}`}>
                        <h2 className={styles.sectionTitle}>
                            APIs Diseñadas para Desarrolladores
                        </h2>
                        <p className={styles.sectionDescription}>
                            Herramientas modernas, seguras y fáciles de usar para construir integraciones poderosas.
                        </p>
                    </div>

                    <div className={`${styles.featuresGrid} ${featuresReveal.isVisible ? styles.visible : ''}`}>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className={styles.featureCard} style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <div className={styles.featureIcon}>
                                        <Icon size={24} color="#04AEF0" />
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
                        <h2 className={styles.ctaTitle}>Conecta Con Nosotros</h2>
                        <p className={styles.ctaSubtitle}>¡Innovemos Tus Operaciones Hoy!</p>
                        <p className={styles.ctaDescription}>
                            PouchNATION ofrece soluciones de pago inalámbrico, acceso inteligente y datos en tiempo real
                            para transformar la experiencia de tus invitados y optimizar tus operaciones.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="#documentation" className={styles.primaryButton}>
                                Ver Documentación
                                <Book size={20} />
                            </Link>
                            <Link href="#contact" className={styles.secondaryButton}>
                                Contactar Soporte
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

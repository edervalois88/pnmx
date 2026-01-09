'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        type: 'demo' // 'demo' or 'support'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const heroReveal = useScrollReveal({ threshold: 0.1 });
    const contentReveal = useScrollReveal({ threshold: 0.1 });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const offices = [
        {
            city: 'Ciudad de México',
            country: 'México',
            address: 'Av. Paseo de la Reforma 296, Juárez, 06600',
            email: 'mx@pouchnation.com'
        },
        {
            city: 'General',
            country: 'Global',
            address: 'Remote First Company',
            email: 'hello@pouchnation.com'
        }
    ];

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                {/* Hero Background */}
                <div className={styles.heroBackground}>
                    <div className={styles.gradientSphere}></div>
                </div>

                <div className={styles.container}>
                    {/* Header Section */}
                    <div className={styles.header} ref={heroReveal.ref}>
                        <div className={`${styles.headerContent} ${heroReveal.isVisible ? styles.visible : ''}`}>
                            <div className={styles.badge}>Contáctanos</div>
                            <h1 className={styles.title}>Hablemos de tu Próximo Evento</h1>
                            <p className={styles.subtitle}>
                                Estamos aquí para ayudarte a transformar la experiencia de tus invitados.
                                Agenda una demo o contacta con soporte.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.contentGrid} ${contentReveal.isVisible ? styles.visible : ''}`} ref={contentReveal.ref}>
                        {/* Contact Form */}
                        <div className={styles.formCard}>
                            {isSuccess ? (
                                <div className={styles.successMessage}>
                                    <div className={styles.successIcon}>
                                        <Send size={32} />
                                    </div>
                                    <h3>¡Mensaje Enviado!</h3>
                                    <p>Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo muy pronto.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className={styles.resetButton}
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formHeader}>
                                        <h3>Envíanos un mensaje</h3>
                                        <p>Completa el formulario y te responderemos en breve.</p>
                                    </div>

                                    <div className={styles.typeSelector}>
                                        <button
                                            type="button"
                                            className={`${styles.typeButton} ${formState.type === 'demo' ? styles.active : ''}`}
                                            onClick={() => setFormState({ ...formState, type: 'demo' })}
                                        >
                                            <MessageSquare size={18} />
                                            Quiero una Demo
                                        </button>
                                        <button
                                            type="button"
                                            className={`${styles.typeButton} ${formState.type === 'support' ? styles.active : ''}`}
                                            onClick={() => setFormState({ ...formState, type: 'support' })}
                                        >
                                            <Clock size={18} />
                                            Soporte Técnico
                                        </button>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label>Nombre Completo</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Juan Pérez"
                                            value={formState.name}
                                            onChange={e => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.inputGroup}>
                                            <label>Email Corporativo</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="juan@empresa.com"
                                                value={formState.email}
                                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label>Empresa</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Nombre de tu empresa"
                                                value={formState.company}
                                                onChange={e => setFormState({ ...formState, company: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label>Mensaje</label>
                                        <textarea
                                            required
                                            placeholder="Cuéntanos más sobre tu evento o venue..."
                                            rows={4}
                                            value={formState.message}
                                            onChange={e => setFormState({ ...formState, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                        {!isSubmitting && <Send size={18} />}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Info Side */}
                        <div className={styles.infoSide}>
                            {/* Team Image Card */}
                            <div className={styles.imageCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src="/contact-team.png"
                                        alt="PouchNation Support Team"
                                        fill
                                        className={styles.teamImage}
                                    />
                                    <div className={styles.imageOverlay}></div>
                                    <div className={styles.imageContent}>
                                        <span className={styles.imageTag}>Soporte 24/7</span>
                                        <h3>Estamos aquí para ayudarte</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Offices */}
                            <div className={styles.officesContainer}>
                                <h3>Nuestras Oficinas</h3>
                                <div className={styles.officesList}>
                                    {offices.map((office, idx) => (
                                        <div key={idx} className={styles.officeCard}>
                                            <div className={styles.officeIcon}>
                                                <MapPin size={20} />
                                            </div>
                                            <div className={styles.officeInfo}>
                                                <h4>{office.city}, {office.country}</h4>
                                                <p className={styles.address}>{office.address}</p>
                                                <a href={`mailto:${office.email}`} className={styles.emailLink}>
                                                    <Mail size={14} />
                                                    {office.email}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

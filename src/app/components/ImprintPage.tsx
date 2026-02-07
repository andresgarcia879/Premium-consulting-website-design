import { motion } from 'framer-motion';
import { Section } from './Section';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { FileText, MapPin, Mail, MessageCircle, AlertCircle, Copyright, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const silkTransition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] as any };

export function ImprintPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-700 pt-24">
            <header className="py-8 px-6 md:px-12 lg:px-24">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-emerald-dark/60 dark:text-cream/60 hover:text-emerald-dark dark:hover:text-cream transition-colors font-bold group"
                >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    {t.hero.backToHome}
                </Link>
            </header>

            <Section className="pt-8 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={silkTransition}
                    className="max-w-4xl mx-auto space-y-16"
                >
                    <div className="space-y-6 text-center md:text-left">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-dark/5 dark:bg-cream/5 border border-emerald-dark/10 dark:border-cream/10 rounded-full text-xs font-bold tracking-widest text-emerald-dark dark:text-cream uppercase">
                            <FileText className="w-3 h-3" />
                            Legal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-emerald-dark dark:text-cream tracking-tighter">
                            {t.imprint.title}
                        </h1>
                        <p className="text-xl text-emerald-dark/60 dark:text-cream/60 leading-relaxed font-medium">
                            {t.imprint.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-8 bg-emerald-dark/5 dark:bg-cream/5 rounded-sm border border-emerald-dark/10 dark:border-cream/10 space-y-6">
                            <div className="flex items-center gap-3 text-emerald-dark dark:text-emerald-light">
                                <MapPin className="w-5 h-5" />
                                <h2 className="font-bold uppercase tracking-widest text-sm">{t.imprint.representative}</h2>
                            </div>
                            <p className="text-xl font-bold leading-tight">
                                Andres Eduardo Garcia Prieto<br />
                                Zurich, Switzerland
                            </p>
                        </div>

                        <div className="p-8 bg-emerald-dark/5 dark:bg-cream/5 rounded-sm border border-emerald-dark/10 dark:border-cream/10 space-y-6">
                            <div className="flex items-center gap-3 text-emerald-dark dark:text-emerald-light">
                                <Mail className="w-5 h-5" />
                                <h2 className="font-bold uppercase tracking-widest text-sm">{t.imprint.contact}</h2>
                            </div>
                            <div className="space-y-4">
                                <a href={`mailto:${t.footer.email}`} className="flex items-center gap-3 group">
                                    <span className="font-bold group-hover:text-emerald-dark dark:group-hover:text-cream transition-colors">{t.footer.email}</span>
                                </a>
                                <a href={`https://wa.me/${t.footer.whatsapp.replace('+', '')}`} className="flex items-center gap-3 group">
                                    <MessageCircle className="w-4 h-4 text-emerald-dark/40" />
                                    <span className="font-bold group-hover:text-emerald-dark dark:group-hover:text-cream transition-colors">{t.footer.whatsapp}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-12 pt-12 border-t border-emerald-dark/10 dark:border-cream/10 md:grid-cols-2">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-emerald-dark/60 dark:text-cream/60">
                                <AlertCircle className="w-5 h-5" />
                                <h3 className="font-bold uppercase tracking-widest text-xs">{t.imprint.disclaimer}</h3>
                            </div>
                            <p className="text-emerald-dark/70 dark:text-cream/70 leading-relaxed font-medium">
                                {t.imprint.disclaimerText}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-emerald-dark/60 dark:text-cream/60">
                                <Copyright className="w-5 h-5" />
                                <h3 className="font-bold uppercase tracking-widest text-xs">{t.imprint.copyright}</h3>
                            </div>
                            <p className="text-emerald-dark/70 dark:text-cream/70 leading-relaxed font-medium">
                                {t.imprint.copyrightText}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </Section>
            <Footer />
        </div>
    );
}

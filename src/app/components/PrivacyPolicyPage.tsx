import { motion } from 'framer-motion';
import { Section } from './Section';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { Shield, FileText, User, Mail, Database, Lock } from 'lucide-react';

const silkTransition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] as any };

export function PrivacyPolicyPage() {
    const { t } = useLanguage();

    const sections = [
        { Icon: User, title: t.privacy.controller.title, text: t.privacy.controller.text },
        { Icon: Database, title: t.privacy.processing.title, text: t.privacy.processing.text },
        { Icon: Mail, title: t.privacy.contact.title, text: t.privacy.contact.text },
        { Icon: FileText, title: t.privacy.rights.title, text: t.privacy.rights.text },
        { Icon: Lock, title: t.privacy.security.title, text: t.privacy.security.text }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-700 pt-24">

            <Section className="pt-8 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={silkTransition}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <div className="space-y-6 text-center md:text-left">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-dark/5 dark:bg-cream/5 border border-emerald-dark/10 dark:border-cream/10 rounded-full text-xs font-bold tracking-widest text-emerald-dark dark:text-cream uppercase">
                            <Shield className="w-3 h-3" />
                            Legal
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-emerald-dark dark:text-cream tracking-tighter">
                            {t.privacy.title}
                        </h1>
                        <p className="text-xl text-emerald-dark/60 dark:text-cream/60 leading-relaxed font-medium">
                            {t.privacy.introduction}
                        </p>
                    </div>

                    <div className="grid gap-12 pt-12 border-t border-emerald-dark/10 dark:border-cream/10">
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...silkTransition, delay: i * 0.1 }}
                                className="grid md:grid-cols-[100px_1fr] gap-6"
                            >
                                <div className="w-12 h-12 rounded-sm bg-emerald-dark/5 dark:bg-cream/5 flex items-center justify-center text-emerald-dark dark:text-emerald-light">
                                    <section.Icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold tracking-tight text-emerald-dark dark:text-cream">
                                        {section.title}
                                    </h2>
                                    <p className="text-lg text-emerald-dark/70 dark:text-cream/70 leading-relaxed font-medium">
                                        {section.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-12 text-sm text-emerald-dark/40 dark:text-cream/40 font-medium">
                        Last updated: February 2026
                    </div>
                </motion.div>
            </Section>
            <Footer />
        </div>
    );
}

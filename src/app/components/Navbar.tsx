import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { PremiumButton } from './PremiumButton';

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.services, href: '/#services' },
        { name: t.nav.work, href: '/#work' },
        { name: t.nav.process, href: '/#positioning' },
    ];

    const languages: { code: 'en' | 'de' | 'fr'; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'de', label: 'DE' },
        { code: 'fr', label: 'FR' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'py-4 bg-background/80 backdrop-blur-md border-b border-emerald-dark/10'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                <Link
                    to="/"
                    className="text-xl font-bold tracking-tight text-emerald-dark dark:text-cream transition-colors"
                >
                    {t.footer.copyright.split(' ')[0]} <span className="font-light opacity-50">Consultant</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-emerald-dark/60 dark:text-cream/60 hover:text-emerald-dark dark:hover:text-cream transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <PremiumButton
                            to="/consultation"
                            size="sm"
                        >
                            {t.nav.contact}
                        </PremiumButton>
                    </div>

                    <div className="h-6 w-px bg-emerald-dark/10 dark:bg-cream/10" />

                    <div className="flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-emerald-dark/40 dark:text-cream/40" />
                            <div className="flex gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`text-xs font-bold transition-colors ${language === lang.code
                                            ? 'text-emerald-dark dark:text-cream underline underline-offset-4'
                                            : 'text-emerald-dark/40 dark:text-cream/40 hover:text-emerald-dark dark:hover:text-cream'
                                            }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-emerald-dark/5 dark:hover:bg-cream/5 transition-colors text-emerald-dark dark:text-cream"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-emerald-dark dark:text-cream"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-emerald-dark/10 p-6 space-y-6"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-bold text-emerald-dark dark:text-cream"
                            >
                                {link.name}
                            </a>
                        ))}
                        <PremiumButton
                            to="/consultation"
                            size="md"
                            className="w-full justify-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.nav.contact}
                        </PremiumButton>
                    </div>

                    <div className="h-px w-full bg-emerald-dark/10 dark:bg-cream/10" />

                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => { setLanguage(lang.code); setIsMobileMenuOpen(false); }}
                                    className={`text-sm font-bold ${language === lang.code ? 'text-emerald-dark dark:text-cream' : 'text-emerald-dark/40 dark:text-cream/40'
                                        }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                        <button onClick={toggleTheme} className="text-emerald-dark dark:text-cream">
                            {theme === 'light' ? <Moon /> : <Sun />}
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}

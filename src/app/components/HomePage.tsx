import { motion, Variants, AnimatePresence, Transition } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layout,
  Settings,
  Database,
  Zap,
  Users,
  Stethoscope,
  Building2,
  FileText,
  X
} from 'lucide-react';
import { Section } from './Section';
import { Footer } from './Footer';
import { PremiumButton } from './PremiumButton';
import { useLanguage } from '../context/LanguageContext';
import { HealthcareCaseStudies } from './HealthcareCaseStudies';

const silkTransition: Transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
const smoothSpring: Transition = { type: "spring", stiffness: 60, damping: 15, mass: 0.8 }; // More fluid/softer

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: silkTransition,
  },
};

export function HomePage() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    { Icon: Settings, title: t.services.items[0].title, desc: t.services.items[0].desc, longDesc: t.services.items[0].longDesc },
    { Icon: Code2, title: t.services.items[1].title, desc: t.services.items[1].desc, longDesc: t.services.items[1].longDesc },
    { Icon: Zap, title: t.services.items[2].title, desc: t.services.items[2].desc, longDesc: t.services.items[2].longDesc },
    { Icon: Layout, title: t.services.items[3].title, desc: t.services.items[3].desc, longDesc: t.services.items[3].longDesc },
    { Icon: Database, title: t.services.items[4].title, desc: t.services.items[4].desc, longDesc: t.services.items[4].longDesc },
    { Icon: Users, title: t.services.items[5].title, desc: t.services.items[5].desc, longDesc: t.services.items[5].longDesc }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-dark/10 selection:text-emerald-dark transition-colors duration-700">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-40 md:pt-48 md:pb-56">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-dark/10 dark:bg-emerald-dark/20 blur-[120px] rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-emerald-dark/5 dark:bg-emerald-dark/10 blur-[120px] rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="space-y-12 text-center md:text-left">
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-dark/5 dark:bg-cream/5 border border-emerald-dark/10 dark:border-cream/10 rounded-full text-xs font-bold tracking-widest text-emerald-dark dark:text-cream uppercase backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-dark dark:bg-cream opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-dark dark:bg-cream"></span>
                </span>
                {t.hero.tag}
              </span>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-emerald-dark dark:text-cream leading-[0.9] tracking-tighter">
                {t.hero.headline.split(' ').slice(0, 2).join(' ')} <br />
                <span className="italic font-serif font-light text-emerald-deep dark:text-cream/90">{t.hero.headline.split(' ').slice(2).join(' ')}</span> <br />
                <span className="text-4xl md:text-6xl lg:text-7xl opacity-50 block mt-4 font-medium tracking-tight">
                  {t.hero.subheadline}
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-12 md:items-center justify-center md:justify-start">
              <p className="max-w-xl text-xl md:text-2xl text-emerald-dark/60 dark:text-cream/60 leading-relaxed font-medium">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <PremiumButton to="/consultation">
                  {t.cta.button}
                </PremiumButton>
                <PremiumButton
                  to="/#services"
                  primary={false}
                >
                  {t.nav.services}
                </PremiumButton>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-12 border-t border-emerald-dark/10 dark:border-cream/10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {t.hero.highlights.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl font-bold text-emerald-dark dark:text-cream tracking-tighter">0{i + 1}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-dark/40 dark:text-cream/40">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Trust/Positioning Section */}
      <Section id="positioning" className="bg-emerald-dark dark:bg-emerald-deep text-cream py-32 md:py-48 selection:bg-cream/20 selection:text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={silkTransition}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tighter">
                {t.positioning.headline} <br />
                <span className="italic font-serif font-light text-cream/60">{t.positioning.italic}</span>
              </h2>
              <div className="space-y-6 text-xl md:text-2xl text-cream/70 leading-relaxed font-medium">
                <p>{t.positioning.description}</p>
                <p className="text-cream border-l-2 border-cream/30 pl-8 font-serif italic text-3xl">
                  {t.positioning.emphasis}
                </p>
                <p>{t.positioning.result}</p>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {t.positioning.cards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...silkTransition, delay: i * 0.15 }}
                  whileHover={{ x: 20 }}
                  className="p-10 border border-cream/10 bg-cream/5 backdrop-blur-sm rounded-sm space-y-4 group transition-colors hover:border-cream/30"
                >
                  <CheckCircle2 className="w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:text-cream transition-all" />
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-cream/60 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Expertise Section */}
      <Section id="services" className="bg-cream-dark dark:bg-emerald-deep relative overflow-hidden py-32 md:py-48">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={silkTransition}
            className="text-center space-y-4 mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-dark dark:text-cream italic font-serif tracking-tight">{t.services.headline}</h2>
            <p className="text-emerald-dark/60 dark:text-cream/60 text-lg max-w-lg mx-auto leading-relaxed font-medium">
              {t.services.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {services.map((service, i) => {
              const { Icon } = service;
              const isExpanded = expandedIndex === i;

              return (
                <motion.div
                  key={i}
                  layout
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...silkTransition, layout: smoothSpring }}
                  className={`relative p-8 rounded-sm transition-colors duration-500 cursor-pointer overflow-hidden border ${isExpanded
                    ? 'bg-emerald-dark text-cream dark:bg-cream dark:text-emerald-dark border-emerald-dark dark:border-cream shadow-2xl z-20 md:col-span-2 lg:col-span-2'
                    : 'bg-emerald-dark/[0.02] dark:bg-cream/[0.02] backdrop-blur-md border-emerald-dark/10 dark:border-cream/10 hover:border-emerald-dark dark:hover:border-cream'
                    }`}
                >
                  <motion.div layout transition={smoothSpring} className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-sm transition-colors duration-500 ${isExpanded
                      ? 'bg-cream/10 dark:bg-emerald-dark/10 text-cream dark:text-emerald-dark'
                      : 'bg-emerald-dark/5 dark:bg-cream/5 text-emerald-dark dark:text-cream'
                      }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.button
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                          className="p-1 hover:bg-cream/10 dark:hover:bg-emerald-dark/10 rounded-full transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.h3 layout transition={smoothSpring} className={`text-xl font-bold mb-3 tracking-tight transition-colors duration-500 ${isExpanded ? 'text-3xl md:text-5xl lg:text-6xl mb-6' : ''}`}>
                    {service.title}
                  </motion.h3>

                  <motion.p layout transition={smoothSpring} className={`leading-relaxed font-medium transition-colors duration-500 ${isExpanded ? 'text-lg opacity-90 mb-10 max-w-2xl' : 'text-sm opacity-70'}`}>
                    {service.desc}
                  </motion.p>

                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-10"
                      >
                        <div className="space-y-6">
                          <p className="text-xl md:text-2xl opacity-80 leading-relaxed italic border-l-2 border-current pl-8 py-2 font-serif">
                            {service.longDesc}
                          </p>
                        </div>

                        <div className="pt-8 border-t border-current/10">
                          <Link
                            to="/consultation"
                            className={`inline-flex items-center gap-4 py-4 px-8 border-2 font-bold transition-all hover:gap-6 ${isExpanded
                              ? 'border-cream text-cream hover:bg-cream hover:text-emerald-dark dark:border-emerald-dark dark:text-emerald-dark dark:hover:bg-emerald-dark dark:hover:text-cream'
                              : ''
                              }`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {t.services.footerLink} <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...silkTransition, delay: 0.5 }}
            className="mt-24 pt-12 border-t border-emerald-dark/10 dark:border-cream/10 flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <p className="text-sm font-bold text-emerald-dark/40 dark:text-cream/40 uppercase tracking-[0.2em]">
              {t.services.footerTag}
            </p>
            <Link to="/consultation" className="text-emerald-dark dark:text-cream font-bold flex items-center gap-2 group border-b border-emerald-dark/20 dark:border-cream/20 hover:border-emerald-dark dark:hover:border-cream transition-all pb-1">
              {t.services.footerLink} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Featured Healthcare Case Studies - Premium Consultancy Section */}
      <HealthcareCaseStudies />

      {/* Selected Work Section */}
      <Section id="work" className="bg-emerald-deep dark:bg-emerald-dark relative overflow-hidden pt-32 pb-48">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-1/2 h-full bg-emerald-dark/20 dark:bg-cream/5 blur-[150px] -z-10"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={silkTransition}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 text-cream"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t.work.headline}</h2>
              <p className="text-cream/60 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                {t.work.description}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-cream">
            {[Stethoscope, Building2, FileText].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...silkTransition, delay: i * 0.2 }}
                whileHover={{ y: -15 }}
                className="p-10 border border-cream/10 bg-cream/5 backdrop-blur-sm rounded-sm space-y-8 group hover:bg-cream/10 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-cream/10 rounded-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-cream/40">{t.work.items[i].industry}</span>
                    <h3 className="text-3xl font-bold tracking-tight">{t.work.items[i].title}</h3>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-cream/10">
                    <p className="text-sm font-medium"><span className="opacity-40 uppercase tracking-widest mr-2">Challenge:</span> {t.work.items[i].challenge}</p>
                    <p className="text-sm font-medium"><span className="opacity-40 uppercase tracking-widest mr-2">Solution:</span> {t.work.items[i].solution}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream text-emerald-dark text-xs font-bold uppercase tracking-widest rounded-sm">
                      {t.work.items[i].result}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="cta" className="relative py-32 md:py-48 overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={silkTransition}
            className="flex flex-col items-center space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-6xl md:text-8xl font-bold text-emerald-dark dark:text-cream leading-[0.9] tracking-tighter">
                {t.cta.headline.split(' ').slice(0, 2).join(' ')} <br />
                <span className="italic font-serif font-light text-emerald-dark/60 dark:text-cream/60">{t.cta.headline.split(' ').slice(2).join(' ')}</span>
              </h2>
              <p className="text-xl md:text-2xl text-emerald-dark/60 dark:text-cream/60 leading-relaxed font-medium max-w-2xl mx-auto">
                {t.cta.description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12">
              {t.cta.items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-dark dark:bg-cream flex items-center justify-center text-cream dark:text-emerald-dark font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-lg font-bold text-emerald-dark dark:text-cream tracking-tight group-hover:translate-x-1 transition-transform whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <PremiumButton to="/consultation" className="mx-auto">
              {t.cta.button}
            </PremiumButton>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

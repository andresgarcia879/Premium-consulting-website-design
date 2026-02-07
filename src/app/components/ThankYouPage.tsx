import { motion, Transition } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Section } from './Section';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { PremiumButton } from './PremiumButton';

const silkTransition: Transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };
const springTransition: Transition = { type: "spring", stiffness: 200, damping: 15 };

export function ThankYouPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-700 pt-24">

      <main className="flex-grow flex items-center">
        <Section className="w-full">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={springTransition}
              className="w-24 h-24 bg-emerald-dark dark:bg-cream text-cream dark:text-emerald-dark rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl transition-colors"
            >
              <CheckCircle2 className="w-12 h-12" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...silkTransition, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-emerald-dark dark:text-cream tracking-tight uppercase">
                {t.thankyou.headline}
              </h1>
              <p className="text-xl md:text-2xl text-emerald-dark/60 dark:text-cream/60 leading-relaxed max-w-lg mx-auto font-medium">
                {t.thankyou.subheadline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...silkTransition, delay: 0.6 }}
              className="pt-12"
            >
              <PremiumButton
                to="/"
                className="mx-auto"
              >
                {t.thankyou.button}
              </PremiumButton>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, Variants, AnimatePresence, Transition } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Section } from './Section';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { PremiumButton } from './PremiumButton';

const silkTransition: Transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: silkTransition,
  },
};

export function ConsultationPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    website: '',
    budgetRange: '',
    projectDescription: '',
    gdprConsent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      alert(t.consultation.form.consent);
      return;
    }

    setIsSubmitting(true);

    try {
      // Use Formspree - very easy to set up, no keys required initially
      // You just need to confirm the first email you receive
      const response = await fetch("https://formspree.io/f/andresegp879@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          subject: `New Consultation Request from ${formData.fullName}`,
          ...formData
        })
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending request. Please try again or contact me directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <header className="py-8 px-6 md:px-12 lg:px-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-dark/60 dark:text-cream/60 hover:text-emerald-dark dark:hover:text-cream transition-colors font-bold group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          {t.thankyou.button}
        </Link>
      </header>

      <Section className="pt-8 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-emerald-dark dark:text-cream tracking-tight">
              {t.consultation.headline.split(' ').slice(0, 2).join(' ')} <br />
              {t.consultation.headline.split(' ').slice(2).join(' ')}
            </h1>
            <div className="space-y-4 text-emerald-dark/80 dark:text-cream/80 text-lg leading-relaxed">
              <p>{t.consultation.subheadline}</p>
              <p className="font-medium text-emerald-dark dark:text-cream italic">
                {t.positioning.emphasis}
              </p>
            </div>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-10 bg-cream-dark/30 dark:bg-emerald-dark/10 p-8 md:p-12 border border-emerald-dark/5 dark:border-cream/5 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-bold uppercase tracking-widest text-emerald-dark/60 dark:text-cream/40">{t.consultation.form.name}</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-emerald-dark/10 dark:border-cream/10 py-3 focus:border-emerald-dark dark:focus:border-cream focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-bold uppercase tracking-widest text-emerald-dark/60 dark:text-cream/40">{t.consultation.form.company}</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-emerald-dark/10 dark:border-cream/10 py-3 focus:border-emerald-dark dark:focus:border-cream focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="businessEmail" className="text-sm font-bold uppercase tracking-widest text-emerald-dark/60 dark:text-cream/40">{t.consultation.form.email}</label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  required
                  value={formData.businessEmail}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-emerald-dark/10 dark:border-cream/10 py-3 focus:border-emerald-dark dark:focus:border-cream focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-bold uppercase tracking-widest text-emerald-dark/60 dark:text-cream/40">Website (optional)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-emerald-dark/10 dark:border-cream/10 py-3 focus:border-emerald-dark dark:focus:border-cream focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-dark/60 dark:text-cream/40 block">{t.consultation.form.budget}</span>
              <div className="grid sm:grid-cols-3 gap-4">
                {t.consultation.budgets.map((budget, i) => (
                  <label
                    key={i}
                    className={`
                      cursor-pointer border-2 p-4 text-center transition-all font-bold text-sm
                      ${formData.budgetRange === budget
                        ? 'border-emerald-dark bg-emerald-dark text-cream dark:border-cream dark:bg-cream dark:text-emerald-dark'
                        : 'border-emerald-dark/10 dark:border-cream/10 hover:border-emerald-dark/30 dark:hover:border-cream/30 text-emerald-dark/60 dark:text-cream/60'}
                    `}
                  >
                    <input
                      type="radio"
                      name="budgetRange"
                      value={budget}
                      required
                      checked={formData.budgetRange === budget}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {budget}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="projectDescription" className="text-sm font-bold uppercase tracking-widest text-emerald-dark/60 dark:text-cream/40">{t.consultation.form.project}</label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                required
                rows={4}
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-emerald-dark/10 dark:border-cream/10 py-3 focus:border-emerald-dark dark:focus:border-cream focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-6 border-t border-emerald-dark/10 dark:border-cream/10">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="pt-1">
                  <input
                    type="checkbox"
                    name="gdprConsent"
                    required
                    checked={formData.gdprConsent}
                    onChange={handleChange}
                    className="w-5 h-5 accent-emerald-dark cursor-pointer shadow-inner"
                  />
                </div>
                <span className="text-sm text-emerald-dark/60 dark:text-cream/60 leading-relaxed group-hover:text-emerald-dark dark:group-hover:text-cream transition-colors">
                  {t.consultation.form.consent}
                </span>
              </label>
            </div>

            <PremiumButton
              type="submit"
              size="lg"
              className="w-full md:w-auto"
            >
              {isSubmitting ? t.consultation.form.sending : t.consultation.form.submit}
            </PremiumButton>
          </motion.form>
        </motion.div>
      </Section>
      <Footer />
    </div>
  );
}
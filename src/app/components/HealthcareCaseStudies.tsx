
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { Section } from './Section';
import { useLanguage } from '../context/LanguageContext';

const items = [1, 2, 3]; // Placeholder for key capabilities

const VideoCard = ({ src, number }: { src: string, number: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    // Set playback speed on mount
    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.5;
        }
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent bubbling issues
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className="relative group">
            {/* Decorative Overlay - Simplified to avoid z-index fighting */}
            <div className="absolute inset-0 bg-black/10 rounded-3xl z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-dark/10 dark:shadow-black/20 relative">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover bg-emerald-900/10 dark:bg-cream/5 will-change-transform"
                >
                    <source src={src} type="video/mp4" />
                </video>

                {/* Custom Controls - Removed backdrop-blur for performance */}
                <button
                    onClick={togglePlay}
                    className="absolute bottom-6 right-6 w-14 h-14 bg-cream dark:bg-emerald-dark flex items-center justify-center text-emerald-dark dark:text-cream shadow-lg z-30 hover:scale-105 transition-transform duration-200 cursor-pointer rounded-full border border-emerald-dark/10"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                    ) : (
                        <Play className="w-6 h-6 fill-current ml-1" />
                    )}
                </button>
            </div>
            <div className="absolute -bottom-6 -right-6 text-[120px] font-bold text-emerald-dark/5 dark:text-cream/5 font-serif select-none z-0">
                {number}
            </div>
        </div>
    );
};

export function HealthcareCaseStudies() {
    const { t } = useLanguage();

    return (
        <Section id="healthcare-cases" className="py-28 bg-cream dark:bg-emerald-deep text-emerald-dark dark:text-cream relative overflow-hidden transition-colors duration-700">

            {/* Background Accents - Subtle & Elegant */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-dark/5 dark:bg-cream/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-dark/5 dark:bg-cream/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Section Intro (Authority Builder) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24 space-y-8"
                >
                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-dark/60 dark:text-cream/60 pl-1">
                            European Digital Healthcare Consultancy
                        </span>
                        <div className="w-12 h-[1px] bg-emerald-dark/20 dark:bg-cream/20" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl">
                        Strategic Digital Architecture <br />
                        <span className="font-serif italic font-light text-emerald-dark/80 dark:text-cream/80">for Private Clinics</span>
                    </h2>

                    <p className="text-lg md:text-xl text-emerald-dark/70 dark:text-cream/70 max-w-2xl leading-relaxed font-medium">
                        These selected works represent structured digital systems built to elevate private European clinics in competitive markets, focusing on precision, SEO architecture, and conversion.
                    </p>
                </motion.div>

                {/* Case Study 01 - Switzerland */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="grid lg:grid-cols-2 gap-16 items-center mb-32"
                >
                    {/* Video Left */}
                    <VideoCard src="/videos/swiss-dental.mp4" number="01" />

                    {/* Content Right */}
                    <div className="space-y-10 lg:pl-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-dark/5 dark:bg-cream/10 rounded-full border border-emerald-dark/10 dark:border-cream/10 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-dark dark:bg-cream animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-dark dark:text-cream">Private Dental Clinic • Switzerland</span>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Elite Swiss Dental Platform</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-3">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-dark/50 dark:text-cream/50">Problem</h4>
                                <p className="text-lg leading-relaxed font-medium">Swiss private dental market requires authority, precision, and international patient positioning.</p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-dark/50 dark:text-cream/50">Strategy</h4>
                                <p className="text-lg leading-relaxed font-medium opacity-80">Structured multilingual SEO architecture, premium UI hierarchy, conversion-driven layout, and trust-building design system.</p>
                            </div>

                            <div className="space-y-3 border-l-2 border-emerald-dark/20 dark:border-cream/20 pl-6 py-2">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-dark/50 dark:text-cream/50">Execution</h4>
                                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium opacity-70">
                                    <li>• Modular React system</li>
                                    <li>• Framer Motion interactions</li>
                                    <li>• TailwindCSS premium styling</li>
                                    <li>• Structured SEO content layers</li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-emerald-dark/10 dark:border-cream/10">
                                <p className="text-sm font-medium italic opacity-60 mb-6">"Elevated brand positioning aligned with Swiss precision standards."</p>

                                <a
                                    href="https://elite-swiss-dental.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-dark dark:bg-cream text-cream dark:text-emerald-dark rounded-sm font-bold transition-all hover:bg-emerald-deep dark:hover:bg-gray-200"
                                >
                                    View Live Platform
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Case Study 02 - Germany */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Content Left (Desktop) */}
                    <div className="space-y-10 lg:pr-8 relative z-10 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-dark/5 dark:bg-cream/10 rounded-full border border-emerald-dark/10 dark:border-cream/10 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-dark dark:bg-cream animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-dark dark:text-cream">Aesthetic Medical Clinic • Germany</span>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight">HD Esthetic Germany</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-3">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-dark/50 dark:text-cream/50">Problem</h4>
                                <p className="text-lg leading-relaxed font-medium">Premium aesthetic clinics require high trust, clarity, and refined brand perception to attract high-value patients.</p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-dark/50 dark:text-cream/50">Strategy</h4>
                                <p className="text-lg leading-relaxed font-medium opacity-80">Visual sophistication combined with SEO structure and conversion-oriented content pathways.</p>
                            </div>

                            <div className="space-y-3 border-l-2 border-emerald-dark/20 dark:border-cream/20 pl-6 py-2">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-dark/50 dark:text-cream/50">Execution</h4>
                                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium opacity-70">
                                    <li>• React-based architecture</li>
                                    <li>• TailwindCSS design system</li>
                                    <li>• Responsive editorial layout</li>
                                    <li>• Performance-first deployment</li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-emerald-dark/10 dark:border-cream/10">
                                <p className="text-sm font-medium italic opacity-60 mb-6">"Strengthened digital credibility and premium positioning in the German market."</p>

                                <a
                                    href="https://hd-esthetic-germany.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-dark dark:bg-cream text-cream dark:text-emerald-dark rounded-sm font-bold transition-all hover:bg-emerald-deep dark:hover:bg-gray-200"
                                >
                                    View Live Platform
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Video Right (Desktop) */}
                    <div className="relative group order-1 lg:order-2">
                        <VideoCard src="/videos/hd-esthetic.mp4" number="02" />
                    </div>
                </motion.div>

                {/* Key Capabilities Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="mt-32 pt-12 border-t border-emerald-dark/10 dark:border-cream/10"
                >
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-emerald-dark/50 dark:text-cream/50 text-sm font-bold uppercase tracking-widest">
                        <span>SEO Architecture</span>
                        <span>Premium UI Systems</span>
                        <span>European Market Positioning</span>
                        <span>Conversion Optimization</span>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}

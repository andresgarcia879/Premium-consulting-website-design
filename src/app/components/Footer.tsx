import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-emerald-deep dark:bg-emerald-deep/90 text-cream/80 py-16 px-6 md:px-12 lg:px-24 border-t border-cream/5">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="space-y-4">
                        <p className="text-xl font-bold text-cream">
                            {t.footer.name}
                        </p>
                        <p className="text-sm font-bold tracking-widest opacity-60 uppercase">
                            {t.footer.tag}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <a
                            href={`https://wa.me/${t.footer.whatsapp.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-cream transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center group-hover:bg-cream/10 transition-colors">
                                <MessageCircle className="w-5 h-5 text-emerald-light" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs opacity-50 font-bold uppercase tracking-wider">WhatsApp</p>
                                <p className="text-sm font-bold">{t.footer.whatsapp}</p>
                            </div>
                        </a>

                        <a
                            href={`mailto:${t.footer.email}`}
                            className="flex items-center gap-3 hover:text-cream transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center group-hover:bg-cream/10 transition-colors">
                                <Mail className="w-5 h-5 text-emerald-light" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs opacity-50 font-bold uppercase tracking-wider">Email</p>
                                <p className="text-sm font-bold">{t.footer.email}</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs opacity-40 font-medium">
                        © {new Date().getFullYear()} {t.footer.copyright}
                    </p>

                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-cream transition-colors border-b border-transparent hover:border-cream/20 pb-1">{t.footer.privacy}</Link>
                        <Link to="/imprint" className="hover:text-cream transition-colors border-b border-transparent hover:border-cream/20 pb-1">{t.footer.imprint}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

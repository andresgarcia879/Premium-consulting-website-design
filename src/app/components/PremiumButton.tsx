import { motion, Transition, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const silkTransition: Transition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] };

interface PremiumButtonProps {
    to?: string;
    children: React.ReactNode;
    className?: string;
    primary?: boolean;
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit';
    onClick?: (e: React.MouseEvent) => void;
}

export const PremiumButton = ({
    to,
    children,
    className = "",
    primary = true,
    size = 'lg',
    type = 'button',
    onClick
}: PremiumButtonProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        // Limit magnetic effect
        const deltaX = (e.clientX - centerX) * 0.15;
        const deltaY = (e.clientY - centerY) * 0.15;
        mouseX.set(deltaX);
        mouseY.set(deltaY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const buttonClasses = primary
        ? "bg-emerald-dark dark:bg-cream text-cream dark:text-emerald-dark"
        : "border border-emerald-dark/20 dark:border-cream/20 text-emerald-dark dark:text-cream hover:bg-emerald-dark/5 dark:hover:bg-cream/5";

    const isHashLink = to?.includes('#');

    const content = (
        <div className="relative z-10 flex items-center gap-3">
            {children}
            <motion.div
                variants={{
                    initial: { x: -10, opacity: 0 },
                    hover: { x: 0, opacity: 1 }
                }}
                transition={silkTransition}
                className="hidden group-hover:block"
            >
                <ArrowRight className="w-5 h-5" />
            </motion.div>
            <ArrowRight className="w-5 h-5 group-hover:hidden opacity-50" />
        </div>
    );

    const overlay = (
        <motion.div
            className="absolute inset-0 bg-white/10 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
        />
    );

    const sizeClasses = {
        sm: "px-6 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-5 text-lg"
    }[size];

    const baseClasses = `group relative flex items-center gap-3 font-bold rounded-sm transition-all shadow-xl active:scale-95 overflow-hidden ${buttonClasses} ${sizeClasses} ${className}`;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className="inline-block"
        >
            {to ? (
                isHashLink ? (
                    <a
                        href={to}
                        className={baseClasses}
                        onClick={(e) => {
                            if (onClick) onClick(e);
                            const targetId = to.split('#')[1];
                            const elem = document.getElementById(targetId);
                            if (elem) {
                                e.preventDefault();
                                elem.scrollIntoView({ behavior: 'smooth' });
                            }
                            // If element doesn't exist (i.e. we are on another page), 
                            // allow default behavior (navigation to /#id)
                        }}
                    >
                        {content}
                        {overlay}
                    </a>
                ) : (
                    <Link
                        to={to}
                        className={baseClasses}
                        onClick={onClick}
                    >
                        {content}
                        {overlay}
                    </Link>
                )
            ) : (
                <button
                    type={type}
                    className={baseClasses}
                    onClick={onClick}
                >
                    {content}
                    {overlay}
                </button>
            )}
        </motion.div>
    );
};

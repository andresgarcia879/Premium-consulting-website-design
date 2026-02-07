import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const Bubble = ({ index }: { index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate a subtle offset based on mouse position
            // Each bubble has a different 'reactivity' based on its index
            const factor = (index + 1) * 15;
            const moveX = (e.clientX - window.innerWidth / 2) / factor;
            const moveY = (e.clientY - window.innerHeight / 2) / factor;

            mouseX.set(moveX);
            mouseY.set(moveY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [index, mouseX, mouseY]);

    return (
        <motion.div
            initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
                scale: 0.8
            }}
            animate={{
                y: [null, "-5%", "5%", null],
                opacity: [0, 0.2, 0.2, 0],
                scale: [0.8, 1.1, 1.1, 0.8],
            }}
            style={{ x, y }}
            transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
            }}
            className="absolute w-64 h-64 border border-emerald-dark/[0.08] rounded-full backdrop-blur-[2px]"
        />
    );
};

export const DynamicBackground = () => {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-cream">
            {/* Mesh Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-emerald-dark/[0.04] blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-gold-muted/[0.05] blur-[100px]"
            />

            {/* Interactive Bubbles */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <Bubble key={i} index={i} />
                ))}
            </div>

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

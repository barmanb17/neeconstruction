'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Companies() {
    // Original logos array
    const logos = [
        { src: "/g1.svg", alt: "Company 1" },
        { src: "/g2.svg", alt: "Company 2" },
        { src: "/g3.svg", alt: "Company 3" },
        { src: "/g4.svg", alt: "Company 4" },
        { src: "/g5.svg", alt: "Company 5" },
    ];

    // Create multiple copies of the logos array for seamless scrolling
    const continuousLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden bg-white pt-12 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10">
            <div className="relative">
                {/* First set of logos */}
                <motion.div
                    className="flex gap-8 sm:gap-14 lg:gap-20"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {continuousLogos.map((logo, index) => (
                        <motion.div
                            key={`${logo.src}-${index}`}
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={160}
                                height={60}
                                className="h-14 w-auto sm:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
                                priority={index < 5} // Load first set of logos immediately
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            </div>
        </div>
    );
}
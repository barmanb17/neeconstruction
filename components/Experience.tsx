'use client';

import React, { useEffect, useState, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Outfit } from "next/font/google";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"] });

// Custom hook for smooth counting animation
function useCountAnimation(end: number, duration: number = 1.5) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  });

  // Spring animation for smoother motion
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
    restDelta: 0.001
  });

  // Transform the spring value to the actual count
  const roundedCount = useTransform(spring, (latest) => {
    return Math.round(latest);
  });

  useEffect(() => {
    if (isInView) {
      // Reset spring to 0
      spring.set(0);
      // Animate to end value
      spring.set(end);
    }
  }, [isInView, end, spring]);

  // Update the count state when spring value changes
  useEffect(() => {
    const unsubscribe = roundedCount.onChange((value) => {
      setCount(value);
    });
    return () => unsubscribe();
  }, [roundedCount]);

  return { count, ref };
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom easing for smoother fade
    } 
  }
};

const countUpAnimation = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smoother motion
      staggerChildren: 0.1
    }
  }
};

// Component for animated statistic
function AnimatedStat({ label, value, prefix }: { label: string; value: string; prefix: string }) {
  const numericValue = parseInt(value.replace(/,/g, ''));
  const { count, ref } = useCountAnimation(numericValue);
  
  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4"
      variants={countUpAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p 
        className={`text-xs sm:text-sm md:text-base text-black/60 ${outfit.className}`}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }
        }}
      >
        {label}
      </motion.p>
      <motion.p 
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black ${outfit.className}`}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }
        }}
      >
        {count.toLocaleString()}{prefix}
      </motion.p>
    </motion.div>
  );
}

export function Experience() {
  // Data for statistics to enable mapping
  const statistics = [
    { label: "Projects Completed", value: "200", prefix: "+" },
    { label: "Members", value: "56", prefix: "+" },
    { label: "Awards", value: "20", prefix: "+" },
    { label: "Agents", value: "215", prefix: "+" },
  ];

  return (
    <section className="w-full bg-[#fff8f2] py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <Separator className="w-full bg-black/10" />

          <motion.div 
            className="my-6 sm:my-8 lg:my-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {statistics.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <AnimatedStat {...stat} />

                {index < statistics.length - 1 && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                      }
                    }}
                    className="hidden md:block"
                  >
                    <Separator
                      orientation="vertical"
                      className="h-12 sm:h-16 lg:h-20 mx-0 sm:mx-4 lg:mx-6 bg-black/10"
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          <Separator className="w-full bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}

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
      className="flex flex-col items-center sm:items-start gap-3 sm:gap-4"
      variants={countUpAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p 
        className={`text-sm sm:text-base text-black/60 ${outfit.className}`}
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
        className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-black ${outfit.className}`}
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
    <section className="w-full bg-[#fff8f2] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <Separator className="w-full bg-black/10" />

          <motion.div 
            className="my-8 sm:my-12 lg:my-16 grid grid-cols-2 gap-8 sm:flex sm:justify-center sm:items-center sm:gap-12 lg:gap-16"
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
                  >
                    <Separator
                      orientation="vertical"
                      className="hidden sm:block h-16 lg:h-20 mx-0 sm:mx-6 lg:mx-8 bg-black/10"
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

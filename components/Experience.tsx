'use client';

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"] });

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const countUpAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Experience() {
  // Data for statistics to enable mapping
  const statistics = [
    { label: "Houses for rent", value: "8,021", prefix: "" },
    { label: "States", value: "56", prefix: "+" },
    { label: "Homes to buy", value: "1,025", prefix: "" },
    { label: "Agents", value: "215", prefix: "+" },
  ];

  return (
    <section className="w-full bg-[#fff8f2] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Separator className="w-full bg-black/10" />

          <div className="my-8 sm:my-12 lg:my-16 grid grid-cols-2 gap-8 sm:flex sm:justify-center sm:items-center sm:gap-12 lg:gap-16">
            {statistics.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <motion.div 
                  className="flex flex-col items-center sm:items-start gap-3 sm:gap-4"
                  variants={countUpAnimation}
                >
                  <p className={`text-sm sm:text-base text-black/60 ${outfit.className}`}>
                    {stat.label}
                  </p>
                  <p className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-black ${outfit.className}`}>
                    {stat.value}{stat.prefix}
                  </p>
                </motion.div>

                {index < statistics.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="hidden sm:block h-16 lg:h-20 mx-0 sm:mx-6 lg:mx-8 bg-black/10"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <Separator className="w-full bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}

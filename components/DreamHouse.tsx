'use client';

import { CalendarIcon, ClipboardCheckIcon, FileTextIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Outfit, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Steps data for mapping
const steps = [
  {
    id: 1,
    title: "Step 1 : Define Your Priorities",
    icon: <ClipboardCheckIcon className="relative w-4 h-4" />,
  },
  {
    id: 2,
    title: "Step 2 : Explore Listings",
    icon: <FileTextIcon className="relative w-4 h-4" />,
  },
  {
    id: 3,
    title: "Step 3 : Schedule Viewings",
    icon: <CalendarIcon className="relative w-4 h-4" />,
  },
];

export const DreamHouse = (): JSX.Element => {
  return (
    <section className="w-full min-h-[673px] bg-orage-light-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col w-full lg:w-[498px] items-start gap-10"
        >
          <div className="flex flex-col items-start justify-center gap-4 relative w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] leading-tight">
              <span className={outfit.className}>Your dream </span>
              <span className={`${playfair.className} italic`}>house</span>
            </h1>

            <p className={`text-lg text-black/60 ${outfit.className}`}>
              Discover your dream house, a perfect blend of comfort and
              elegance, where every detail is designed for your vision
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="relative flex w-12 h-12 items-center justify-center">
                  <Image
                    src="/star-2.svg"
                    alt="Star"
                    width={47}
                    height={46}
                    className="absolute"
                  />
                  <div className="relative z-10 text-orange">
                    {step.icon}
                  </div>
                </div>
                <span className={`text-lg text-black ${outfit.className}`}>
                  {step.title}
                </span>
              </motion.div>
            ))}
          </div>

          <Button
            variant="outline"
            className={`h-12 px-8 py-3 rounded-full border-orange text-orange hover:bg-orange/10 ${outfit.className}`}
          >
            Get started
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-[582px] h-[433px]"
        >
          <Card className="w-full h-full overflow-hidden border-none rounded-xl">
            <Image
              src="/picture-6.png"
              alt="Dream House"
              fill
              className="object-cover"
              priority
            />
          </Card>
        </motion.div>
      </div>

      <Image
        src="/vector-787.svg"
        alt="Vector"
        width={34}
        height={44}
        className="absolute top-[267px] left-[-13px]"
      />

      <Image
        src="/vector-792.svg"
        alt="Vector"
        width={41}
        height={30}
        className="absolute top-[594px] right-0"
      />
    </section>
  );
};

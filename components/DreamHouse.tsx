'use client';

import { CalendarIcon, ClipboardCheckIcon, FileTextIcon } from "lucide-react";
import React, { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Outfit, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[673px] bg-orage-light-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col w-full lg:w-[498px] items-start gap-6 sm:gap-8 lg:gap-10"
        >
          <div className="flex flex-col items-start justify-center gap-3 sm:gap-4 relative w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-[60px] leading-tight">
              <span className={outfit.className}>Your dream </span>
              <span className={`${playfair.className} italic`}>house</span>
            </h1>

            <p className={`text-base sm:text-lg text-black/60 ${outfit.className}`}>
              Discover your dream house, a perfect blend of comfort and
              elegance, where every detail is designed for your vision
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="relative flex w-12 h-12 sm:w-14 sm:h-14 items-center justify-center">
                  <Image
                    src="/star-2.svg"
                    alt="Star"
                    width={40}
                    height={40}
                    className="absolute w-[42px] h-[42px] sm:w-[47px] sm:h-[46px]"
                  />
                  <div className="relative z-10 text-orange">
                    {React.cloneElement(step.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
                  </div>
                </div>
                <span className={`text-base sm:text-lg text-black ${outfit.className}`}>
                  {step.title}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/contact">
              <Button
                variant="outline"
                className={`h-11 sm:h-12 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-orange text-orange hover:bg-orange/10 transition-colors duration-300 text-base sm:text-lg font-medium ${outfit.className}`}
              >
                Get started
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-[582px] h-[320px] sm:h-[350px] lg:h-[433px] mt-6 sm:mt-0"
        >
          <Card className="w-full h-full overflow-hidden border-none rounded-xl">
            <Image
              src="/ghor-1.png"
              alt="Dream House"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </Card>
        </motion.div>
      </div>

      <Image
        src="/vector-787.svg"
        alt="Vector"
        width={24}
        height={32}
        className="absolute top-[200px] sm:top-[267px] left-[-10px] sm:left-[-13px] w-[24px] h-[32px] sm:w-[34px] sm:h-[44px]"
      />

      <Image
        src="/vector-792.svg"
        alt="Vector"
        width={30}
        height={22}
        className="absolute top-[400px] sm:top-[594px] right-0 w-[30px] h-[22px] sm:w-[41px] sm:h-[30px]"
      />
    </section>
  );
};

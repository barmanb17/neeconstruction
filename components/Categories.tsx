'use client';

import React from "react";
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
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Categories() {
  const categories = [
    {
      id: 1,
      name: "Interior design",
      icon: "/vuesax-linear-magicpen.svg",
      gridArea: "1 / 1 / 2 / 2"
    },
    {
      id: 2,
      name: "Commercial architect",
      icon: "/vuesax-linear-ruler-pen.svg",
      gridArea: "1 / 2 / 2 / 3"
    },
    {
      id: 3,
      name: "Landscape architect",
      icon: "/vuesax-linear-color-swatch.svg",
      gridArea: "2 / 1 / 3 / 2"
    },
    {
      id: 4,
      name: "Luxury Homes",
      icon: "/smart-home.png",
      gridArea: "3 / 1 / 4 / 2"
    },
    {
      id: 5,
      name: "Civic project",
      icon: "/vuesax-linear-ruler.svg",
      gridArea: "2 / 2 / 3 / 3"
    },
    {
      id: 6,
      name: "Urban Planning",
      icon: "/vuesax-linear-triangle.svg",
      gridArea: "3 / 2 / 4 / 3"
    },
  ];

  return (
    <section className="relative w-full min-h-[546px] bg-black/70 overflow-hidden">
      <Image
        src="/on.png"
        alt="Background"
        fill
        className="object-cover mix-blend-overlay"
        priority
      />
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col gap-6 sm:gap-8 w-full lg:max-w-sm"
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] text-white leading-tight`}>
              <span className={outfit.className}>Project </span>
              <span className={`italic ${playfair.className}`}>Categories</span>
            </h2>

            <p className={`text-base sm:text-lg lg:text-xl text-white/80 ${outfit.className}`}>
              Discover diverse real estate categories, from residential to
              industrial
            </p>

            <Link href="/projects" className="mt-2 sm:mt-4">
              <Button
                variant="outline"
                className={`w-fit rounded-full border-white/40 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-medium text-white hover:bg-white hover:text-black transition-colors ${outfit.className}`}
              >
                Our work
              </Button>
            </Link>
          </motion.div>

          {/* Right Content - Categories Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
            className="w-full lg:w-[579px] mt-8 sm:mt-10 lg:mt-0"
          >
            <Card className="bg-white/10 backdrop-blur-[10px] border-none p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl">
              <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 sm:gap-5"
                    style={{ gridArea: category.gridArea }}
                  >
                    <div className="relative flex w-14 h-14 sm:w-16 sm:h-16 items-center justify-center">
                      <Image
                        src="/star-2.svg"
                        alt="Star background"
                        width={47}
                        height={46}
                        className="absolute w-[42px] h-[42px] sm:w-[47px] sm:h-[46px]"
                      />
                      <Image
                        src={category.icon}
                        alt={`${category.name} icon`}
                        width={20}
                        height={20}
                        className="relative z-10 w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>

                    <span className={`text-base sm:text-lg font-medium text-white ${outfit.className}`}>
                      {category.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

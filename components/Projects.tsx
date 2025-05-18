'use client';

import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Outfit, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Property data for mapping
const properties = [
  {
    id: 1,
    name: "Sunset Ridge Villa - 5 BHK",
    location: "Malibu, California, USA",
    price: "$900K",
    image: "..//picture.png",
  },
  {
    id: 2,
    name: "Willowbrook Home - 3 BHK",
    location: "Portland, Oregon, USA",
    price: "$700K",
    image: "..//picture-1.png",
  },
  {
    id: 3,
    name: "Whispering Pines Retreat - 4 BHK",
    location: "Aspen, Colorado, USA",
    price: "$850K",
    image: "..//picture-2.png",
  },
];

// Category filter options
const categories = [
  { id: 1, name: "Residential", active: true },
  { id: 2, name: "Commercial", active: false },
  { id: 3, name: "Apartments", active: false },
];

export function Projects() {
  return (
    <section className="w-full bg-[#fff4ea] py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* Header section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex items-center px-4 sm:px-0"
          >
            <h2 className="flex items-center gap-4">
              <span className={`text-4xl sm:text-5xl lg:text-[64px] tracking-tight ${outfit.className}`}>
                Latest
              </span>
              <span className={`italic text-4xl sm:text-5xl lg:text-[64px] ${playfair.className}`}>
                Project
              </span>
              <motion.img
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="ml-2 h-[40px] w-[34px] sm:h-[60px] sm:w-[52px]"
                alt="Star"
                src="/star-1.svg"
              />
            </h2>
          </motion.div>
          <motion.p 
            variants={fadeInUp}
            className={`max-w-xl text-base text-black/60 lg:text-lg px-4 sm:px-0 ${outfit.className}`}
          >
            We offer the latest property listings with detailed insights,
            virtual tours, and personalized assistance, ensuring a seamless and
            efficient real estate experience
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12 flex flex-wrap items-center gap-3 px-4 sm:px-0"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={scaleUp}
              custom={index}
            >
              <Button
                variant={category.active ? "default" : "outline"}
                className={`rounded-full px-6 py-3 text-base font-medium transition-colors ${outfit.className} ${
                  category.active
                    ? "bg-[#e3572b] text-white hover:bg-[#d14d24]"
                    : "text-black hover:bg-black/5"
                }`}
              >
                {category.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Property cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 grid grid-cols-1 gap-8 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              variants={scaleUp}
              custom={index}
            >
              <Card className="border-none bg-transparent shadow-none transition-transform hover:-translate-y-1">
                <CardContent className="flex flex-col gap-6 p-0">
                  {/* Property image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-[280px] w-full overflow-hidden rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${property.image})` }}
                  />

                  {/* Property details */}
                  <div className="flex flex-col gap-2">
                    <h3 className={`text-lg font-semibold text-black lg:text-xl ${outfit.className}`}>
                      {property.name}
                    </h3>
                    <p className={`text-base text-black/60 ${outfit.className}`}>
                      {property.location}
                    </p>
                  </div>

                  {/* Price and details link */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-semibold text-[#e3572b] lg:text-2xl ${outfit.className}`}>
                      {property.price}
                    </span>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className={`group flex items-center gap-2 ${outfit.className}`}
                    >
                      <span className="text-base font-medium text-black transition-colors group-hover:text-[#e3572b]">
                        Details
                      </span>
                      <motion.div
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <ArrowUpRightIcon className="h-5 w-5" />
                      </motion.div>
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex justify-center px-4 sm:px-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Button
              variant="outline"
              className={`rounded-full border-[#e3572b] px-8 py-3 text-base font-medium text-[#e3572b] transition-colors hover:bg-[#e3572b] hover:text-white ${outfit.className}`}
            >
              View all projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

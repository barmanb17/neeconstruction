'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";
import { Outfit, Playfair_Display } from "next/font/google";
import Image from "next/image";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with a vision to transform the construction industry"
  },
  {
    year: "2018",
    title: "National Recognition",
    description: "Awarded Best Construction Company of the Year"
  },
  {
    year: "2020",
    title: "International Expansion",
    description: "Opened offices in 3 new countries"
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description: "Launched eco-friendly construction program"
  }
];

const values = [
  {
    title: "Innovation",
    description: "Embracing new technologies and methods",
    icon: "/smart-home.png"
  },
  {
    title: "Quality",
    description: "Delivering excellence in every project",
    icon: "/vuesax-linear-crown.svg"
  },
  {
    title: "Sustainability",
    description: "Building with environmental responsibility",
    icon: "/vuesax-linear-color-swatch.svg"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarDemo />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Badge
              variant="outline"
              className="pl-1.5 pr-[18px] py-2 bg-white rounded-full inline-flex items-center mb-8"
            >
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mr-2">
                <StarIcon className="w-[17px] h-[17px] text-orange-500" />
              </div>
              <span className={`text-gray-900 font-medium ${outfit.className}`}>About Us</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span className={outfit.className}>Building </span>
              <span className={`${playfair.className} italic text-orange-500`}>Excellence</span>
            </h1>

            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${outfit.className}`}>
              We are dedicated to creating exceptional spaces that inspire and endure,
              combining innovative design with masterful execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className={`text-3xl ${outfit.className}`}>Our Mission</h2>
              <p className={`text-gray-600 ${outfit.className}`}>
                To deliver exceptional construction services that exceed expectations,
                transform communities, and set new standards in the industry through
                innovation, quality, and sustainable practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className={`text-3xl ${outfit.className}`}>Our Vision</h2>
              <p className={`text-gray-600 ${outfit.className}`}>
                To be the most trusted and innovative construction company globally,
                known for creating sustainable, beautiful spaces that enhance lives
                and communities for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6">
              <span className={outfit.className}>Our </span>
              <span className={`${playfair.className} italic text-orange-500`}>Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={value.icon}
                        alt={value.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${outfit.className}`}>
                      {value.title}
                    </h3>
                    <p className={`text-gray-600 ${outfit.className}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6">
              <span className={outfit.className}>Our </span>
              <span className={`${playfair.className} italic text-orange-500`}>Journey</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-8"
              >
                <div className={`w-24 text-2xl font-bold text-orange-500 ${outfit.className}`}>
                  {item.year}
                </div>
                <Separator className="flex-1" />
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${outfit.className}`}>
                    {item.title}
                  </h3>
                  <p className={`text-gray-600 ${outfit.className}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
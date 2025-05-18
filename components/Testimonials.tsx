'use client';

import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Samuel Oam",
    position: "CEO, Arbor",
    rating: "5/5",
    image: "/picture-7.png",
    title: "Unmatched Quality",
    text: "From consultation to closing, they provided exceptional service and guidance throughout the entire process. Their attention to detail and professionalism made our dream home a reality.",
    avatar: "/ellipse-109.png",
  },
  {
    id: 2,
    name: "Kristie Jeno",
    position: "CFO, Stratland",
    rating: "5/5",
    image: "/picture-8.png",
    title: "Outstanding Experience",
    text: "The team made the home-buying process seamless and stress-free for us. Their expertise and dedication to customer satisfaction truly sets them apart in the industry.",
    avatar: "/ellipse-109-1.png",
  },
  {
    id: 3,
    name: "Cristian Neol",
    position: "CMO, Airneo",
    rating: "5/5",
    image: "/picture-9.png",
    title: "Exceptional Service",
    text: "Their expertise in real estate helped us find the perfect home with the best quality possible. The entire team was professional, responsive, and a pleasure to work with.",
    avatar: "/ellipse-109-2.png",
  },
];

export const Testimonials = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-[60px]"
        >
          {/* Header Section */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col items-center gap-4 max-w-[760px]"
          >
            <div className="flex items-center gap-6 sm:gap-10 w-full justify-center">
              <img 
                className="w-[40px] sm:w-[52px] h-[46px] sm:h-[60px] opacity-80" 
                alt="Star" 
                src="/star-1.svg" 
              />

              <h2 className="text-center">
                <span className={`text-3xl sm:text-4xl lg:text-[64px] leading-tight font-normal ${outfit.className}`}>
                  Our
                </span>
                <span className={`text-3xl sm:text-4xl lg:text-[64px] leading-tight italic ml-2 ${playfair.className}`}>
                  Testimonials
                </span>
              </h2>

              <img 
                className="w-[40px] sm:w-[52px] h-[46px] sm:h-[60px] opacity-80" 
                alt="Star" 
                src="/star-1.svg" 
              />
            </div>

            <p className={`text-base sm:text-lg text-gray-600 text-center max-w-[515px] ${outfit.className}`}>
              See how we've turned clients' real estate dreams into reality with
              exceptional service
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-shadow duration-300 rounded-xl border border-gray-100">
                  <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
                    {/* User Info */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className={`text-lg font-medium text-gray-900 ${outfit.className}`}>
                            {testimonial.name}
                          </h3>
                          <p className={`text-sm text-gray-500 ${outfit.className}`}>
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <StarIcon className="w-5 h-5 text-orange-500" fill="currentColor" />
                        <span className={`text-sm font-medium text-orange-500 ${outfit.className}`}>
                          {testimonial.rating}
                        </span>
                      </div>
                    </div>

                    {/* Property Image */}
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt="Property"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Review Content */}
                    <div className="flex flex-col gap-2">
                      <h4 className={`text-xl font-medium text-gray-900 ${outfit.className}`}>
                        {testimonial.title}
                      </h4>
                      <p className={`text-base text-gray-600 line-clamp-3 ${outfit.className}`}>
                        {testimonial.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div variants={fadeIn}>
            <Button
              variant="outline"
              className={`
                px-8 py-3 rounded-full border-orange-500 text-orange-500 
                hover:bg-orange-50 hover:text-orange-600 transition-colors
                ${outfit.className}
              `}
            >
              View all testimonials
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

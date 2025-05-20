'use client';

import { MapPinIcon, PhoneIcon, StarIcon } from "lucide-react";
import React, { JSX } from "react";
import { Badge } from "@/components/ui/badge";
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

const locationCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Location data for mapping
const locations = [
  {
    id: 1,
    name: "NEE Office",
    address: "AEC Campus, AEC",
    fullAddress: "Jalukbari, Ghy 781013, USA",
    phone: "+91-8876838584",
    imageUrl: "/image.png",
    position: { top: "10%", left: "10%" }
  },
  {
    id: 2,
    name: "NEE Office 2",
    address: "House no 77 Chokitup",
    fullAddress: "Nagaon, Assam 782003",
    phone: "+91 8876838584",
    imageUrl: "/image-1.png",
    position: { top: "25%", left: "55%" }
  },
];

const contactInfo = [
  {
    id: 1,
    icon: <PhoneIcon className="w-5 h-5" />,
    title: "Phone Number",
    value: "+91 8876838584",
    link: "tel:+15551234567"
  },
  {
    id: 2,
    icon: <MapPinIcon className="w-5 h-5" />,
    title: "Main Office",
    value: "Jalukbari Guwahati IND",
    link: "https://maps.google.com"
  }
];

export const Address = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mt-5 sm:px-8 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col gap-6 items-center mb-20"
        >
          <Badge
            variant="outline"
            className="pl-1.5 pr-[18px] py-2 bg-white rounded-full flex items-center backdrop-blur-[30px] border-orange-200"
          >
            <div className="relative w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mr-2">
              <StarIcon className="w-[17px] h-[17px] text-orange-500" />
            </div>
            <span className={`text-gray-900 font-medium ${outfit.className}`}>
              Our Offices
            </span>
          </Badge>

          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center">
              <span className={`text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-medium ${outfit.className}`}>
                Come and 
              </span>
              <span className={`text-4xl sm:text-5xl lg:text-6xl text-orange-500 italic ml-2 ${playfair.className}`}>
                Visit us!
              </span>
            </h1>
            <p className={`text-base sm:text-lg text-gray-600 text-center max-w-2xl ${outfit.className}`}>
              Reach out anytime! Whether it&apos;s a question, a suggestion, or
              just to say hi, we&apos;re always here to help
            </p>
          </div>

          {/* Contact Info Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mt-8"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white border-orange-100 hover:border-orange-200 transition-colors">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mr-2 text-orange-500 group-hover:bg-orange-100 transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm text-gray-500 ${outfit.className}`}>
                        {info.title}
                      </span>
                      <span className={`text-base font-medium text-gray-900 ${outfit.className}`}>
                        {info.value}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <div className="relative w-full">
          {/* Vector/Map Background */}
          <div className="relative w-full aspect-[16/9] max-h-[581px] mx-auto">
            <Image
              src="/vector-13.svg"
              alt="World Map"
              fill
              className="object-contain"
              priority
            />

            {/* Location Cards - Desktop */}
            <div className="hidden md:block absolute inset-0">
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={locationCardVariants}
                  className="absolute"
                  style={{ 
                    top: location.position.top, 
                    left: location.position.left,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10 
                  }}
                >
                  <Card className="w-[320px] lg:w-[340px] bg-gray-900 rounded-[32px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex gap-4 items-start w-full">
                        <div className="relative w-[80px] h-[80px] lg:w-[102px] lg:h-[102px] rounded-[18px] overflow-hidden flex-shrink-0">
                          <Image
                            src={location.imageUrl}
                            alt={location.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <h2 className={`font-medium text-white text-xl lg:text-2xl ${outfit.className}`}>
                            {location.name}
                          </h2>

                          <div className="space-y-1">
                            <p className={`text-gray-300 text-sm ${outfit.className}`}>
                              {location.address}
                            </p>
                            <p className={`text-gray-400 text-sm ${outfit.className}`}>
                              {location.fullAddress}
                            </p>
                            <p className={`text-orange-400 text-sm ${outfit.className}`}>
                              {location.phone}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-[51px] mx-auto">
                        <div className="absolute w-9 h-9 top-[7px] left-[7px] bg-gray-900 rounded-[10px] rotate-[46.93deg]" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View - Stacked Cards */}
          <div className="md:hidden mt-8 space-y-4">
            {locations.map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="w-full bg-gray-900 rounded-[32px] hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="relative w-[80px] h-[80px] rounded-[18px] overflow-hidden flex-shrink-0">
                        <Image
                          src={location.imageUrl}
                          alt={location.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <h2 className={`font-medium text-white text-xl ${outfit.className}`}>
                          {location.name}
                        </h2>

                        <div className="space-y-1">
                          <p className={`text-gray-300 text-sm ${outfit.className}`}>
                            {location.address}
                          </p>
                          <p className={`text-gray-400 text-sm ${outfit.className}`}>
                            {location.fullAddress}
                          </p>
                          <p className={`text-orange-400 text-sm ${outfit.className}`}>
                            {location.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

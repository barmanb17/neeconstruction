'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const services = [
  {
    title: "Residential Construction",
    description: "Custom homes and renovations tailored to your lifestyle",
    icon: "/smart-home.png",
    image: "/picture.png"
  },
  {
    title: "Commercial Projects",
    description: "Modern office spaces and retail developments",
    icon: "/vuesax-linear-ruler.svg",
    image: "/picture-1.png"
  },
  {
    title: "Interior Design",
    description: "Stunning interiors that reflect your vision",
    icon: "/vuesax-linear-magicpen.svg",
    image: "/picture-2.png"
  },
  {
    title: "Architectural Planning",
    description: "Comprehensive design and planning services",
    icon: "/vuesax-linear-ruler-pen.svg",
    image: "/picture-4.png"
  },
  {
    title: "Sustainable Building",
    description: "Eco-friendly construction solutions",
    icon: "/vuesax-linear-color-swatch.svg",
    image: "/picture-5.png"
  },
  {
    title: "Project Management",
    description: "Expert oversight from concept to completion",
    icon: "/vuesax-linear-clipboard-tick.svg",
    image: "/picture-6.png"
  }
];

export default function Services() {
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
              <span className={`text-gray-900 font-medium ${outfit.className}`}>Our Services</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span className={outfit.className}>What We </span>
              <span className={`${playfair.className} italic text-orange-500`}>Offer</span>
            </h1>

            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${outfit.className}`}>
              Comprehensive construction and design services tailored to your needs,
              delivered with excellence and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative flex w-12 h-12 items-center justify-center">
                          <Image
                            src="/star-2.svg"
                            alt="Star background"
                            width={47}
                            height={46}
                            className="absolute"
                          />
                          <Image
                            src={service.icon}
                            alt={`${service.title} icon`}
                            width={20}
                            height={20}
                            className="relative z-10"
                          />
                        </div>
                        <h3 className={`text-xl font-semibold ${outfit.className}`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className={`text-gray-600 mb-6 ${outfit.className}`}>
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-orange-500 text-orange-500 hover:bg-orange-50"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl mb-6">
              <span className={outfit.className}>Ready to Start Your </span>
              <span className={`${playfair.className} italic text-orange-500`}>Project?</span>
            </h2>
            <p className={`text-gray-600 mb-8 ${outfit.className}`}>
              Contact us today to discuss your construction needs and receive a
              personalized consultation.
            </p>
            <Button
              className="rounded-full bg-orange-500 text-white hover:bg-orange-600 px-8 py-6"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
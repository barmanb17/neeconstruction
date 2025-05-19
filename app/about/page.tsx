'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { StarIcon, ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import { Outfit, Playfair_Display } from "next/font/google";
import Image from "next/image";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { Footer } from "@/components/Footer";
import { useRef, useState } from "react";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
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

// Enhanced data with more visual elements
const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with a vision to transform the construction industry through innovation and excellence",
    icon: "/vuesax-linear-magicpen.svg",
    color: "from-blue-500/10 to-blue-600/10",
    highlight: "Innovation",
    image: "/picture-1.png"
  },
  {
    year: "2018",
    title: "National Recognition",
    description: "Awarded Best Construction Company of the Year for outstanding project delivery and innovation",
    icon: "/vuesax-linear-crown.svg",
    color: "from-orange-500/10 to-orange-600/10",
    highlight: "Excellence",
    image: "/picture-2.png"
  },
  {
    year: "2020",
    title: "International Expansion",
    description: "Successfully established operations in three new countries, bringing our expertise globally",
    icon: "/vuesax-linear-shapes.svg",
    color: "from-green-500/10 to-green-600/10",
    highlight: "Growth",
    image: "/picture-4.png"
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description: "Launched comprehensive eco-friendly construction program, setting new industry standards",
    icon: "/vuesax-linear-color-swatch.svg",
    color: "from-emerald-500/10 to-emerald-600/10",
    highlight: "Sustainability",
    image: "/picture-5.png"
  }
];

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technologies and creative solutions",
    icon: "/vuesax-linear-magicpen.svg",
    color: "from-blue-500/5 to-blue-600/5",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    features: ["Smart Technology", "Modern Methods", "Creative Solutions"],
    image: "/picture-7.png"
  },
  {
    title: "Quality",
    description: "Uncompromising commitment to excellence in every project detail",
    icon: "/vuesax-linear-crown.svg",
    color: "from-orange-500/5 to-orange-600/5",
    gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    features: ["Premium Materials", "Expert Craftsmanship", "Attention to Detail"],
    image: "/picture-8.png"
  },
  {
    title: "Sustainability",
    description: "Building a greener future through responsible construction practices",
    icon: "/vuesax-linear-color-swatch.svg",
    color: "from-green-500/5 to-green-600/5",
    gradient: "bg-gradient-to-br from-green-500 to-green-600",
    features: ["Eco-friendly", "Energy Efficient", "Sustainable Materials"],
    image: "/picture-9.png"
  }
];

const stats = [
  { 
    number: "500+", 
    label: "Projects Completed", 
    icon: "/vuesax-linear-clipboard-tick.svg",
    color: "from-blue-500 to-blue-600"
  },
  { 
    number: "15+", 
    label: "Years Experience", 
    icon: "/vuesax-linear-calendar.svg",
    color: "from-orange-500 to-orange-600"
  },
  { 
    number: "50+", 
    label: "Team Members", 
    icon: "/group-5.svg",
    color: "from-green-500 to-green-600"
  },
  { 
    number: "98%", 
    label: "Client Satisfaction", 
    icon: "/tokodesign-ecommerce-solid-star.svg",
    color: "from-emerald-500 to-emerald-600"
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      <NavbarDemo />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{ opacity, scale }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"
          style={{ opacity }}
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <Badge
                variant="outline"
                className="pl-1.5 pr-[18px] py-2 bg-white/80 backdrop-blur-sm rounded-full inline-flex items-center mb-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-2">
                  <StarIcon className="w-[17px] h-[17px] text-white" />
                </div>
                <span className={`text-gray-900 font-medium ${outfit.className}`}>About Us</span>
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight">
                <span className={`${outfit.className} block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700`}>
                  Building 
                </span>
                <span className={`${playfair.className} italic block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600`}>
                  Excellence
                </span>
              </h1>

              <p className={`text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-12 ${outfit.className} leading-relaxed`}>
                We are dedicated to creating exceptional spaces that inspire and endure,
                combining innovative design with masterful execution.
              </p>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`${outfit.className} text-lg`}>Get in Touch</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <Image
                src="/picture.png"
                alt="Construction Excellence"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent"
          style={{ opacity }}
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Image
                      src={stat.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="opacity-90"
                    />
                  </div>
                </div>
                <div className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-3 ${outfit.className}`}>
                  {stat.number}
                </div>
                <div className={`text-gray-600 text-lg ${outfit.className}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{ opacity }}
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              className="space-y-8"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src="/vuesax-linear-magicpen.svg" alt="" width={32} height={32} className="text-white" />
              </div>
              <h2 className={`text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 ${outfit.className}`}>
                Our Mission
              </h2>
              <p className={`text-xl text-gray-600 leading-relaxed ${outfit.className}`}>
                To deliver exceptional construction services that exceed expectations,
                transform communities, and set new standards in the industry through
                innovation, quality, and sustainable practices.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <h2 className={`text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-6 ${outfit.className}`}>
                  Our Vision
                </h2>
                <p className={`text-xl text-gray-600 leading-relaxed ${outfit.className}`}>
                  To be the most trusted and innovative construction company globally,
                  known for creating sustainable, beautiful spaces that enhance lives
                  and communities for generations to come.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
              <Image
                src="/picture-6.png"
                alt="Our Mission"
                fill
                className="object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-orange-50 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{ opacity }}
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-5xl mb-8">
              <span className={`${outfit.className} bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700`}>
                Our 
              </span>
              <span className={`${playfair.className} italic bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600`}>
                Values
              </span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${outfit.className}`}>
              These core principles guide everything we do, from project planning to execution
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                onHoverStart={() => setActiveValue(index)}
                onHoverEnd={() => setActiveValue(null)}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${value.color} border-0 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden`}>
                  <div className="relative h-56 w-full">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className={`p-4 rounded-2xl ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Image
                          src={value.icon}
                          alt={value.title}
                          width={40}
                          height={40}
                          className="text-white"
                        />
                      </div>
                    </div>
                    <h3 className={`text-2xl font-semibold mb-4 ${outfit.className} bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700`}>
                      {value.title}
                    </h3>
                    <p className={`text-lg text-gray-600 leading-relaxed mb-6 ${outfit.className}`}>
                      {value.description}
                    </p>
                    <AnimatePresence>
                      {activeValue === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3"
                        >
                          {value.features.map((feature, i) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-base text-gray-600"
                            >
                              <ChevronRightIcon className="w-5 h-5 text-orange-500" />
                              {feature}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{ opacity }}
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-5xl mb-8">
              <span className={`${outfit.className} bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700`}>
                Our 
              </span>
              <span className={`${playfair.className} italic bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600`}>
                Journey
              </span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${outfit.className}`}>
              Milestones that mark our path to excellence and innovation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={scaleIn}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group"
              >
                <div className={`order-2 lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Image src={item.icon} alt="" width={28} height={28} className="text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600 ${outfit.className}`}>
                      {item.year}
                    </div>
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-base font-medium mb-4">
                    {item.highlight}
                  </div>
                  <h3 className={`text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 ${outfit.className}`}>
                    {item.title}
                  </h3>
                  <p className={`text-lg text-gray-600 leading-relaxed ${outfit.className}`}>
                    {item.description}
                  </p>
                </div>
                <div className={`relative h-[400px] order-1 lg:order-${index % 2 === 0 ? '2' : '1'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{ opacity }}
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl mb-6">
              <span className={`${outfit.className} bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700`}>
                Ready to Build Your 
              </span>
              <span className={`${playfair.className} italic bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600`}>
                Dream?
              </span>
            </h2>
            <p className={`text-xl text-gray-600 mb-8 ${outfit.className}`}>
              Let's create something extraordinary together. Contact us today to discuss your project.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full hover:shadow-xl transition-all duration-300 group text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={outfit.className}>Get Started</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
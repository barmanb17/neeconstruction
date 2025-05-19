'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, StarIcon, TwitterIcon, MapPin } from "lucide-react";
import { Outfit, Playfair_Display } from "next/font/google";
import Image from "next/image";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

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

const contactInfo = [
  {
    icon: <PhoneIcon className="w-5 h-5" />,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <MailIcon className="w-5 h-5" />,
    title: "Email",
    value: "info@neeconstructionc.com",
    link: "mailto:info@neeconstruction.com"
  },
  {
    icon: <MapPinIcon className="w-5 h-5" />,
    title: "Address",
    value: "123 Business Avenue, Suite 100, New York, NY 10001",
    link: "https://maps.google.com"
  }
];

const socialLinks = [
  { icon: <TwitterIcon className="w-6 h-6" />, href: "#", label: "Twitter" },
  { icon: <FacebookIcon className="w-6 h-6" />, href: "#", label: "Facebook" },
  { icon: <InstagramIcon className="w-6 h-6" />, href: "#", label: "Instagram" },
  { icon: <LinkedinIcon className="w-6 h-6" />, href: "#", label: "LinkedIn" }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarDemo />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Badge
              variant="outline"
              className="pl-1.5 pr-[18px] py-2 bg-white/80 backdrop-blur-sm rounded-full inline-flex items-center mb-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-2">
                <StarIcon className="w-[17px] h-[17px] text-white" />
              </div>
              <span className={`text-gray-900 font-medium ${outfit.className}`}>Contact Us</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              <span className={`${outfit.className} block mb-1 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700`}>
                Get in 
              </span>
              <span className={`${playfair.className} italic block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600`}>
                Touch
              </span>
            </h1>

            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${outfit.className} leading-relaxed`}>
              Have a question or want to discuss your project? We're here to help.
              Reach out to us through any of our contact channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
            >
              <Card className="p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50/50">
                <CardContent className="p-0 space-y-6">
                  <div>
                    <h2 className={`text-2xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 ${outfit.className}`}>
                      Send us a Message
                    </h2>
                    <p className={`text-gray-600 text-sm ${outfit.className}`}>
                      Fill out the form below and we'll get back to you shortly.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`block text-sm font-medium text-gray-700 ${outfit.className}`}>
                          First Name
                        </label>
                        <Input 
                          placeholder="John" 
                          className="h-11 rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className={`block text-sm font-medium text-gray-700 ${outfit.className}`}>
                          Last Name
                        </label>
                        <Input 
                          placeholder="Doe" 
                          className="h-11 rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className={`block text-sm font-medium text-gray-700 ${outfit.className}`}>
                        Email
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="h-11 rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className={`block text-sm font-medium text-gray-700 ${outfit.className}`}>
                        Phone
                      </label>
                      <Input 
                        placeholder="+1 (555) 123-4567" 
                        className="h-11 rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className={`block text-sm font-medium text-gray-700 ${outfit.className}`}>
                        Message
                      </label>
                      <textarea
                        className="w-full min-h-[140px] rounded-xl border border-gray-200 bg-transparent px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-8"
            >
              <motion.div
                variants={staggerContainer}
                className="space-y-4"
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    variants={scaleIn}
                    className="block group"
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-orange-50/50">
                      <CardContent className="flex items-center gap-4 p-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className={`text-sm font-medium text-gray-500 mb-0.5 ${outfit.className}`}>
                            {info.title}
                          </h3>
                          <p className={`text-base font-medium text-gray-900 ${outfit.className}`}>
                            {info.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 ${outfit.className}`}>
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <motion.div
                variants={scaleIn}
                className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="aspect-[16/9] w-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426699!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1683904837423!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                    title="Office Location"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`font-medium text-gray-900 ${outfit.className}`}>
                        Our Office
                      </h4>
                      <p className={`text-sm text-gray-600 ${outfit.className}`}>
                        123 Business Avenue, Suite 100, New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
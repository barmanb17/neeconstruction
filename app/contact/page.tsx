'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, StarIcon, TwitterIcon } from "lucide-react";
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
              <span className={`text-gray-900 font-medium ${outfit.className}`}>Contact Us</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span className={outfit.className}>Get in </span>
              <span className={`${playfair.className} italic text-orange-500`}>Touch</span>
            </h1>

            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${outfit.className}`}>
              Have a question or want to discuss your project? We're here to help.
              Reach out to us through any of our contact channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardContent className="p-0 space-y-6">
                  <h2 className={`text-2xl font-semibold ${outfit.className}`}>
                    Send us a Message
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-1 ${outfit.className}`}>
                          First Name
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-1 ${outfit.className}`}>
                          Last Name
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-1 ${outfit.className}`}>
                        Email
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-1 ${outfit.className}`}>
                        Phone
                      </label>
                      <Input placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-1 ${outfit.className}`}>
                        Message
                      </label>
                      <textarea
                        className="w-full min-h-[150px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button
                      className="w-full rounded-full bg-orange-500 text-white hover:bg-orange-600"
                    >
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="block"
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className={`text-sm font-medium text-gray-500 ${outfit.className}`}>
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
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className={`text-xl font-semibold ${outfit.className}`}>
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={{ y: -5 }}
                      className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/map.jpg"
                  alt="Office Location"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
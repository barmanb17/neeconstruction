'use client';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Define data for footer sections to make the code more maintainable
const companyLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Listing", href: "#" },
  { label: "Agents", href: "#" },
];

const supportLinks = [
  { label: "Contact us", href: "#" },
  { label: "Help", href: "#" },
];

const socialLinks = [
  { icon: <TwitterIcon className="w-6 h-6" />, href: "#", label: "Twitter" },
  { icon: <FacebookIcon className="w-6 h-6" />, href: "#", label: "Facebook" },
  {
    icon: <InstagramIcon className="w-6 h-6" />,
    href: "#",
    label: "Instagram",
  },
  { icon: <LinkedinIcon className="w-6 h-6" />, href: "#", label: "LinkedIn" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#fb923c,transparent)]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and description */}
            <motion.div 
              variants={fadeIn}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/galaxy.svg"
                  alt="Galaxy"
                  width={30}
                  height={30}
                  className="opacity-90"
                />
                <span className={`text-2xl text-white italic ${playfair.className}`}>
                  Skyline
                </span>
              </div>

              <p className={`text-gray-400 ${outfit.className}`}>
                A breathtaking skyline, where towering skyscrapers meet the
                horizon, epitomizes urban grandeur.
              </p>
            </motion.div>

            {/* Company links */}
            <motion.div variants={fadeIn} className="flex flex-col gap-6">
              <h3 className={`text-gray-200 font-semibold tracking-wider ${outfit.className}`}>
                COMPANY
              </h3>

              <nav className="flex flex-col gap-4">
                {companyLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={`text-gray-400 hover:text-orange-400 transition-colors ${outfit.className}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Support links */}
            <motion.div variants={fadeIn} className="flex flex-col gap-6">
              <h3 className={`text-gray-200 font-semibold tracking-wider ${outfit.className}`}>
                SUPPORT
              </h3>

              <nav className="flex flex-col gap-4">
                {supportLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={`text-gray-400 hover:text-orange-400 transition-colors ${outfit.className}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeIn} className="flex flex-col gap-6">
              <h3 className={`text-gray-200 font-semibold tracking-wider ${outfit.className}`}>
                SOCIAL
              </h3>

              <div className="flex gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ y: -5 }}
                    aria-label={link.label}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <Separator className="bg-gray-800" />

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <p className={`text-gray-500 ${outfit.className}`}>
              © Skyline Inc. All Rights Reserved.
            </p>

            <p className={`text-gray-500 ${outfit.className}`}>
              Privacy Policy • Terms and condition
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

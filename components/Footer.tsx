'use client';

import React, { type ReactElement } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Outfit, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

const supportLinks = [
  { label: "Contact us", href: "/contact" },
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

interface FooterProps {
  isLandingPage?: boolean;
}

export const Footer = ({ isLandingPage = false }: FooterProps): ReactElement => {
  return (
    <footer className={cn(
      "relative w-full overflow-hidden",
      isLandingPage ? "pt-[80px] sm:pt-[120px]" : "pt-[60px] sm:pt-[80px]"
    )}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#fb923c,transparent)]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Logo and description */}
            <motion.div 
              variants={fadeIn}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/nee1.png"
                  alt="Galaxy"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] opacity-90"
                />
                <span className={`text-xl sm:text-2xl text-white italic ${playfair.className}`}>
                  Construction
                </span>
              </div>

              <p className={`text-xs sm:text-sm text-gray-400 ${outfit.className}`}>
                Premium construction services for residential, commercial, and industrial projects. Excellence in every detail, from foundation to finish.
              </p>
            </motion.div>

            {/* Company links */}
            <motion.div variants={fadeIn} className="flex flex-col gap-3 sm:gap-4">
              <h3 className={`text-gray-200 font-semibold tracking-wider text-xs sm:text-sm ${outfit.className}`}>
                COMPANY
              </h3>

              <nav className="flex flex-col gap-2 sm:gap-3">
                {companyLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={`text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors ${outfit.className}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Support links */}
            <motion.div variants={fadeIn} className="flex flex-col gap-3 sm:gap-4">
              <h3 className={`text-gray-200 font-semibold tracking-wider text-xs sm:text-sm ${outfit.className}`}>
                SUPPORT
              </h3>

              <nav className="flex flex-col gap-2 sm:gap-3">
                {supportLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={`text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors ${outfit.className}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeIn} className="flex flex-col gap-3 sm:gap-4">
              <h3 className={`text-gray-200 font-semibold tracking-wider text-xs sm:text-sm ${outfit.className}`}>
                SOCIAL
              </h3>

              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ y: -5 }}
                    aria-label={link.label}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {React.cloneElement(link.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <Separator className="bg-gray-800 my-4 sm:my-6" />

          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 text-xs sm:text-sm">
            <p className={`text-gray-500 ${outfit.className}`}>
              © NEE Constructions. All Rights Reserved.
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

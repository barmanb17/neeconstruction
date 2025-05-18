'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const newsletterData = {
  title: "Join our Mailing list",
  subtitle: "Subscribe for the latest real estate news and insights",
  inputPlaceholder: "your.email@example.com",
  buttonText: "Subscribe Now",
};

export const CTA = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-gray-900" />

      {/* Newsletter card */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-[60px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Card className="w-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-[30px] border-none overflow-hidden shadow-xl">
            <CardContent className="flex flex-col items-center gap-10 p-8 sm:p-[60px]">
              {/* Heading section */}
              <div className="flex flex-col items-center gap-4 max-w-[512px]">
                <div className="flex items-center gap-6 sm:gap-10 w-full">
                  <img
                    className="w-[40px] sm:w-[52px] h-[46px] sm:h-[60px] opacity-90"
                    alt="Star"
                    src="/star-1.svg"
                  />
                  <h2 className={`text-2xl sm:text-3xl lg:text-4xl text-white text-center ${outfit.className}`}>
                    {newsletterData.title}
                  </h2>
                  <img
                    className="w-[40px] sm:w-[52px] h-[46px] sm:h-[60px] opacity-90"
                    alt="Star"
                    src="/star-1.svg"
                  />
                </div>
                <p className={`text-base sm:text-lg text-white/80 text-center ${outfit.className}`}>
                  {newsletterData.subtitle}
                </p>
              </div>

              {/* Email input and submit button */}
              <div className="flex flex-col sm:flex-row items-center w-full max-w-[494px] gap-4 sm:gap-0">
                <div className="w-full sm:w-auto flex-1 relative">
                  <div className="relative">
                    <MailIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      className={`
                        w-full h-[68px] border-none shadow-none 
                        pl-14 pr-6 py-7 
                        rounded-full sm:rounded-l-full sm:rounded-r-none 
                        text-gray-900 placeholder:text-gray-400
                        bg-white/95 backdrop-blur-sm 
                        ${outfit.className}
                        focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-orange-500
                        transition-all duration-200
                      `}
                      type="email"
                      placeholder={newsletterData.inputPlaceholder}
                    />
                  </div>
                </div>
                <Button 
                  className={`
                    w-full sm:w-auto h-[68px] 
                    bg-white hover:bg-white/90 
                    rounded-full sm:rounded-l-none sm:rounded-r-full 
                    px-8 text-orange-600 font-medium 
                    ${outfit.className}
                    hover:scale-105 transform transition-transform duration-200
                  `}
                >
                  {newsletterData.buttonText}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

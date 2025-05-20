'use client';

import { LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Outfit, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

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

const teamMembers = [
  {
    name: "Pranjal Kalita",
    role: "Founder",
    image: "/ellipse-109.png",
  },
  {
    name: "Rohan Deka",
    role: "Co-Founder",
    image: "/picture-4.png",
  },
  {
    name: "Shivan Saha",
    role: "CTO",
    image: "/picture-5.png",
  },
];

export const Success = (): React.ReactElement => {
  return (
    <section className="w-full py-20 bg-white-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 flex flex-col items-center gap-[60px]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center gap-[60px] w-full"
        >
          <div className="flex flex-col items-center gap-4 max-w-[760px]">
            <div className="flex items-center gap-10 w-full justify-center">
              <img className="w-[52px] h-[60px]" alt="Star" src="/star-1.svg" />

              <h2 className="text-3xl sm:text-4xl lg:text-[64px] leading-tight text-center">
                <span className={outfit.className}>Behind Our </span>
                <span className={`${playfair.className} italic`}>Success</span>
              </h2>

              <img className="w-[52px] h-[60px]" alt="Star" src="/star-1.svg" />
            </div>

            <p className={`text-base sm:text-lg lg:text-xl text-black/60 text-center max-w-[515px] ${outfit.className}`}>
              Introducing the driving force behind our success – our incredible team members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
                    <div
                      className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full bg-cover bg-center flex-shrink-0"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />

                    <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
                      <h3 className={`text-xl sm:text-2xl font-medium text-orange truncate ${outfit.className}`}>
                        {member.name}
                      </h3>

                      <p className={`text-base sm:text-lg text-gray-600 truncate ${outfit.className}`}>
                        {member.role}
                      </p>

                      <div className="flex gap-3 mt-1 sm:mt-3">
                        <TwitterIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-orange transition-colors cursor-pointer" />
                        <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-orange transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Link href="/about">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="outline"
              className={`border-orange text-orange rounded-full px-8 py-3 hover:bg-orange/10 transition-colors duration-300 text-base sm:text-lg font-medium ${outfit.className}`}
            >
              View all
            </Button>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

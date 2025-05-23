'use client';

import React, { type ReactElement, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import { toast } from "sonner";

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

export const CTA = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-visible -mb-[60px] sm:-mb-[80px] lg:-mb-[100px] z-10">
      {/* Background layers */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Newsletter card */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Card className="w-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-[24px] sm:rounded-[30px] border-none overflow-hidden shadow-xl sm:shadow-2xl">
            <CardContent className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 lg:p-[60px]">
              {/* Heading section */}
              <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-[512px]">
                <div className="flex items-center gap-3 sm:gap-6 lg:gap-10 w-full justify-center">
                  <img
                    className="w-6 h-6 sm:w-[40px] sm:h-[46px] lg:w-[52px] lg:h-[60px] opacity-90"
                    alt="Star"
                    src="/star-1.svg"
                  />
                  <h2 className={`text-xl sm:text-2xl lg:text-4xl text-white text-center ${outfit.className}`}>
                    {newsletterData.title}
                  </h2>
                  <img
                    className="w-6 h-6 sm:w-[40px] sm:h-[46px] lg:w-[52px] lg:h-[60px] opacity-90"
                    alt="Star"
                    src="/star-1.svg"
                  />
                </div>
                <p className={`text-sm sm:text-base lg:text-lg text-white/80 text-center px-4 sm:px-0 ${outfit.className}`}>
                  {newsletterData.subtitle}
                </p>
              </div>

              {/* Email input and submit button */}
              <form 
                onSubmit={handleSubmit}
                className="w-full max-w-[512px] flex flex-col sm:flex-row gap-3 sm:gap-0"
              >
                <div className="w-full sm:w-auto flex-1 relative">
                  <div className="relative">
                    <MailIcon className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <Input
                      className={`
                        w-full h-[52px] sm:h-[68px] border-none shadow-none 
                        pl-10 sm:pl-14 pr-4 sm:pr-6 py-3 sm:py-7 
                        rounded-full sm:rounded-l-full sm:rounded-r-none 
                        text-sm sm:text-base text-gray-900 placeholder:text-gray-400
                        bg-white/95 backdrop-blur-sm 
                        ${outfit.className}
                        focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-orange-500
                        transition-all duration-200
                      `}
                      type="email"
                      placeholder={newsletterData.inputPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full sm:w-auto h-[52px] sm:h-[68px] 
                    bg-white hover:bg-white/90 
                    rounded-full sm:rounded-l-none sm:rounded-r-full 
                    px-6 sm:px-8 text-sm sm:text-base text-orange-600 font-medium 
                    ${outfit.className}
                    hover:scale-105 transform transition-transform duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  {isSubmitting ? "Subscribing..." : newsletterData.buttonText}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

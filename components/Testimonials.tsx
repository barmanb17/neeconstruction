'use client';

import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Outfit, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Krishanu Baruah",
    position: "Client, Nagaon",
    rating: "5/5",
    image: "/picture-7.png",
    title: "Unmatched Quality",
    text: "From consultation to closing, they provided exceptional service and guidance throughout the entire process. Their attention to detail and professionalism made our dream home a reality.",
    avatar: "/ellipse-109.png",
  },
  {
    id: 2,
    name: "Bikash Gupta",
    position: "CFO, Zaatio",
    rating: "5/5",
    image: "/picture-8.png",
    title: "Outstanding Experience",
    text: "The team made the home-buying process seamless and stress-free for us. Their expertise and dedication to customer satisfaction truly sets them apart in the industry.",
    avatar: "/ellipse-109-1.png",
  },
  {
    id: 3,
    name: "Amar Nath",
    position: "Client, Guwahati",
    rating: "5/5",
    image: "/picture-9.png",
    title: "Exceptional Service",
    text: "Their expertise in real estate helped us find the perfect home with the best quality possible. The entire team was professional, responsive, and a pleasure to work with.",
    avatar: "/ellipse-109-2.png",
  },
];

export const Testimonials = (): React.ReactElement => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 sm:gap-[60px]"
        >
          {/* Header Section */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col items-center gap-3 sm:gap-4 max-w-[760px]"
          >
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 w-full justify-center">
              <img 
                className="w-[32px] sm:w-[40px] lg:w-[52px] h-[36px] sm:h-[46px] lg:h-[60px] opacity-80" 
                alt="Star" 
                src="/star-1.svg" 
              />

              <h2 className="text-center">
                <span className={`text-2xl sm:text-3xl lg:text-[64px] leading-tight font-normal ${outfit.className}`}>
                  Our
                </span>
                <span className={`text-2xl sm:text-3xl lg:text-[64px] leading-tight italic ml-1 sm:ml-2 ${playfair.className}`}>
                  Testimonials
                </span>
              </h2>

              <img 
                className="w-[32px] sm:w-[40px] lg:w-[52px] h-[36px] sm:h-[46px] lg:h-[60px] opacity-80" 
                alt="Star" 
                src="/star-1.svg" 
              />
            </div>

            <p className={`text-sm sm:text-base lg:text-lg text-gray-600 text-center max-w-[515px] px-4 sm:px-0 ${outfit.className}`}>
              See how we've turned clients' real estate dreams into reality with
              exceptional service
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-shadow duration-300 rounded-xl border border-gray-100">
                  <CardContent className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                    {/* User Info */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex flex-col">
                          <h3 className={`text-base sm:text-lg font-medium text-gray-900 ${outfit.className}`}>
                            {testimonial.name}
                          </h3>
                          <p className={`text-xs sm:text-sm text-gray-500 ${outfit.className}`}>
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-2">
                        <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="currentColor" />
                        <span className={`text-xs sm:text-sm font-medium text-orange-500 ${outfit.className}`}>
                          {testimonial.rating}
                        </span>
                      </div>
                    </div>

                    {/* Property Image */}
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt="Property"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Review Content */}
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h4 className={`text-lg sm:text-xl font-medium text-gray-900 ${outfit.className}`}>
                        {testimonial.title}
                      </h4>
                      <p className={`text-sm sm:text-base text-gray-600 line-clamp-3 ${outfit.className}`}>
                        {testimonial.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div variants={fadeIn}>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(true)}
              className={`
                px-6 sm:px-8 py-2 sm:py-3 rounded-full border-orange-500 text-orange-500 
                hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm sm:text-base
                ${outfit.className}
              `}
            >
              View all testimonials
            </Button>
          </motion.div>

          {/* Testimonials Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-sm border-none shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] rounded-2xl mx-4 sm:mx-6">
              <DialogHeader className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 py-3 sm:py-4 -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-4 sm:mb-6">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <img 
                      className="w-6 h-6 sm:w-8 sm:h-8 opacity-80" 
                      alt="Star" 
                      src="/star-1.svg" 
                    />
                    <DialogTitle className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${playfair.className}`}>
                      All Testimonials
                    </DialogTitle>
                    <img 
                      className="w-6 h-6 sm:w-8 sm:h-8 opacity-80" 
                      alt="Star" 
                      src="/star-1.svg" 
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsDialogOpen(false)}
                    className="rounded-full hover:bg-gray-100/80 transition-colors h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
                <p className={`text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 ${outfit.className}`}>
                  Discover what our clients have to say about their experience with us
                </p>
              </DialogHeader>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-1">
                {testimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-white hover:shadow-xl transition-all duration-300 border border-gray-100/50 hover:border-orange-100 group">
                      <CardContent className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-6">
                        {/* User Info */}
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-orange-100 group-hover:ring-orange-200 transition-colors">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="flex flex-col">
                              <h3 className={`text-base sm:text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors ${outfit.className}`}>
                                {testimonial.name}
                              </h3>
                              <p className={`text-xs sm:text-sm text-gray-500 ${outfit.className}`}>
                                {testimonial.position}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 sm:gap-2 bg-orange-50/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                            <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="currentColor" />
                            <span className={`text-xs sm:text-sm font-medium text-orange-600 ${outfit.className}`}>
                              {testimonial.rating}
                            </span>
                          </div>
                        </div>

                        {/* Property Image */}
                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-50">
                          <Image
                            src={testimonial.image}
                            alt="Property"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Review Content */}
                        <div className="flex flex-col gap-1 sm:gap-2">
                          <h4 className={`text-lg sm:text-xl font-medium text-gray-900 group-hover:text-orange-600 transition-colors ${outfit.className}`}>
                            {testimonial.title}
                          </h4>
                          <p className={`text-sm sm:text-base text-gray-600 leading-relaxed ${outfit.className}`}>
                            {testimonial.text}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

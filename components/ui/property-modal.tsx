'use client';

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Outfit } from "next/font/google";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"] });

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    id: number;
    name: string;
    location: string;
    price: string;
    image: string;
    description?: string;
    features?: string[];
    specifications?: {
      bedrooms: number;
      bathrooms: number;
      area: string;
      yearBuilt: number;
    };
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
};

export function PropertyModal({ isOpen, onClose, property }: PropertyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] max-w-4xl max-h-[90vh] sm:max-h-[85vh] bg-white rounded-2xl p-0 overflow-hidden flex flex-col">
        {/* Header */}
        <DialogHeader className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-100 flex-shrink-0">
          <motion.div 
            className="flex justify-between items-start"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <DialogTitle className={`text-lg sm:text-xl md:text-2xl font-semibold line-clamp-1 ${outfit.className}`}>
              {property.name}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full hover:bg-gray-100 h-8 w-8 sm:h-9 sm:w-9 -mr-2"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </DialogHeader>

        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 overflow-y-auto flex-1 min-h-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Left Column - Image */}
          <motion.div 
            className="relative h-[160px] sm:h-[200px] md:h-[220px] lg:h-[250px] w-full rounded-xl overflow-hidden"
            variants={itemAnimation}
          >
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, (max-width: 1280px) 80vw, 75vw"
            />
          </motion.div>

          {/* Right Column - Details */}
          <motion.div 
            className="flex flex-col gap-4 sm:gap-6 min-h-0"
            variants={staggerContainer}
          >
            {/* Location and Price */}
            <motion.div 
              className="flex flex-col gap-2 flex-shrink-0"
              variants={itemAnimation}
            >
              <p className={`text-sm sm:text-base md:text-lg text-black/60 line-clamp-1 ${outfit.className}`}>
                {property.location}
              </p>
              <p className={`text-xl sm:text-2xl md:text-3xl font-semibold text-[#e3572b] ${outfit.className}`}>
                {property.price}
              </p>
            </motion.div>

            {/* Specifications */}
            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 flex-shrink-0"
              variants={staggerContainer}
            >
              {[
                { label: "Bedrooms", value: property.specifications?.bedrooms || 0 },
                { label: "Bathrooms", value: property.specifications?.bathrooms || 0 },
                { label: "Area", value: property.specifications?.area || 'N/A' },
                { label: "Year Built", value: property.specifications?.yearBuilt || 'N/A' }
              ].map((spec, index) => (
                <motion.div
                  key={spec.label}
                  className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-100/80 transition-colors duration-200"
                  variants={itemAnimation}
                >
                  <p className={`text-xs sm:text-sm text-black/60 ${outfit.className}`}>{spec.label}</p>
                  <p className={`text-base sm:text-lg md:text-xl font-semibold truncate ${outfit.className}`}>
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div 
              className="flex flex-col gap-2 flex-shrink-0"
              variants={itemAnimation}
            >
              <h3 className={`text-sm sm:text-base md:text-lg font-semibold ${outfit.className}`}>Description</h3>
              <p className={`text-xs sm:text-sm md:text-base text-black/60 line-clamp-2 ${outfit.className}`}>
                {property.description || 'No description available.'}
              </p>
            </motion.div>

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <motion.div 
                className="flex flex-col gap-2 flex-shrink-0"
                variants={itemAnimation}
              >
                <h3 className={`text-sm sm:text-base md:text-lg font-semibold ${outfit.className}`}>Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {property.features.slice(0, 4).map((feature, index) => (
                    <motion.li
                      key={index}
                      className={`flex items-center gap-2 text-xs sm:text-sm md:text-base text-black/60 line-clamp-1 ${outfit.className}`}
                      variants={itemAnimation}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e3572b] flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Action Buttons - Fixed at bottom */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 flex-shrink-0"
              variants={itemAnimation}
            >
              <Button
                className={`w-full sm:flex-1 bg-[#e3572b] text-white hover:bg-[#d14d24] transition-all duration-200 hover:scale-[1.02] text-sm sm:text-base py-2.5 ${outfit.className}`}
              >
                Schedule Viewing
              </Button>
              <Button
                variant="outline"
                className={`w-full sm:flex-1 border-[#e3572b] text-[#e3572b] hover:bg-[#e3572b] hover:text-white transition-all duration-200 hover:scale-[1.02] text-sm sm:text-base py-2.5 ${outfit.className}`}
              >
                Contact Agent
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
} 
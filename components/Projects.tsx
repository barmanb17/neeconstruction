'use client';

import { ArrowUpRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Outfit, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { PropertyModal } from "@/components/ui/property-modal";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Property data for mapping
const properties = [
  // Residential Properties
  {
    id: 1,
    name: "Sunset Ridge Villa - 5 BHK",
    location: "Malibu, California, USA",
    price: "$900K",
    image: "/picture.png",
    category: "Residential",
    description: "Luxurious 5-bedroom villa with stunning ocean views, modern architecture, and premium finishes throughout. Features include a gourmet kitchen, home theater, wine cellar, and infinity pool.",
    features: [
      "Smart Home System",
      "Wine Cellar",
      "Home Theater",
      "Infinity Pool",
      "Gourmet Kitchen",
      "Ocean View",
      "Private Garden",
      "Security System"
    ],
    specifications: {
      bedrooms: 5,
      bathrooms: 6,
      area: "8,500 sq ft",
      yearBuilt: 2022
    }
  },
  {
    id: 4,
    name: "Ocean View Estate - 6 BHK",
    location: "Miami, Florida, USA",
    price: "$1.2M",
    image: "/picture-1.png",
    category: "Residential",
    description: "Stunning oceanfront estate with panoramic views, featuring a private beach access, infinity pool, and luxury amenities throughout.",
    features: [
      "Private Beach Access",
      "Infinity Pool",
      "Smart Home",
      "Wine Cellar",
      "Home Theater",
      "Ocean View",
      "Private Dock",
      "Security System"
    ],
    specifications: {
      bedrooms: 6,
      bathrooms: 7,
      area: "10,000 sq ft",
      yearBuilt: 2023
    }
  },
  {
    id: 7,
    name: "Hillside Mansion - 4 BHK",
    location: "Beverly Hills, California, USA",
    price: "$950K",
    image: "/picture-2.png",
    category: "Residential",
    description: "Elegant hillside mansion with city views, featuring modern architecture, smart home technology, and luxurious outdoor spaces.",
    features: [
      "City Views",
      "Smart Home",
      "Wine Room",
      "Home Gym",
      "Outdoor Kitchen",
      "Private Garden",
      "Security System",
      "EV Charging"
    ],
    specifications: {
      bedrooms: 4,
      bathrooms: 5,
      area: "7,200 sq ft",
      yearBuilt: 2022
    }
  },

  // Commercial Properties
  {
    id: 3,
    name: "Modern Office Tower",
    location: "Manhattan, New York, USA",
    price: "$2.5M",
    image: "/picture.png",
    category: "Commercial",
    description: "State-of-the-art office tower in the heart of Manhattan, featuring premium office spaces, conference facilities, and panoramic city views.",
    features: [
      "Premium Office Spaces",
      "Conference Center",
      "Smart Building",
      "Parking Garage",
      "Rooftop Terrace",
      "24/7 Security",
      "Fitness Center",
      "High-Speed Internet"
    ],
    specifications: {
      bedrooms: 0,
      bathrooms: 15,
      floors: 20,
      area: "50,000 sq ft",
      parking: 100,
      yearBuilt: 2023
    }
  },
  {
    id: 6,
    name: "Tech Innovation Hub",
    location: "Silicon Valley, CA, USA",
    price: "$3.2M",
    image: "/picture-1.png",
    category: "Commercial",
    description: "Innovative tech hub designed for collaboration and creativity, featuring modern workspaces, research labs, and cutting-edge amenities.",
    features: [
      "Research Labs",
      "Collaborative Spaces",
      "Green Building",
      "EV Charging",
      "Security System",
      "High-Speed Internet",
      "Innovation Center",
      "Rooftop Garden"
    ],
    specifications: {
      bedrooms: 0,
      bathrooms: 20,
      floors: 8,
      area: "35,000 sq ft",
      parking: 150,
      yearBuilt: 2023
    }
  },
  {
    id: 9,
    name: "Retail Plaza",
    location: "Chicago, Illinois, USA",
    price: "$1.8M",
    image: "/picture-2.png",
    category: "Commercial",
    description: "Prime retail plaza with high foot traffic, featuring modern storefronts, ample parking, and excellent visibility.",
    features: [
      "Modern Storefronts",
      "Ample Parking",
      "Security System",
      "Loading Docks",
      "Storage Space",
      "High Visibility",
      "24/7 Access",
      "CCTV Surveillance"
    ],
    specifications: {
      bedrooms: 0,
      bathrooms: 10,
      floors: 2,
      area: "25,000 sq ft",
      parking: 200,
      yearBuilt: 2022
    }
  },

  // Apartment Properties
  {
    id: 2,
    name: "Luxury Penthouse Suite",
    location: "Downtown, Los Angeles, USA",
    price: "$850K",
    image: "/picture.png",
    category: "Apartments",
    description: "Exclusive penthouse suite with panoramic city views, featuring high-end finishes, private elevator, and premium amenities.",
    features: [
      "Private Elevator",
      "City Views",
      "Smart Home",
      "Private Terrace",
      "Wine Cellar",
      "Home Office",
      "Security System",
      "Concierge Service"
    ],
    specifications: {
      bedrooms: 3,
      bathrooms: 3.5,
      area: "3,200 sq ft",
      yearBuilt: 2023
    }
  },
  {
    id: 5,
    name: "Studio Loft",
    location: "Arts District, Seattle, USA",
    price: "$350K",
    image: "/picture-1.png",
    category: "Apartments",
    description: "Modern studio loft in the vibrant arts district, featuring open concept design, high ceilings, and artistic finishes.",
    features: [
      "Open Concept",
      "High Ceilings",
      "Modern Design",
      "Smart Home",
      "Artistic Finishes",
      "Bike Storage",
      "Security System",
      "Pet Friendly"
    ],
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      area: "750 sq ft",
      yearBuilt: 2022
    }
  },
  {
    id: 8,
    name: "Family Apartment",
    location: "Suburban, Boston, USA",
    price: "$650K",
    image: "/picture-2.png",
    category: "Apartments",
    description: "Spacious family apartment in a quiet suburban setting, featuring modern amenities, community facilities, and excellent schools nearby.",
    features: [
      "Family Friendly",
      "Community Pool",
      "Playground",
      "Modern Kitchen",
      "Storage Space",
      "Security System",
      "Parking Space",
      "Near Schools"
    ],
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      area: "1,500 sq ft",
      yearBuilt: 2022
    }
  },
];

// Category filter options
const categories = [
  { id: 1, name: "Residential" },
  { id: 2, name: "Commercial" },
  { id: 3, name: "Apartments" },
];

export function Projects() {
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Residential");

  const handlePropertyClick = (property: typeof properties[0]) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  // Filter properties based on selected category
  const filteredProperties = properties.filter(
    property => property.category === selectedCategory
  );

  return (
    <section className="w-full bg-[#fff4ea] py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        {/* Header section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex items-center px-4 sm:px-0"
          >
            <h2 className="flex items-center gap-4">
              <span className={`text-4xl sm:text-5xl lg:text-[64px] tracking-tight ${outfit.className}`}>
                Latest
              </span>
              <span className={`italic text-4xl sm:text-5xl lg:text-[64px] ${playfair.className}`}>
                Project
              </span>
              <motion.img
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="ml-2 h-[40px] w-[34px] sm:h-[60px] sm:w-[52px]"
                alt="Star"
                src="/star-1.svg"
              />
            </h2>
          </motion.div>
          <motion.p 
            variants={fadeInUp}
            className={`max-w-xl text-base text-black/60 lg:text-lg px-4 sm:px-0 ${outfit.className}`}
          >
            We offer the latest property listings with detailed insights,
            virtual tours, and personalized assistance, ensuring a seamless and
            efficient real estate experience
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12 flex flex-wrap items-center gap-3 px-4 sm:px-0"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={scaleUp}
              custom={index}
            >
              <Button
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => handleCategoryClick(category.name)}
                className={`rounded-full px-6 py-3 text-base font-medium transition-colors ${outfit.className} ${
                  selectedCategory === category.name
                    ? "bg-[#e3572b] text-white hover:bg-[#d14d24]"
                    : "text-black hover:bg-black/5"
                }`}
              >
                {category.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Property cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 grid grid-cols-1 gap-8 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              variants={scaleUp}
              custom={index}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Card className="border-none bg-transparent shadow-none transition-transform hover:-translate-y-1">
                <CardContent className="flex flex-col gap-6 p-0">
                  {/* Property image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-[280px] w-full overflow-hidden rounded-xl"
                  >
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* Property details */}
                  <div className="flex flex-col gap-2">
                    <h3 className={`text-lg font-semibold text-black lg:text-xl ${outfit.className}`}>
                      {property.name}
                    </h3>
                    <p className={`text-base text-black/60 ${outfit.className}`}>
                      {property.location}
                    </p>
                  </div>

                  {/* Price and details link */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-semibold text-[#e3572b] lg:text-2xl ${outfit.className}`}>
                      {property.price}
                    </span>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handlePropertyClick(property)}
                      className={`group flex items-center gap-2 ${outfit.className}`}
                    >
                      <span className="text-base font-medium text-black transition-colors group-hover:text-[#e3572b]">
                        Details
                      </span>
                      <motion.div
                        whileHover={{ x: 3, y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <ArrowUpRightIcon className="h-5 w-5" />
                      </motion.div>
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message when no properties are found */}
        {filteredProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className={`text-lg text-black/60 ${outfit.className}`}>
              No properties found in this category.
            </p>
          </motion.div>
        )}

        {/* View all projects button */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex justify-center px-4 sm:px-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Button
              variant="outline"
              className={`rounded-full border-[#e3572b] px-8 py-3 text-base font-medium text-[#e3572b] transition-colors hover:bg-[#e3572b] hover:text-white ${outfit.className}`}
            >
              View all projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Property Modal */}
        {selectedProperty && (
          <PropertyModal
            isOpen={!!selectedProperty}
            onClose={handleCloseModal}
            property={selectedProperty}
          />
        )}
      </div>
    </section>
  );
}

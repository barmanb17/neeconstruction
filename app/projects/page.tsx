'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Outfit, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const categories = [
  { id: "all", name: "All Projects" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "industrial", name: "Industrial" },
  { id: "interior", name: "Interior Design" }
];

const projects = [
  {
    id: 1,
    title: "Modern Villa Complex",
    category: "residential",
    location: "Beverly Hills, CA",
    image: "/picture.png",
    year: "2023"
  },
  {
    id: 2,
    title: "Tech Hub Offices",
    category: "commercial",
    location: "Silicon Valley, CA",
    image: "/picture-1.png",
    year: "2023"
  },
  {
    id: 3,
    title: "Sustainable Factory",
    category: "industrial",
    location: "Detroit, MI",
    image: "/picture-2.png",
    year: "2022"
  },
  {
    id: 4,
    title: "Luxury Apartment Interior",
    category: "interior",
    location: "New York, NY",
    image: "/picture-4.png",
    year: "2023"
  },
  {
    id: 5,
    title: "Shopping Mall",
    category: "commercial",
    location: "Miami, FL",
    image: "/picture-5.png",
    year: "2022"
  },
  {
    id: 6,
    title: "Smart Home Design",
    category: "residential",
    location: "Seattle, WA",
    image: "/picture-6.png",
    year: "2023"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
              <span className={`text-gray-900 font-medium ${outfit.className}`}>Our Projects</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              <span className={outfit.className}>Featured </span>
              <span className={`${playfair.className} italic text-orange-500`}>Works</span>
            </h1>

            <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${outfit.className}`}>
              Explore our portfolio of successful projects, showcasing our commitment
              to excellence in construction and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border-orange-500 text-orange-500 hover:bg-orange-50"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className={`text-xl font-semibold mb-2 ${outfit.className}`}>
                            {project.title}
                          </h3>
                          <p className={`text-gray-600 ${outfit.className}`}>
                            {project.location}
                          </p>
                        </div>
                        <span className={`text-orange-500 ${outfit.className}`}>
                          {project.year}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-orange-500 text-orange-500 hover:bg-orange-50"
                      >
                        View Details
                        <ArrowUpRightIcon className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
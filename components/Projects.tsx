'use client';

import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Property data for mapping
const properties = [
  {
    id: 1,
    name: "Sunset Ridge Villa - 5 BHK",
    location: "Malibu, California, USA",
    price: "$900K",
    image: "..//picture.png",
  },
  {
    id: 2,
    name: "Willowbrook Home - 3 BHK",
    location: "Portland, Oregon, USA",
    price: "$700K",
    image: "..//picture-1.png",
  },
  {
    id: 3,
    name: "Whispering Pines Retreat - 4 BHK",
    location: "Aspen, Colorado, USA",
    price: "$850K",
    image: "..//picture-2.png",
  },
];

// Category filter options
const categories = [
  { id: 1, name: "Residential", active: true },
  { id: 2, name: "Commercial", active: false },
  { id: 3, name: "Apartments", active: false },
];

export const Projects = (): JSX.Element => {
  return (
    <section className="py-20 px-4 bg-[#fff4ea] w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="flex items-center mb-6 md:mb-0">
            <h2 className="text-[64px] tracking-[0]">
              <span className="font-normal [font-family:'Outfit',Helvetica]">
                Latest
              </span>
              <span className="[font-family:'Playfair_Display',Helvetica]">
                &nbsp;
              </span>
              <span className="[font-family:'Playfair_Display',Helvetica] italic">
                Project
              </span>
            </h2>
            <img
              className="w-[52px] h-[60px] ml-4"
              alt="Star"
              src="/star-1.svg"
            />
          </div>
          <p className="max-w-[563px] font-outfit-desktop-b3-reg text-black-60">
            We offer the latest property listings with detailed insights,
            virtual tours, and personalized assistance, ensuring a seamless and
            efficient real estate experience
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.active ? "default" : "outline"}
              className={`rounded-[40px] px-6 py-3 text-lg font-medium ${
                category.active
                  ? "bg-[#e3572b] text-white border-[#e3572b]"
                  : "text-black border-[#00000033]"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Property cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] mb-16">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0 flex flex-col gap-6">
                {/* Property image */}
                <div
                  className="w-full h-[280px] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${property.image})` }}
                />

                {/* Property details */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-outfit-desktop-b3-semi-b text-black">
                    {property.name}
                  </h3>
                  <p className="font-outfit-desktop-b4-reg text-black-60">
                    {property.location}
                  </p>
                </div>

                {/* Price and details link */}
                <div className="flex items-center justify-between">
                  <span className="font-outfit-desktop-b1 text-orange">
                    {property.price}
                  </span>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <span className="font-outfit-desktop-b3-reg text-black">
                      Details
                    </span>
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all projects button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="rounded-[40px] border-[#e3572b] text-[#e3572b] font-medium text-lg px-6 py-3"
          >
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
};

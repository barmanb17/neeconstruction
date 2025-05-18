'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Categories = (): JSX.Element => {
  const categories = [
    {
      id: 1,
      name: "Interior design",
      icon: "/vuesax-linear-magicpen.svg",
      position: { top: "6", left: "6" },
    },
    {
      id: 2,
      name: "Commercial architect",
      icon: "/vuesax-linear-ruler-pen.svg",
      position: { top: "6", left: "271px" },
    },
    {
      id: 3,
      name: "Landscape architect",
      icon: "/vuesax-linear-color-swatch.svg",
      position: { top: "28", left: "6" },
    },
    {
      id: 4,
      name: "Luxury Homes",
      icon: null,
      position: { top: "200px", left: "6" },
    },
    {
      id: 5,
      name: "Civic project",
      icon: "/vuesax-linear-ruler.svg",
      position: { top: "28", left: "271px" },
    },
    {
      id: 6,
      name: "Urban Planning",
      icon: "/vuesax-linear-triangle.svg",
      position: { top: "200px", left: "271px" },
    },
  ];

  return (
    <section className="relative w-full h-[546px] bg-[linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_100%),url(/on.png)_50%_50%_/_cover]">
      <div className="flex flex-col w-[287px] items-start gap-4 absolute top-[120px] left-[120px]">
        <h2 className="self-stretch mt-[-1.00px] [font-family:'Outfit',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-[64px] tracking-[0]">
            Project
          </span>
          <span className="[font-family:'Playfair_Display',Helvetica] italic">
            {" "}
            Categories
          </span>
        </h2>

        <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
          <p className="relative w-[290px] mt-[-1.00px] mr-[-3.00px] font-outfit-desktop-b4-reg font-[number:var(--outfit-desktop-b4-reg-font-weight)] text-white text-[length:var(--outfit-desktop-b4-reg-font-size)] tracking-[var(--outfit-desktop-b4-reg-letter-spacing)] leading-[var(--outfit-desktop-b4-reg-line-height)] [font-style:var(--outfit-desktop-b4-reg-font-style)]">
            Discover diverse real estate categories, from residential to
            industrial
          </p>

          <Button
            variant="outline"
            className="relative h-12 border border-solid border-[#ffffff66] rounded-[40px] px-6 py-3 bg-transparent"
          >
            <span className="[font-family:'Outfit',Helvetica] font-medium text-white-bg text-lg tracking-[0] leading-[normal]">
              Our work
            </span>
          </Button>
        </div>
      </div>

      <Card className="absolute w-[579px] h-[272px] top-[137px] left-[741px] bg-[#ffffff1a] rounded-3xl overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] border-none">
        {categories.map((category) => (
          <div
            key={category.id}
            className="inline-flex items-center gap-3 absolute"
            style={{ top: category.position.top, left: category.position.left }}
          >
            <div className="flex w-12 h-12 items-center gap-2.5 p-4 relative">
              <img
                className="absolute w-[47px] h-[46px] top-px left-px"
                alt="Star"
                src="/star-2.svg"
              />

              {category.icon ? (
                <img
                  className="relative w-4 h-4"
                  alt={`${category.name} icon`}
                  src={category.icon}
                />
              ) : (
                <div className="relative w-4 h-4 bg-[url(/smart-home.png)] bg-[100%_100%]" />
              )}
            </div>

            <div className="relative w-fit font-outfit-desktop-b3-reg font-[number:var(--outfit-desktop-b3-reg-font-weight)] text-white text-[length:var(--outfit-desktop-b3-reg-font-size)] tracking-[var(--outfit-desktop-b3-reg-letter-spacing)] leading-[var(--outfit-desktop-b3-reg-line-height)] [font-style:var(--outfit-desktop-b3-reg-font-style)]">
              {category.name}
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
};

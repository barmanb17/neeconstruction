'use client';

import {
  CrownIcon,
  FileTextIcon,
  MinusIcon,
  PlusIcon,
  ShapesIcon,
  TimerIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Outfit, Playfair_Display } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

// Add keyframe animations
const slideAnimationStyles = `
  @keyframes slideDown {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
      opacity: 1;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }

  .animate-slideDown {
    animation: slideDown 300ms ease-out;
  }

  .animate-slideUp {
    animation: slideUp 300ms ease-out;
  }

  .accordion-trigger {
    transition: all 300ms ease;
  }

  .accordion-trigger[data-state="open"] .icon-wrapper {
    background-color: transparent;
  }

  .accordion-trigger[data-state="open"] .icon-background {
    background-color: #e3572b;
    transform: scale(1.05);
  }

  .accordion-trigger[data-state="open"] .icon-wrapper svg {
    color: white;
    transform: scale(1.1);
    z-index: 1;
  }

  .accordion-trigger[data-state="open"] .title {
    color: #e3572b;
    transform: translateX(5px);
  }

  .icon-wrapper {
    transition: all 300ms ease;
    position: relative;
  }

  .icon-background {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    transition: all 300ms ease;
  }

  .icon-wrapper svg {
    transition: all 300ms ease;
    color: #000;
    position: relative;
    z-index: 1;
  }

  .title {
    transition: all 300ms ease;
  }
`;

export function Offer() {
  // Data for accordion items
  const accordionItems = [
    {
      id: "item-1",
      title: "Luxury Architecture and Technology",
      icon: <CrownIcon className="w-4 h-4" />,
      content:
        "High-end design and innovation seamlessly integrate to deliver sophisticated, high-tech living environments that epitomize modern elegance",
      defaultOpen: true,
    },
    {
      id: "item-2",
      title: "Efficient layout design",
      icon: <ShapesIcon className="w-4 h-4" />,
      content: "High-end design and innovation seamlessly integrate to deliver sophisticated, high-tech living environments that epitomize modern elegance",
    },
    {
      id: "item-3",
      title: "Years of Guarentee",
      icon: <FileTextIcon className="w-4 h-4" />,
      content: "High-end design and innovation seamlessly integrate to deliver sophisticated, high-tech living environments that epitomize modern elegance",
    },
    {
      id: "item-4",
      title: "Short Implementation time",
      icon: <TimerIcon className="w-4 h-4" />,
      content: "High-end design and innovation seamlessly integrate to deliver sophisticated, high-tech living environments that epitomize modern elegance",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <style jsx>{slideAnimationStyles}</style>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 lg:justify-between">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-[505px] gap-10">
            <div className="flex items-center gap-6">
              <h2 className="flex items-center gap-2 text-3xl sm:text-4xl lg:text-[60px] lg:leading-tight">
                <span className={`font-normal ${outfit.className}`}>
                  What we{" "}
                </span>
                <span className={`italic ${playfair.className}`}>
                  offer
                </span>
              </h2>
              <Image 
                src="/star-1.svg" 
                alt="Star" 
                width={52} 
                height={60}
                className="w-[32px] h-[36px] sm:w-[42px] sm:h-[48px] lg:w-[52px] lg:h-[60px]"
              />
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-solid border-black/10"
                >
                  <AccordionTrigger className="py-4 hover:no-underline accordion-trigger">
                    <div className="flex items-center gap-4 w-full">
                      <div className="relative flex w-12 h-12 items-center justify-center icon-wrapper">
                        <div className="icon-background" />
                        <Image
                          src="/star-2.svg"
                          alt="Star background"
                          width={47}
                          height={46}
                          className="absolute w-[47px] h-[46px] top-px left-px z-0"
                        />
                        <div className="relative z-1">
                          {item.icon}
                        </div>
                      </div>
                      <span
                        className={`text-left text-base font-semibold title ${outfit.className}`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16 pr-6 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp transition-all">
                    <p className={`text-black/60 ${outfit.className}`}>
                      {item.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Button
              variant="outline"
              className={`rounded-full border-[#e3572b] px-8 py-3 text-base font-medium text-[#e3572b] transition-colors hover:bg-[#e3572b] hover:text-white ${outfit.className}`}
            >
              Get started
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full lg:w-[664px] h-[428px] mt-8 lg:mt-0">
            <div className="relative w-full h-[379px]">
              <Image
                src="/ghor-1.png"
                alt="Architectural floor plan"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 664px"
                priority
              />
            </div>
            <div className="absolute bottom-0 w-full">
              <Image
                src="/line-15-1.svg"
                alt="Measurement line"
                width={388}
                height={68}
                className="absolute left-0.5"
              />
              <div className={`absolute left-[140px] rotate-[10deg] font-normal text-lg ${outfit.className}`}>
                25m
              </div>
              <Image
                src="/line-16-1.svg"
                alt="Measurement line"
                width={255}
                height={71}
                className="absolute right-0"
              />
              <div className={`absolute right-[129px] rotate-[-15deg] font-normal text-lg ${outfit.className}`}>
                16m
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

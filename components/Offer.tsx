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
import Link from "next/link";

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
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <style jsx>{slideAnimationStyles}</style>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 lg:justify-between">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-[505px] gap-8 sm:gap-10 lg:gap-12">
            <div className="flex items-center gap-4 sm:gap-6">
              <h1 className="flex items-center gap-2 text-3xl sm:text-4xl lg:text-6xl  lg:leading-tight">
                <span className={`font-normal ${outfit.className}`}>
                  What we{" "}
                </span>
                <span className={`italic ${playfair.className}`}>
                  offer
                </span>
              </h1>
              <Image 
                src="/star-1.svg" 
                alt="Star" 
                width={52} 
                height={60}
                className="w-[32px] h-[36px] sm:w-[40px] sm:h-[46px] lg:w-[52px] lg:h-[60px]"
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
                  <AccordionTrigger className="py-4 sm:py-5 hover:no-underline accordion-trigger">
                    <div className="flex items-center gap-4 sm:gap-5 w-full">
                      <div className="relative flex w-12 h-12 sm:w-14 sm:h-14 items-center justify-center icon-wrapper">
                        <div className="icon-background" />
                        <Image
                          src="/star-2.svg"
                          alt="Star background"
                          width={47}
                          height={46}
                          className="absolute w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] lg:w-[52px] lg:h-[52px] top-px left-px z-0"
                        />
                        <div className="relative z-1">
                          {React.cloneElement(item.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                        </div>
                      </div>
                      <span
                        className={`text-left text-base sm:text-lg font-semibold title ${outfit.className}`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-16 sm:pl-20 pr-6 sm:pr-8 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp transition-all">
                    <p className={`text-base sm:text-lg text-black/60 ${outfit.className}`}>
                      {item.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Link href="/contact">
              <Button
                variant="outline"
                className={`rounded-full border-[#e3572b] px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium text-[#e3572b] transition-colors hover:bg-[#e3572b] hover:text-white ${outfit.className}`}
              >
                Get started
              </Button>
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full lg:w-[664px] h-[350px] sm:h-[400px] lg:h-[428px] mt-8 sm:mt-10 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[379px]">
              <Image
                src="/ghor-1.png"
                alt="Architectural floor plan"
                fill
                className="object-cover rounded-xl sm:rounded-2xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 664px"
                priority
              />
            </div>
            <div className="absolute bottom-0 w-full">
              <Image
                src="/line-15-1.svg"
                alt="Measurement line"
                width={388}
                height={68}
                className="absolute left-0.5 w-[300px] sm:w-[340px] lg:w-[388px] -mb-4"
              />
              <div className={`absolute left-[110px] sm:left-[130px] lg:left-[150px] rotate-[10deg] font-normal text-lg sm:text-xl -mb-4 ${outfit.className}`}>
                25m
              </div>
              <Image
                src="/line-16-1.svg"
                alt="Measurement line"
                width={255}
                height={71}
                className="absolute right-0 w-[200px] sm:w-[240px] lg:w-[255px] -mb-4"
              />
              <div className={`absolute right-[100px] sm:right-[120px] lg:right-[140px] rotate-[-15deg] font-normal text-lg sm:text-xl -mb-4 ${outfit.className}`}>
                16m
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

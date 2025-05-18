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

export const Offer = (): JSX.Element => {
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
      content:  "High-end design and innovation seamlessly integrate to deliver sophisticated, high-tech living environments that epitomize modern elegance",
    },
    {
      id: "item-3",
      title: "Years of Guarentee",
      icon: <FileTextIcon className="w-4 h-4" />,
      content:  "High-end design and innovation seamlessly integrate to deliver sophisticated, high-tech living environments that epitomize modern elegance",
    },
    {
      id: "item-4",
      title: "Short Implementation time",
      icon: <TimerIcon className="w-4 h-4" />,
      content:  "High-end design and innovation seamlessly integrate to deliver sophisticated, high-tech living environments that epitomize modern elegance",
    },
  ];

  return (
    <section className="py-20 px-12 lg:px-18 bg-white-bg w-full">
      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row gap-20 justify-between">
        <div className="flex flex-col w-full md:w-[505px] items-start gap-10">
          <div className="flex items-center gap-10 relative w-full">
            <h2 className="text-[64px] leading-tight">
              <span className="font-normal [font-family:'Outfit',Helvetica]">
                What we{" "}
              </span>
              <span className="[font-family:'Playfair_Display',Helvetica] italic">
                offer
              </span>
            </h2>
            <img className="w-[52px] h-[60px]" alt="Star" src="/star-1.svg" />
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
                className="border-b border-solid border-black-10"
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <div className="relative flex w-12 h-12 items-center justify-center">
                      <img
                        className="absolute w-[47px] h-[46px] top-px left-px"
                        alt="Star background"
                        src="/star-2.svg"
                      />
                      {item.icon}
                    </div>
                    <span
                      className={`font-outfit-desktop-b3-semi-b text-left ${item.id === "item-1" ? "text-orange" : "text-black"}`}
                    >
                      {item.title}
                    </span>
                  </div>
                  {item.id === "item-1" ? (
                    <MinusIcon className="h-6 w-6 shrink-0 text-black transition-transform" />
                  ) : (
                    <PlusIcon className="h-6 w-6 shrink-0 text-black transition-transform" />
                  )}
                </AccordionTrigger>
                <AccordionContent className="pl-16 pr-6 text-black-60 font-outfit-desktop-b3-reg">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Button
            variant="outline"
            className="rounded-full border border-orange text-orange hover:bg-orange hover:text-white transition-colors"
          >
            Get started
          </Button>
        </div>

        <div className="relative w-full md:w-[664px] h-[428px]">
          <img
            className="w-full h-[379px] object-cover"
            alt="Architectural floor plan"
            src="/ghor-1.png"
          />
          <div className="absolute bottom-0 w-full">
            <img
              className="absolute w-[388px] h-[68px] left-0.5"
              alt="Measurement line"
              src="/line-15-1.svg"
            />
            <div className="absolute left-[140px] rotate-[10deg] font-normal text-lg">
              25m
            </div>
            <img
              className="absolute w-[255px] h-[71px] right-0"
              alt="Measurement line"
              src="/line-16-1.svg"
            />
            <div className="absolute right-[129px] rotate-[-15deg] font-normal text-lg">
              16m
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

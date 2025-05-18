'use client';

import { CalendarIcon, ClipboardCheckIcon, FileTextIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const DreamHouse = (): JSX.Element => {
  // Steps data for mapping
  const steps = [
    {
      id: 1,
      title: "Step 1 : Define Your Priorities",
      icon: <ClipboardCheckIcon className="relative w-4 h-4" />,
    },
    {
      id: 2,
      title: "Step 2 : Explore Listings",
      icon: <FileTextIcon className="relative w-4 h-4" />,
    },
    {
      id: 3,
      title: "Step 3 : Schedule Viewings",
      icon: <CalendarIcon className="relative w-4 h-4" />,
    },
  ];

  return (
    <section className="w-full h-[673px] bg-orage-light-bg overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto h-[433px] py-[120px] relative">
        <div className="flex flex-col w-[498px] items-start gap-10">
          <div className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full">
            <h1 className="text-[64px] leading-[normal] tracking-[0]">
              <span className="font-outfit-desktop-h1 font-normal text-black">
                Your dream{" "}
              </span>
              <span className="[font-family:'Playfair_Display',Helvetica] italic">
                house
              </span>
            </h1>

            <p className="font-outfit-desktop-b3-reg text-black-60">
              Discover your dream house, a perfect blend of comfort and
              elegance, where every detail is designed for your vision
            </p>
          </div>

          <div className="flex flex-col w-[296px] items-start gap-4">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-4">
                <div className="flex w-12 h-12 items-center justify-center gap-2.5 p-4 relative">
                  <img
                    className="absolute w-[47px] h-[46px] top-px left-px"
                    alt="Star"
                    src="/star-2.svg"
                  />
                  {step.icon}
                </div>
                <div className="font-outfit-desktop-b3-reg text-black">
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="h-12 px-6 py-3 rounded-[40px] border border-solid border-orange hover:bg-orange/10"
          >
            <span className="font-medium text-orange text-lg">Get started</span>
          </Button>
        </div>

        <Card className="absolute w-[582px] h-[433px] top-0 left-[618px] rounded-xl overflow-hidden border-none">
          <div className="w-full h-full bg-[url(/picture-6.png)] bg-cover bg-center" />
        </Card>
      </div>

      <img
        className="absolute w-[34px] h-11 top-[267px] left-[-13px]"
        alt="Vector"
        src="/vector-787.svg"
      />

      <img
        className="absolute w-[41px] h-[30px] top-[594px] left-[1408px]"
        alt="Vector"
        src="/vector-792.svg"
      />
    </section>
  );
};

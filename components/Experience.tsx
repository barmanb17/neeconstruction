'use client';

import React from "react";
import { Separator } from "@/components/ui/separator";

export const Experience = (): JSX.Element => {
  // Data for statistics to enable mapping
  const statistics = [
    { label: "Houses for rent", value: "8021" },
    { label: "States", value: "56+" },
    { label: "Homes to buy", value: "1025" },
    { label: "Agents", value: "215+" },
  ];

  return (
    <section className="w-full bg-[#fff8f2] py-12">
      <div className="container max-w-[1200px] mx-auto">
        <Separator className="w-full" />

        <div className="flex justify-center items-center my-[60px]">
          {statistics.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col items-start gap-6 w-[122px]">
                <p className="font-outfit-desktop-b3-reg text-black-60">
                  {stat.label}
                </p>
                <p className="font-outfit-desktop-b1 text-[#000000]">
                  {stat.value}
                </p>
              </div>

              {index < statistics.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-[82px] mx-[50px]"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <Separator className="w-full" />
      </div>
    </section>
  );
};

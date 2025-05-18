'use client';

import { LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Success = (): JSX.Element => {
  // Team members data for easier mapping
  const teamMembers = [
    {
      name: "John Belly",
      role: "Founder",
      image: "/ellipse-109.png",
    },
    {
      name: "Shelly Belly",
      role: "Co-Founder",
      image: "/picture-4.png",
    },
    {
      name: "Turan Yumi",
      role: "CTO",
      image: "/picture-5.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-white-bg">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center gap-[60px] w-full">
          <div className="flex flex-col items-center gap-4 max-w-[760px]">
            <div className="flex items-center gap-10 w-full justify-center">
              <img className="w-[52px] h-[60px]" alt="Star" src="/star-1.svg" />

              <h2 className="text-[64px] leading-[64px] text-center">
                <span className="font-normal [font-family:'Outfit',Helvetica]">
                  Behind Our
                </span>
                <span className="font-semibold">&nbsp;</span>
                <span className="[font-family:'Playfair_Display',Helvetica] italic">
                  Success
                </span>
              </h2>

              <img className="w-[52px] h-[60px]" alt="Star" src="/star-1.svg" />
            </div>

            <p className="text-lg text-black-60 text-center max-w-[515px] [font-family:'Outfit',Helvetica]">
              Introducing the driving force behind our success – our incredible
              team members
            </p>
          </div>

          <div className="flex flex-wrap gap-[60px] w-full justify-center">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="flex items-center gap-6 pl-6 pr-16 py-6 rounded-xl border border-solid border-[#dbdbdb]"
              >
                <CardContent className="p-0 flex items-center gap-6">
                  <div
                    className="w-[140px] h-[140px] rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />

                  <div className="flex flex-col gap-3">
                    <h3 className="font-sub-heading-h6 text-orange text-[24px] font-medium">
                      {member.name}
                    </h3>

                    <p className="font-body-b1-reg text-grey-1 text-[18px]">
                      {member.role}
                    </p>

                    <div className="flex gap-3 mt-3">
                      <TwitterIcon className="w-6 h-6" />
                      <LinkedinIcon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="border border-solid border-[#e3572b] text-[#e3572b] rounded-[40px] px-6 py-3 h-12 font-medium text-lg [font-family:'Outfit',Helvetica]"
        >
          View all
        </Button>
      </div>
    </section>
  );
};

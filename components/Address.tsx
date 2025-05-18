'use client';

import { StarIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Location data for mapping
const locations = [
  {
    id: 1,
    name: "Santa Ana",
    address: "123 Tenth Avenue, Manhattan, New York, NY 10003, USA, 456743",
    imageUrl: "..//image.png",
    position: { top: 0, left: "196px" },
  },
  {
    id: 2,
    name: "Preston Rd. Inglewood",
    address: "111 North Bridge Road Peninsula Plaza Singapore 179098",
    imageUrl: "..//image-1.png",
    position: { top: "150px", left: "932px" },
  },
];

export const Address = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fff9f4] overflow-hidden py-[50px]">
      <div className="flex flex-col max-w-[1120px] mx-auto items-center justify-center gap-20">
        {/* Header Section */}
        <div className="flex flex-col gap-3 items-center">
          <Badge
            variant="outline"
            className="pl-1.5 pr-[18px] py-2 bg-primarywhite rounded-[100px] flex items-center backdrop-blur-[30px]"
          >
            <div className="relative w-10 h-10 bg-primarywhite rounded-[100px] flex items-center justify-center mr-2">
              <StarIcon className="w-[17px] h-[17px]" />
            </div>
            <span className="font-heading-body-medium-16-medium text-primaryblack">
              Office
            </span>
          </Badge>

          <div className="flex flex-col gap-1.5 items-center">
            <h1 className="font-heading-h1-64-medium text-primaryblack text-center">
              Come and Visit us!
            </h1>
          </div>

          <p className="font-heading-body-large-20-regular text-primarygrey-600 text-center">
            Reach out anytime! Whether it&apos;s a question, a suggestion, or
            just to say hi, we&apos;re always here to help
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative w-full mt-[80px]">
        {/* Vector/Map Background */}
        <img
          className="w-full max-w-[1592px] h-[581px] mx-auto relative"
          alt="Vector"
          src="/vector-13.svg"
        />

        {/* Location Cards */}
        {locations.map((location) => (
          <Card
            key={location.id}
            className="flex flex-col w-[424px] items-start gap-2.5 p-6 absolute bg-primaryblack rounded-[32px]"
            style={{ top: location.position.top, left: location.position.left }}
          >
            <CardContent className="p-0">
              <div className="flex gap-4 items-center w-full">
                <div
                  className="relative w-[102px] h-[102px] rounded-[18px]"
                  style={{
                    background: `url(${location.imageUrl}) 50% 50% / cover`,
                  }}
                />

                <div className="flex flex-col w-[266px] items-start gap-2">
                  <h2 className="font-medium text-white text-2xl font-['Outfit',Helvetica] tracking-[0] leading-normal">
                    {location.name}
                  </h2>

                  <p className="font-heading-body-medium-16-medium text-primarygrey-500">
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="relative w-[51px] h-[51px] mt-[8px] mx-auto">
                <div className="relative w-9 h-9 top-[7px] left-[7px] bg-primaryblack rounded-[10px] rotate-[46.93deg]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

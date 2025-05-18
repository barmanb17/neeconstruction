'use client';

import { StarIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Samuel Oam",
    position: "CEO, Arbor",
    rating: "5/5",
    image: "/picture-7.png",
    title: "Unmatched Quality",
    text: "From consultation to closing, they provided exceptional service and guidance",
    avatar: "/ellipse-109.png",
  },
  {
    id: 2,
    name: "Kristie Jeno",
    position: "CFO, Stratland",
    rating: "5/5",
    image: "/picture-8.png",
    title: "Outstanding Experience",
    text: "The team made the home-buying process seamless and stress-free for us",
    avatar: "/ellipse-109-1.png",
  },
  {
    id: 3,
    name: "Cristian Neol",
    position: "CMO, Airneo",
    rating: "5/5",
    image: "/picture-9.png",
    title: "Exceptional Service",
    text: "Their expertise in real estate helped us find the perfect home with best quality possible",
    avatar: "/ellipse-109-2.png",
  },
];

export const Testimonials = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 py-[120px] relative w-full">
      <div className="flex flex-col items-center gap-[60px] relative w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 max-w-[760px]">
          <div className="flex items-center gap-10 w-full justify-center">
            <img className="w-[52px] h-[60px]" alt="Star" src="/star-1.svg" />

            <h2 className="text-[64px] text-center leading-[64px] font-normal">
              <span className="font-['Outfit',Helvetica]"> Our</span>
              <span className="font-semibold">&nbsp;</span>
              <span className="font-['Playfair_Display',Helvetica] italic">
                Testimonials
              </span>
            </h2>

            <img className="w-[52px] h-[60px]" alt="Star" src="/star-1.svg" />
          </div>

          <p className="max-w-[515px] font-['Outfit',Helvetica] font-normal text-black-60 text-lg text-center">
            See how we've turned clients' real estate dreams into reality with
            exceptional service
          </p>
        </div>

        <div className="flex flex-col items-center gap-[60px] w-full">
          {/* Testimonial Cards */}
          <div className="flex items-center justify-center gap-10 w-full overflow-x-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`flex flex-col w-[584px] rounded-xl border border-solid border-[#dbdbdb] overflow-hidden`}
              >
                <CardContent className="flex flex-col gap-6 p-10">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-6">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>

                      <div className="flex flex-col gap-2">
                        <h3 className="font-outfit-desktop-b3-semi-b text-black">
                          {testimonial.name}
                        </h3>
                        <p className="font-body-b2-reg text-black-60">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end gap-3">
                      <StarIcon
                        className="w-6 h-6 text-orange"
                        fill="currentColor"
                      />
                      <span className="font-body-b1-reg text-orange">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>

                  <div
                    className="w-full h-[200px] rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />

                  <div className="flex flex-col gap-4">
                    <h4 className="font-outfit-desktop-b3-semi-b text-black">
                      {testimonial.title}
                    </h4>
                    <p className="font-outfit-desktop-b3-reg text-black-60">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <Button
            variant="outline"
            className="border border-solid border-orange text-orange rounded-[40px] h-12 px-6"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
};

'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const CTA = (): JSX.Element => {
  // Newsletter subscription data
  const newsletterData = {
    title: "Join our Mailing list",
    subtitle: "Subscribe for the latest real estate news and insights",
    inputPlaceholder: "Enter your email address",
    buttonText: "Submit",
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background layers */}
      <div className="flex flex-col w-full items-start absolute top-0 left-0">
        <div className="w-full h-[181px] bg-white-bg" />
        <div className="w-full h-[181px] bg-dark-bg" />
      </div>

      {/* Newsletter card */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4 py-[60px]">
        <Card className="w-full bg-orange rounded-[30px] border-none overflow-hidden">
          <CardContent className="flex flex-col items-center gap-10 p-[60px]">
            {/* Heading section */}
            <div className="flex flex-col items-center gap-4 max-w-[512px]">
              <div className="flex items-center gap-10 w-full">
                <img
                  className="w-[52px] h-[60px]"
                  alt="Star"
                  src="/star-1.svg"
                />
                <h2 className="font-outfit-desktop-b1 font-[number:var(--outfit-desktop-b1-font-weight)] text-white text-[length:var(--outfit-desktop-b1-font-size)] text-center tracking-[var(--outfit-desktop-b1-letter-spacing)] leading-[var(--outfit-desktop-b1-line-height)] [font-style:var(--outfit-desktop-b1-font-style)]">
                  {newsletterData.title}
                </h2>
                <img
                  className="w-[52px] h-[60px]"
                  alt="Star"
                  src="/star-1.svg"
                />
              </div>
              <p className="font-outfit-desktop-b3-reg font-[number:var(--outfit-desktop-b3-reg-font-weight)] text-white-60 text-[length:var(--outfit-desktop-b3-reg-font-size)] text-center tracking-[var(--outfit-desktop-b3-reg-letter-spacing)] leading-[var(--outfit-desktop-b3-reg-line-height)] [font-style:var(--outfit-desktop-b3-reg-font-style)]">
                {newsletterData.subtitle}
              </p>
            </div>

            {/* Email input and submit button */}
            <div className="flex items-center w-full max-w-[494px] h-[68px] bg-white rounded-[40px] overflow-hidden">
              <Input
                className="flex-1 h-full border-none shadow-none px-6 py-7 font-outfit-desktop-b3-reg font-[number:var(--outfit-desktop-b3-reg-font-weight)] text-black-60 text-[length:var(--outfit-desktop-b3-reg-font-size)] tracking-[var(--outfit-desktop-b3-reg-letter-spacing)] leading-[var(--outfit-desktop-b3-reg-line-height)] [font-style:var(--outfit-desktop-b3-reg-font-style)]"
                type="email"
                placeholder={newsletterData.inputPlaceholder}
              />
              <Button className="h-12 mr-2 bg-orange hover:bg-orange/90 rounded-[40px] px-6 py-3">
                <span className="font-outfit-desktop-b3-semi-b font-[number:var(--outfit-desktop-b3-semi-b-font-weight)] text-white-bg text-[length:var(--outfit-desktop-b3-semi-b-font-size)] tracking-[var(--outfit-desktop-b3-semi-b-letter-spacing)] leading-[var(--outfit-desktop-b3-semi-b-line-height)] [font-style:var(--outfit-desktop-b3-semi-b-font-style)]">
                  {newsletterData.buttonText}
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

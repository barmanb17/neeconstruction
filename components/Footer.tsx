'use client';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";

// Define data for footer sections to make the code more maintainable
const companyLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Listing", href: "#" },
  { label: "Agents", href: "#" },
];

const supportLinks = [
  { label: "Contact us", href: "#" },
  { label: "Help", href: "#" },
];

const socialLinks = [
  { icon: <TwitterIcon className="w-6 h-6" />, href: "#", label: "Twitter" },
  { icon: <FacebookIcon className="w-6 h-6" />, href: "#", label: "Facebook" },
  {
    icon: <InstagramIcon className="w-6 h-6" />,
    href: "#",
    label: "Instagram",
  },
  { icon: <LinkedinIcon className="w-6 h-6" />, href: "#", label: "LinkedIn" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start gap-2.5 p-[120px] bg-dark-bg">
      <div className="flex flex-col items-start gap-10 w-full">
        <div className="flex flex-wrap items-start justify-between gap-8 w-full">
          {/* Logo and description */}
          <div className="flex flex-col items-start gap-4 max-w-[354px]">
            <div className="inline-flex items-center gap-1">
              <img
                className="w-[30px] h-[30px]"
                alt="Galaxy"
                src="/galaxy.svg"
              />
              <div className="inline-flex items-center gap-2">
                <div className="[font-family:'Playfair_Display',Helvetica] font-normal italic text-white text-2xl">
                  Skyline
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <p className="font-outfit-desktop-b3-reg text-white-60">
                A breathtaking skyline, where towering skyscrapers meet the
                horizon, epitomizes urban grandeur.
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-start gap-[100px]">
            {/* Company links */}
            <div className="flex flex-col items-start gap-1.5 min-w-[124px]">
              <div className="flex flex-col items-start gap-6 w-full">
                <h3 className="font-outfit-desktop-b3-semi-b text-white-bg">
                  COMPANY
                </h3>

                <nav className="flex flex-col items-start gap-1.5 w-full">
                  {companyLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="font-outfit-desktop-b3-reg text-white-60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Support links */}
            <div className="flex flex-col items-start gap-6 min-w-[124px]">
              <h3 className="font-outfit-desktop-b3-semi-b text-white-bg">
                SUPPORT
              </h3>

              <nav className="flex flex-col items-start gap-1.5 w-full">
                {supportLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="font-outfit-desktop-b3-reg text-white-60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social links */}
            <div className="flex flex-col items-start gap-6">
              <h3 className="font-outfit-desktop-b3-semi-b text-white-bg">
                SOCIAL
              </h3>

              <div className="flex items-center gap-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-white-60 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white-10 h-px w-full" />

        {/* Footer bottom */}
        <div className="flex flex-wrap items-center justify-between w-full gap-4">
          <p className="font-outfit-desktop-b3-reg text-white-60">
            © Skyline Inc. All Rights Reserved.
          </p>

          <p className="font-outfit-desktop-b3-reg text-white-60">
            Privacy Policy.Terms and condition
          </p>
        </div>
      </div>
    </footer>
  );
};

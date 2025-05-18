import { Address } from "@/components/Address";
import { Categories } from "@/components/Categories";
import Companies from "@/components/Companies";
import { CTA } from "@/components/CTA";
import { DreamHouse } from "@/components/DreamHouse";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Offer } from "@/components/Offer";
import { Projects } from "@/components/Projects";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { Success } from "@/components/Success";
import { Testimonials } from "@/components/Testimonials";
import { MobileNav } from "@/components/ui/resizable-navbar";
import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavbarDemo/>
      <Hero/>
      <Companies/>
      <Offer/>
      <Projects/>
      <Experience/>
      <Categories/>
      <Success/>
      <DreamHouse/>
      <Testimonials/>
      <Address/>
      <CTA/>
      <Footer/>
    </div>
  );
}

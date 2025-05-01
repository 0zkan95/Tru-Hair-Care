
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSub from "@/components/HeroSub";
import WhyChoose from "@/components/WhyChoose";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Gallary from "@/components/Gallary";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {

  return (
    <div className="bg-white-500">
      <Header />
      <Hero />
      <HeroSub />
      <WhyChoose />
      <Pricing />
      <Services />
      <Gallary />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

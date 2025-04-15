"use client";

import ParticleNetwork from "@/components/particle-network";
import { CallToAction } from "@/sections/CallToAction";
import Services from "@/sections/Services";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogosBanner } from "@/sections/LogosBanner";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import Planet from "@/sections/Planet";
import { AllFeatures } from "@/sections/AllFeatures";
import { useLenis } from "@/hooks/useLenis";
export default function Home() {
  //smooth scrolling effect from useLenis package
  useLenis();
  return (
    <>
      <Header />
      <section id="hero-section" className="relative">
        <ParticleNetwork />
        <Hero />
      </section>

      <LogosBanner />
      <ProductShowcase />
      <Services />

      <AllFeatures />

      <Planet />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}

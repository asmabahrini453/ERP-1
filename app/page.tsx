import ParticleNetwork from "@/components/particle-network";
import { CallToAction } from "@/sections/CallToAction";
import Categories from "@/sections/Services";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogosBanner } from "@/sections/LogosBanner";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="relative">
     
      <section id="hero-section" className="relative">
        <ParticleNetwork />
        <Header />
        <Hero />
      </section>
      <LogosBanner />
      <ProductShowcase/>
      <Pricing/>
      <Testimonials/>
      <Categories/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

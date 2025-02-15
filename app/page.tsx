import ParticleNetwork from "@/components/particle-network";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogosBanner } from "@/sections/LogosBanner";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";

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
    </div>
  );
}

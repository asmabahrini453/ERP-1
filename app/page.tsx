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
import { Features } from "@/sections/Features";
import { FAQ } from "@/sections/FAQ";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <section id="hero-section" className="relative">
        <ParticleNetwork />
        <Hero />
      </section>

      <LogosBanner />
     
      

        <ProductShowcase />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ/>

        <Services />
        <CallToAction />
      <Footer />
    
      </div>
  );
}

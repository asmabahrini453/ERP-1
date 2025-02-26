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
import Planet from "@/sections/Planet";

export default function Home() {
  return (
    < >
  
      <Header />
      <section id="hero-section" className="relative">
        <ParticleNetwork /> 
        <Hero />
      </section>

      <LogosBanner />

      <ProductShowcase />

        <Features />
     {/* this is a test component */}
       <Planet/>
       
        <Pricing />
        <Testimonials />
        <FAQ/>
        <Services />
        <CallToAction />
        <Footer />
      
    
      </>
  );
}

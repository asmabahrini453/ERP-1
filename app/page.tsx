import ParticleNetwork from "@/components/particle-network";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <div className="relative">
      <ParticleNetwork />
      <Header />
      <Hero />
    </div>
  );
}

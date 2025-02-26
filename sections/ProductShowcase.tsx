"use client"

import productImage from "@/assets/images/product.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export const ProductShowcase = () => {
  const appImageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ["start end", "start center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) =>
      console.log("Scroll Progress:", latest)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      className="py-24 relative bg-cover bg-right"
      style={{ backgroundImage: "url('/blurred-shape.svg')"  ,}}
    >
      <div className="container relative z-10">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boostez votre productivité</div>
          </div>
          <h2 className="mt-5 section-title">
            Une manière plus efficace de suivre vos progrès
          </h2>
          <p className="mt-5 section-description text-muted-foreground">
            Célébrez la joie de l'accomplissement avec une application conçue
            pour suivre vos progrès et motiver vos efforts.
          </p>
        </div>

        <div className="relative mt-10 z-40">
          <div ref={appImageRef} className="w-full">
            <motion.div
              style={{
                opacity,
                rotateX,
                transformPerspective: "800px",
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              className="w-full flex justify-center"
            >
              <div className="relative shadow-xl shadow-[#747487] rounded-lg">
                <Image src={productImage} alt="Produit" className="rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


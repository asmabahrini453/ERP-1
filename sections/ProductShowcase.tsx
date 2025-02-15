import productImage from "@/assets/images/product.jpg";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boostez votre productivité</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold mt-5 tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Une manière plus efficace de suivre vos progrès
          </h2>
          <p className="mt-5 text-center text-[22px] leading-[30px] tracking-tight text-muted-foreground">
            Célébrez la joie de l'accomplissement avec une application conçue pour suivre vos progrès et motiver vos efforts.
          </p>
        </div>
        <div className="mt-10 relative">
          <div className="relative shadow-xl shadow-[#747487] rounded-lg">
            <Image 
              src={productImage} 
              alt="Produit" 
              className="rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

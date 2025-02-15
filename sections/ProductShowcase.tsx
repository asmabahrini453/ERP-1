import productImage from "@/assets/images/product.jpg";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#EAEFFA]">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boostez votre productivité</div>
          </div>
          <h2 className=" mt-5 section-title">
            Une manière plus efficace de suivre vos progrès
          </h2>
          <p className="mt-5 section-description text-muted-foreground ">
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

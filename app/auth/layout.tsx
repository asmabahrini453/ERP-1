import Image from 'next/image';
import React from 'react';
import Product from "@/assets/images/product.jpg";
import Logo from "@/assets/images/erplogo.png";
import DevPro from "@/assets/images/devpro.png";
import '../globals.css';

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {

  return (
    <div className="h-screen flex w-full "> 
    <div className="absolute top-6 left-6 flex justify-center items-center z-10"> 
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          className="sm:w-[60px] sm:h-[60px]"
        />
        <span className="font-bold tracking-tight text-[#383861] lg:flex md:text-[32px] sm:text-[16px]">
          ERP PRO
        </span>
      </div>
      <div className="w-[600px] ld:w-full flex flex-col items-center justify-center p-6">   
        <div className="relative mt-6 p-6 bg-[#F6F7FA] rounded-lg shadow-lg flex justify-center items-center w-full mx-auto">
          {children}
        </div>
        <p className="mt-6 flex items-center justify-center text-sm text-gray-500">
          &copy; 2025, Tous droits réservés à DevPro Solutions{' '}
          <Image src={DevPro} alt={"DevPro Solutions"} className='ml-2' width={20} height={20} />
        </p>
      </div>
     
     
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3 bg-gradient-to-b from-[#FFFFFF] to-[#b4d0f4]">
        <h2 className="section-title md:text-4xl text-left"> Bonjour, connectez-vous à ERP Pro ! </h2>
        <p className="section-description text-muted-foreground mt-3 text-left mr-4">
          Gérez vos tâches, optimisez vos flux de travail et boostez votre productivité avec notre ERP tout-en-un ...
          <br />
          Allons-y 🚀
        </p>

        <div className="relative mt-3 shadow-[rgba(116,116,135,0.5)_0_4px_16px] rounded-lg">
          <Image
            src={Product}
            alt={"Produit"}
            className="rounded-lg"
            loading="lazy"
            sizes="30"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;

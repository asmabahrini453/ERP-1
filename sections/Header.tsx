"use client";

import ArrowRight from "@/assets/icons/arrow-right.svg";
import MenuIcon from "@/assets/icons/menu.svg";

import Logo from "@/assets/images/erplogo.png";
import Image from "next/image";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      {/* Banner */}
      <div className="flex justify-center items-center py-1 bg-[#023E8A] text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Optimisez votre flux de travail et augmentez votre productivité
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Obtenez une démo gratuite</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Nav bar */}
      <div className="py-1">
        <div className="container">
          <div className="flex items-center justify-between">
           
            <div className="flex justify-center items-center ">
              <Image src={Logo} alt="logo" height={60} width={60}  />
              <span className="font-bold tracking-tight text-[#383861] hidden lg:flex ">
                ERP PRO
              </span>
            </div>

           
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-6 bg-white">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Menu</span>
                  <SheetClose asChild>
                   
                  </SheetClose>
                </div>
                <nav className="mt-6 flex flex-col gap-4 text-black/60">
                  <SheetClose asChild>
                    <a href="#" className="hover:text-black">Acceuil</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#" className="hover:text-black">Services</a>
                  </SheetClose>
                 
                  <SheetClose asChild>
                    <a href="#" className="hover:text-black">Tarification</a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#" className="hover:text-black">Aide</a>
                  </SheetClose>
                
                  <SheetClose asChild>
                    <Link  href="/auth/sign-in" className="bg-[#023E8A] hover:bg-[#3BCEAB] text-white font-medium flex items-center justify-center py-2 px-4 rounded-lg tracking-tight">
                      Se connecter
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>

          
            <nav className="hidden md:flex gap-6 items-center text-black/60">
              <a href="#" className="hover:text-black">Acceuil</a>
              <a href="#" className="hover:text-black">Services</a>
              <a href="#" className="hover:text-black">Tarification</a>
              <a href="#" className="hover:text-black">Aide</a>
              <Link  href="/auth/sign-in"  className="bg-[#023E8A] text-white font-medium py-2 px-4 rounded-lg tracking-tight hover:bg-[#3BCEAB]">
                Se connecter
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

"use client";

import { useEffect, useState } from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import Logo from "@/assets/images/erplogo.png";

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div
  className={`transition-all duration-500 w-full ${
    scrolled
      ? "mx-auto mt-4 rounded-3xl shadow-lg max-w-[95%] sm:max-w-md md:max-w-2xl lg:max-w-3xl"
      : ""
  }`}
>

          <header className={`w-full ${scrolled ? "bg-white py-1.5 rounded-3xl" : "bg-[#F6F7FA]"}`}>
            {/* Banner */}
            {!scrolled && (
              <div className="flex justify-center items-center py-1 bg-[#023E8A] text-white text-sm gap-3">
                <p className="text-white/60 hidden md:block">
                  Optimisez votre flux de travail et augmentez votre productivité
                </p>
                <div className="inline-flex gap-1 items-center">
                  <p>Obtenez une démo gratuite</p>
                  <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
                </div>
              </div>
            )}

            {/* Navbar */}
            <div  className={`${scrolled ? " " : ""}`}>
              <div className="container mx-auto">
                <div className="flex items-center justify-between  ">
                  {/* Logo */}
                  <div className="flex items-center gap-0">
                    <Image src={Logo} alt="logo" 
                     height={scrolled ? 36 : 60}
                     width={scrolled ? 36 : 60}
                     className="transition-all duration-300" />
                     <span className="font-bold tracking-tight text-[#383861] hidden lg:flex ml-2">ERP PRO</span>
                  </div>

                  {/* Mobile Menu Icon */}
                  <div className="md:hidden  z-50">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <MenuIcon className="h-6 w-6 text-[#023E8A]" />
                    </button>
                  </div>

                  {/*md devices */}
                  <nav className="hidden md:flex gap-6 items-center text-black/60">
                    <a href="#" className="hover:text-black">
                      Acceuil
                    </a>
                    <a href="#" className="hover:text-black">
                      Services
                    </a>
                    <a href="#" className="hover:text-black">
                      Tarification
                    </a>
                    <a href="#" className="hover:text-black">
                      Aide
                    </a>
                    <Link
                      href="/auth/sign-in"
                      className={`bg-[#023E8A] text-white font-medium rounded-lg tracking-tight hover:bg-[#3BCEAB] ${
                        scrolled ? "py-1.5 px-3 text-sm" : "py-2 px-4"
                      }`}  >
                      Se connecter
                    </Link>
                  </nav>
                </div>
              </div>

              {/* Mobile Only Dropdown Menu */}
              {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 z-40">
                  <div className="flex flex-col sm:flex-col sm:justify-center gap-4 px-6 py-4 text-black/70 text-center">
                    <a
                      href="#"
                      className="hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Acceuil
                    </a>
                    <a
                      href="#"
                      className="hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tarification
                    </a>
                    <a
                      href="#"
                      className="hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Aide
                    </a>
                    <Link
                      href="/auth/sign-in"
                      className="bg-[#023E8A] hover:bg-[#3BCEAB] text-white font-medium py-2 px-4 rounded-lg tracking-tight mx-auto sm:mx-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Se connecter
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

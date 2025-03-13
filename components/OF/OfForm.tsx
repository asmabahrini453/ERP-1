"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import info from "@/assets/icons/info.png";
import Image from "next/image";

interface OfFormProps {
  activeTab: string;
  downArrow: any;
}

const OfForm = ({ activeTab, downArrow }: OfFormProps) => {
  // Refs for each section
  const detailsRef = useRef<HTMLDivElement>(null);
  const entrepotRef = useRef<HTMLDivElement>(null);
  const tempsRef = useRef<HTMLDivElement>(null);

  //scroll to active section when tab changes
  useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        details: detailsRef,
        entrepot: entrepotRef,
        temps: tempsRef,
      };

      const ref = sectionRefs[activeTab];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToSection();
  }, [activeTab]);

  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({
    details: true,
    entrepot: false,
    temps: false,
  });

  // Toggle section open/closed
  const toggleSection = (section: string) => {
    //to update the state of the section
    setIsOpen((prev) => ({
      ...prev, // Keep existing state for the other sections
      [section]: !prev[section], // Toggle the selected section
    }));
  };

  return (
    <>
      {/* article */}
      <div
        ref={detailsRef}
        id="details"
        className="bg-white rounded-lg shadow-md p-6 mb-6 border"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px] cursor-pointer"
            onClick={() => toggleSection("details")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Détails de l'article de production
            </h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300
                 ${isOpen.details ? "rotate-90" : "-rotate-90"}`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>

        {isOpen.details && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                N° Séries <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Société <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Devpro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Article à produire <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Devpro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantité à produire <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                N° Nomenclature <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Commande Client <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option></option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* entrepot */}
      <div
        ref={entrepotRef}
        id="entrepot"
        className="bg-white rounded-lg shadow-md p-6 mb-6 border"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px] cursor-pointer"
            onClick={() => toggleSection("entrepot")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Entrepôt</h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300
                 ${isOpen.entrepot ? "rotate-90" : "-rotate-90"}`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>

        {isOpen.entrepot && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entrepôt source <span className="text-red-500">*</span>
                </label>
                <Image src={info} alt="voir plus" />
              </div>

              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entrepôt cible <span className="text-red-500">*</span>
                </label>
                <Image src={info} alt="voir plus" />
              </div>

              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entrepôt des Travaux en Cours
                  <span className="text-red-500"> *</span>
                </label>
                <Image src={info} alt="voir plus" />
              </div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entrepôt de Rebut
                  <span className="text-red-500"> *</span>
                </label>
                <Image src={info} alt="voir plus" />
              </div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      {/* Temps */}
      <div
        ref={tempsRef}
        id="temps"
        className="bg-white rounded-lg shadow-md p-6 mb-6 border"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px] cursor-pointer"
            onClick={() => toggleSection("temps")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Temps</h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300
                 ${isOpen.temps ? "rotate-90" : "-rotate-90"}`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>

        {isOpen.temps && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date de Début Prévue <span className="text-red-500"> *</span>
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="05-02-2025 15:53:56"

              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Date de Début Réelle <span className="text-red-500"> *</span>
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="05-02-2025 15:53:56"

              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Date de Fin Prévue  
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"                
                placeholder="05-02-2025 15:53:56"

              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Date de Fin Réelle 
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="05-02-2025 15:53:56"

              />
            </div>
            <div >
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Date de livraison prévue  
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md "
                placeholder="05-02-2025 15:53:56"
              />
            </div>


          </div>
        )}
      </div>
    </>
  );
};

export default OfForm;

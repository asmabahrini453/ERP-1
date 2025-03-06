"use client";

import { useEffect, useRef, useState } from "react";
import downArrow from "@/assets/icons/down-arrow.png";
import Image from "next/image";

interface NewEntrepriseProps {
  activeTab: string;
  downArrow: any;
}

const NewEntreprise = ({ activeTab, downArrow }: NewEntrepriseProps) => {
  const generaleRef = useRef<HTMLDivElement>(null);
  const comptableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        generale: generaleRef,
        comptable: comptableRef,
      };
      const ref = sectionRefs[activeTab];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToSection();
  }, [activeTab]);

  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({
    generale: true,
    comptable: false,
  });

  const toggleSection = (section: string) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      {/* info generale */}
      <div
      ref={generaleRef}
      id="generale"
      className="bg-white rounded-lg shadow-md p-6 mb-6 border"
    >
      <div className="flex flex-col mb-4">
        <div
          className="flex items-center gap-2 mb-4 cursor-pointer"
          onClick={() => toggleSection("generale")}
        >
          <h2 className="text-lg font-bold text-[#023E8A]">
            Information Générales
          </h2>
          <Image
            src={downArrow || "/placeholder.svg"}
            alt="voir plus"
            className={`h-4 w-4 transition-transform duration-300 ${
              isOpen.generale ? "rotate-90" : "-rotate-90"
            }`}
          />
        </div>
        <div className="border-b w-full" />
      </div>

      {isOpen.generale && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom De L'entreprise <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Activité <span className="text-red-500">*</span>
            </label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Technologie</option>
            </select>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Langue des PDF <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Français</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Internet
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="border-b border-dashed border-gray-300 col-span-2" />

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gouvernorat <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Monastir</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Code Postal
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pays <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Tunisie</option>
              </select>
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Carte
            </label>
          </div>
        </div>
      )}
    </div>

      {/*taxe  */}
      <div
        ref={comptableRef}
        id="comptable"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]"
            onClick={() => toggleSection("comptable")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Information Comptables
            </h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.taxe ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.comptable && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Numéro D'identification Fiscale
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Année Fiscale 
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>2025</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Devise Principale <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>TND</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default NewEntreprise;

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AddressMap from "@/components/AddressMap";
import downArrow from "@/assets/icons/down-arrow.png";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface NewEntrepriseProps {
  activeTab: string;
  downArrow: any;
}

const EntrepriseFiche = ({ activeTab, downArrow }: NewEntrepriseProps) => {
  const generaleRef = useRef<HTMLDivElement>(null);
  const comptableRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null)
  const abonnementRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const securiteRef = useRef<HTMLDivElement>(null)

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
    notifications: false,
    abonnement: false,
    services: false,
    securite: false,
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
              src={downArrow}
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
                disabled
                value="DevPro Solution"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Activité <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                disabled
                value="Technologie"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Langue des PDF <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  disabled
                  value="Français"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Internet
                </label>
                <input
                  type="text"
                  disabled
                  value="devpro-solution.com"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="text"
                  disabled
                  value="+216 99 888 444"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="border-b border-dashed border-gray-300 col-span-2" />

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <input
                type="text"
                disabled
                value="B 24, Immeuble Ibn Arafa, Avenue Ibn Sina"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gouvernorat <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value="Monastir"
                  disabled
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code Postal
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="5000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pays <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="Tunisie"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carte
              </label>
              <AddressMap
                address="B 24"
                codePostal="5000"
                gouvernorat="Monastir"
                pays="Tunisie"
              />
            </div>
          </div>
        )}
      </div>

      {/*comptable  */}
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
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.comptable ? "rotate-90" : "-rotate-90"
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
                value="1361232E"
                disabled
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Année Fiscale
              </label>
              <input
                type="text"
                value="2012"
                disabled
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Devise Principale <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value="TND"
                disabled
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>

     
    </>
  );
};
export default EntrepriseFiche;

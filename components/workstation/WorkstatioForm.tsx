"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Switch } from "../ui/switch";

interface EntrepotProps {
  activeTab: string;
  downArrow: any;
}

const WorkstationForm = ({ activeTab, downArrow }: EntrepotProps) => {
  // Refs for each section
  const detailsRef = useRef<HTMLDivElement>(null);
  const statutRef = useRef<HTMLDivElement>(null);
  const coutRef = useRef<HTMLDivElement>(null);

   //scroll to active section when tab changes
   useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        details: detailsRef,
        contact: statutRef,
        cout:coutRef ,
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
    contact: false,
    cout:false,
  });

  // Toggle section open/closed
  const toggleSection = (section: string) => {
    //to update the state of the section
    setIsOpen((prev) => ({
      ...prev, // Keep existing state for the other sections
      [section]: !prev[section], // Toggle the selected section
    }));
  };

  const [statutBlocked, setStatutBlocked] = useState(false);
  return (
    <>
      {/* details */}
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
            <h2 className="text-lg font-bold text-[#023E8A]">Détails</h2>
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
                Nom de l'Entrepôt <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Référence
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Société <span className="text-red-500"> *</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Devpro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type d'entrepôt <span className="text-red-500"> *</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Transit</option>
              </select>
            </div>

            <div className="flex items-center space-x-8  ">
              <span className="text-sm font-medium text-gray-700">Bloqué</span>
              <Switch
                checked={statutBlocked}
                onCheckedChange={setStatutBlocked}
                className="shadow-md"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Catégorie <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    name="type-requete"
                    value="Entrepôt collectif"
                    id="entrepotCollectif"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="entrepotCollectif"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Entrepôt collectif
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="type-requete"
                    value="Entrepôt de rebut"
                    id="entrepotRebut"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="entrepotRebut"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Entrepôt de rebut
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entrepôt Parent
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      
    </>
  );
};

export default WorkstationForm;

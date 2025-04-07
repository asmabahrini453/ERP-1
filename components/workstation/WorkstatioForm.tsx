"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Switch } from "../ui/switch";

interface WorkstationProps {
  activeTab: string;
  downArrow: any;
}

const WorkstationForm = ({ activeTab, downArrow }: WorkstationProps) => {
  // Refs for each section
  const detailsRef = useRef<HTMLDivElement>(null);
  const statutRef = useRef<HTMLDivElement>(null);
  const coutRef = useRef<HTMLDivElement>(null);

  //scroll to active section when tab changes
  useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        details: detailsRef,
        statut: statutRef,
        cout: coutRef,
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
    statut: false,
    cout: false,
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
                Nom de la station de travail{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Capacité de travail <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de poste de travail
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entrepôt <span className="text-red-500"> *</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Achat</option>
              </select>
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
      {/*statut  */}
      <div
        ref={statutRef}
        id="statut"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]  cursor-pointer"
            onClick={() => toggleSection("statut")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Statut de station de travail
            </h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.statut ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.statut && (
          <div className="space-y-6 border p-[23px] rounded-[4px]">
            <div className="flex items-center space-x-8  ">
              <span className="text-sm font-medium text-gray-700">
                Active/Inactive
              </span>
              <Switch
                checked={statutBlocked}
                onCheckedChange={setStatutBlocked}
                className="shadow-md"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                statut
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    name="statut"
                    value="production"
                    id="production"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="production"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Production
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="statut"
                    value="entretien"
                    id="entretien"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="entretien"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Entretien
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="statut"
                    value="configuration"
                    id="configuration"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="configuration"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Configuration{" "}
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 ">
                <div className="relative">
                  <input
                    type="radio"
                    name="statut"
                    value="probleme"
                    id="probleme"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="probleme"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Problème
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="statut"
                    value="idle"
                    id="idle"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="production"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Idle
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* cout */}
      <div
        ref={coutRef}
        id="cout"
        className="bg-white rounded-lg shadow-md p-6 mb-6 border"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px] cursor-pointer"
            onClick={() => toggleSection("cout")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Coûts d'exploitation
            </h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300
                 ${isOpen.cout ? "rotate-90" : "-rotate-90"}`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>

        {isOpen.cout && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coût de l'électricité
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coût de location
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coût de consommable 
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Salaire total de chaque employé
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

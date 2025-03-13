"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import info from "@/assets/icons/info.png";
import Image from "next/image";
import { Switch } from "../ui/switch";
import AddressMap from "../AddressMap";

interface EntrepotProps {
  activeTab: string;
  downArrow: any;
}

const EntrepotForm = ({ activeTab, downArrow }: EntrepotProps) => {
  // Refs for each section
  const detailsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [statutBlocked, setStatutBlocked] = useState(false);

  const [address, setAddress] = useState<string>("");
  const [codePostal, setCodePostal] = useState<string>("");
  const [gouvernorat, setGouvernorat] = useState<string>("Monastir");
  const [pays, setPays] = useState<string>("Tunisie");
  //  this new state to trigger map updates
  const [updateMap, setUpdateMap] = useState<number>(0);
  //  this function to handle all address-related changes
  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: "address" | "codePostal" | "gouvernorat" | "pays"
  ) => {
    const value = e.target.value;

    switch (field) {
      case "address":
        setAddress(value);
        break;
      case "codePostal":
        setCodePostal(value);
        break;
      case "gouvernorat":
        setGouvernorat(value);
        break;
      case "pays":
        setPays(value);
        break;
    }

    // Trigger map update after a short delay
    setTimeout(() => {
      setUpdateMap((prev) => prev + 1);
    }, 300);
  };

  //scroll to active section when tab changes
  useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        details: detailsRef,
        contact: contactRef,
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

      {/* info contact */}
      <div
        ref={contactRef}
        id="contact"
        className="bg-white rounded-lg shadow-md p-6 mb-6 border"
      >
        <div className="flex flex-col mb-4">
          <div
            className="flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => toggleSection("contact")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Informations de Contact
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

        {isOpen.contact && (
            <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              N° de Téléphone 
               <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              N° Mobile 
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="border-b border-dashed border-gray-300 col-span-2 m-6 " />
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-md">
          <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => handleAddressChange(e, "address")}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Example: Rue de la République"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gouvernorat <span className="text-red-500">*</span>
                </label>
                <select
                  value={gouvernorat}
                  onChange={(e) => handleAddressChange(e, "gouvernorat")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Ariana">Ariana</option>
                  <option value="Béja">Béja</option>
                  <option value="Ben Arous">Ben Arous</option>
                  <option value="Bizerte">Bizerte</option>
                  <option value="Gabès">Gabès</option>
                  <option value="Gafsa">Gafsa</option>
                  <option value="Jendouba">Jendouba</option>
                  <option value="Kairouan">Kairouan</option>
                  <option value="Kasserine">Kasserine</option>
                  <option value="Kébili">Kébili</option>
                  <option value="Le Kef">Le Kef</option>
                  <option value="Mahdia">Mahdia</option>
                  <option value="Manouba">Manouba</option>
                  <option value="Médenine">Médenine</option>
                  <option value="Monastir">Monastir</option>
                  <option value="Nabeul">Nabeul</option>
                  <option value="Sfax">Sfax</option>
                  <option value="Sidi Bouzid">Sidi Bouzid</option>
                  <option value="Siliana">Siliana</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Tataouine">Tataouine</option>
                  <option value="Tozeur">Tozeur</option>
                  <option value="Tunis">Tunis</option>
                  <option value="Zaghouan">Zaghouan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code Postal
                </label>
                <input
                  type="text"
                  value={codePostal}
                  onChange={(e) => handleAddressChange(e, "codePostal")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Exemple: 4000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pays <span className="text-red-500">*</span>
                </label>
                <select
                  value={pays}
                  onChange={(e) => handleAddressChange(e, "pays")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Tunisie</option>
                  <option value="Algérie">Algérie</option>
                  <option value="France">France</option>
                </select>
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carte
              </label>
              <AddressMap
                address={address}
                codePostal={codePostal}
                gouvernorat={gouvernorat}
                pays={pays}
                key={updateMap}
              />
            </div>
            
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default EntrepotForm;

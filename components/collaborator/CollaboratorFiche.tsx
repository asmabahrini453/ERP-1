"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import AddressMap from "@/components/AddressMap"

interface NewCollaboratorProps {
  activeTab: string
  downArrow: any
}

const CollaboratorFiche = ({ activeTab, downArrow }: NewCollaboratorProps) => {
  const generaleRef = useRef<HTMLDivElement>(null);
  const professionalRef = useRef<HTMLDivElement>(null);
  const addressFRef = useRef<HTMLDivElement>(null);
  const addressLRef = useRef<HTMLDivElement>(null);
  const [addressF, setAddressF] = useState<string>("");
  const [codePostalF, setCodePostalF] = useState<string>("");
  const [gouvernoratF, setGouvernoratF] = useState<string>("Monastir");
  const [paysF, setPaysF] = useState<string>("Tunisie");
  //  this new state to trigger map updates
  const [updateMapF, setUpdateMapF] = useState<number>(0);
  //  this function to handle all address-related changes
  const handleAddressFChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: "addressF" | "codePostalF" | "gouvernoratF" | "paysF"
  ) => {
    const value = e.target.value;

    switch (field) {
      case "addressF":
        setAddressF(value);
        break;
      case "codePostalF":
        setCodePostalF(value);
        break;
      case "gouvernoratF":
        setGouvernoratF(value);
        break;
      case "paysF":
        setPaysF(value);
        break;
    }

    // Trigger map update after a short delay
    setTimeout(() => {
      setUpdateMapF((prev) => prev + 1);
    }, 300);
  };
  const [addressL, setAddressL] = useState<string>("");
  const [codePostalL, setCodePostalL] = useState<string>("");
  const [gouvernoratL, setGouvernoratL] = useState<string>("Monastir");
  const [paysL, setPaysL] = useState<string>("Tunisie");
  //  this new state to trigger map updates
  const [updateMapL, setUpdateMapL] = useState<number>(0);
  //  this function to handle all address-related changes
  const handleAddressLChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: "addressL" | "codePostalL" | "gouvernoratL" | "paysL"
  ) => {
    const value = e.target.value;

    switch (field) {
      case "addressL":
        setAddressL(value);
        break;
      case "codePostalL":
        setCodePostalL(value);
        break;
      case "gouvernoratL":
        setGouvernoratL(value);
        break;
      case "paysL":
        setPaysL(value);
        break;
    }

    // Trigger map update after a short delay
    setTimeout(() => {
      setUpdateMapL((prev) => prev + 1);
    }, 300);
  };




  useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        generale: generaleRef,
        professional: professionalRef,
        addressF: addressFRef,
        addressL: addressLRef,
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
    professional: false,
    addressF: false,
    addressL: false,
   
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
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre <span className="text-red-500">*</span>
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Mr</option>
                  <option>Mme</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de famille <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Référence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entreprise <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>DevPro Solutions</option>
              </select>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tèléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
            </div>
          </div>
        )}
      </div>
      {/* Information Professionnelles*/}
      <div
        ref={professionalRef}
        id="professional"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]  cursor-pointer"
            onClick={() => toggleSection("professional")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Information Professionnelles
            </h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.professional ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.professional && (
          <div className="space-y-6 border p-[23px] rounded-[4px]">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    name="type-requete"
                    value="entreprise"
                    id="entreprise"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="entreprise"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Entreprise
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="type-requete"
                    value="particulier"
                    id="particulier"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="particulier"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Particulier
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro d'identification fiscale
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Activité
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="IT">IT</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Devise
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="TND">TND</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Conditions De Paiement
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Virement bancaire</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        {/* Adresse de facturation */}
        <div
          ref={addressFRef}
          id="addressF"
          className="bg-white rounded-lg shadow-md p-6 mb-6 border inline-block align-top w-full md:w-[calc(50%-8px)] md:mr-4"
        >
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => toggleSection("addressF")}>
              <h2 className="text-lg font-bold text-[#023E8A]">Adresse De Facturation</h2>
              <Image
                src={downArrow}
                alt="voir plus"
                className={`h-4 w-4 transition-transform duration-300 ${isOpen.addressF ? "rotate-90" : "-rotate-90"}`}
              />
            </div>
            <div className="border-b w-full" />
          </div>
          {isOpen.addressF && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-md">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                <input
                  type="text"
                  value={addressF}
                  onChange={(e) => handleAddressFChange(e, "addressF")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Example: Rue de la République"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 w-1/2">Gouvernorat</label>
                <select
                  value={gouvernoratF}
                  onChange={(e) => handleAddressFChange(e, "gouvernoratF")}
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Code Postal</label>
                <input
                  type="text"
                  value={codePostalF}
                  onChange={(e) => handleAddressFChange(e, "codePostalF")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="4000"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
                <select
                  value={paysF}
                  onChange={(e) => handleAddressFChange(e, "paysF")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Tunisie</option>
                  <option value="Algérie">Algérie</option>
                  <option value="France">France</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Carte</label>
                <AddressMap
                  address={addressF}
                  codePostal={codePostalF}
                  gouvernorat={gouvernoratF}
                  pays={paysF}
                  key={updateMapF}
                />
              </div>
            </div>
          )}
        </div>

        {/** Adresse de Livraison */}
        <div
          ref={addressLRef}
          id="addressL"
          className="bg-white rounded-lg shadow-md p-6 mb-6 border inline-block align-top w-full md:w-[calc(50%-8px)]"
        >
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => toggleSection("addressL")}>
              <h2 className="text-lg font-bold text-[#023E8A]">Adresse De Livraison</h2>
              <Image
                src={downArrow}
                alt="voir plus"
                className={`h-4 w-4 transition-transform duration-300 ${isOpen.addressL ? "rotate-90" : "-rotate-90"}`}
              />
            </div>
            <div className="border-b w-full" />
          </div>
          {isOpen.addressL && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-md">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                <input
                  type="text"
                  value={addressL}
                  onChange={(e) => handleAddressLChange(e, "addressL")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Example: Rue de la République"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 w-1/2">Gouvernorat</label>
                <select
                  value={gouvernoratL}
                  onChange={(e) => handleAddressLChange(e, "gouvernoratL")}
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Code Postal</label>
                <input
                  type="text"
                  value={codePostalL}
                  onChange={(e) => handleAddressLChange(e, "codePostalL")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="4000"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
                <select
                  value={paysL}
                  onChange={(e) => handleAddressLChange(e, "paysL")}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Tunisie</option>
                  <option value="Algérie">Algérie</option>
                  <option value="France">France</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Carte</label>
                <AddressMap
                  address={addressL}
                  codePostal={codePostalL}
                  gouvernorat={gouvernoratL}
                  pays={paysL}
                  key={updateMapL}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CollaboratorFiche;


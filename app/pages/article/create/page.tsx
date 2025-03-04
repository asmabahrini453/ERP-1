"use client";

import { useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import ValiderIcon from "@/assets/icons/valider-icon.png";
import filterIcon from "@/assets/icons/filter.png";
import downArrow from "@/assets/icons/down-arrow.png";

import { Copy, Pencil, Printer, Share2Icon } from "lucide-react";

const ArticlePage = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [maximizeStock, setMaximizeStock] = useState(false);
  const [stockBlocked, setStockBlocked] = useState(false);
  const [purchaseBlocked, setPurchaseBlocked] = useState(false);
  const [salesBlocked, setSalesBlocked] = useState(false);

  const tabs = [
    { id: "details", label: "Détails" },
    { id: "achat", label: "Achat" },
    { id: "ventes", label: "Ventes" },
    { id: "stock", label: "Stock" },
    { id: "taxe", label: "Taxe" },
    { id: "qualite", label: "Qualité" },
  ];
  // to track if the form is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // ki teclicki 3al arrow it will open the form in the accordion way
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="space-y-6 overflow-x-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="md:text-sm text-muted-foreground sm:text-[12px]">
            Stock /
          </div>
          <h1 className="md:text-xl font-bold text-[#383861] sm:text-[16px]">
            Article
          </h1>
        </div>

        <div className="flex items-center md:gap-4 sm:gap-1 sm:mt-1">
          <div className="flex items-center md:gap-2 sm:gap-1 cursor-pointer">
            {[Copy, Pencil, Printer, Share2Icon].map((Icon, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center w-10 h-10 rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>

          <div className="border-l border mx-4 sm:mx-2 h-8" />

          <div className="flex md:gap-4 sm:gap-1 sm:mr-2">
            <Button className="bg-transparent hover:bg-white text-muted-foreground border">
              <Image src={filterIcon} alt="filter icon" className="h-4 w-4" />
              <span className="hidden md:inline">Filtrer</span>
            </Button>
            <Button className="bg-[#3BCEAB] hover:bg-[#3BCEAB] text-[#F2F9F3] w-[120px] ">
              <Image
                src={ValiderIcon}
                alt="validate icon"
                className="h-4 w-4"
              />
              <span className="hidden md:inline">Valider</span>
            </Button>
          </div>
        </div>
      </div>
      {/* Nav contenu */}
      <div className="flex overflow-x-auto space-x-2 mb-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Form Contenu */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 w-full pr-4">
          {/* Détails */}
          {activeTab === "details" && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 border ">
              <div className="flex  items-start flex-col mb-4">
                <div
                  className="flex items-center justify-center gap-2 mb-[10px]"
                  onClick={toggleAccordion}
                >
                  <h2 className="text-lg font-bold text-[#023E8A]">Détails</h2>
                  <Image
                    src={downArrow}
                    alt="voir plus"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "-rotate-90"
                    }`}
                  />
                </div>

                <div className=" border-l border mx-8 sm:mx-2 w-full" />
              </div>

              {!isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border  p-[23px] rounded-[4px]">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Titre <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      N° de série <span className="text-red-500">*</span>
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
                      Catégorie <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Matière première</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Code Catégorie de l'article{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      N° de souche <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Destinée à <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Achat</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-20 ">
                    <div className="flex items-center space-x-8  ">
                      <span className="text-sm font-medium text-gray-700">
                        Bloqué
                      </span>
                      <Switch
                        checked={stockBlocked}
                        onCheckedChange={setStockBlocked}
                        className="shadow-md"
                      />
                    </div>
                    <div className="flex items-center space-x-8">
                      <span className="text-sm font-medium text-gray-700">
                        Maximiser Stock
                      </span>
                      <Switch
                        checked={maximizeStock}
                        onCheckedChange={setMaximizeStock}
                        className="shadow-md"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/*achat */}
          {activeTab === "achat" && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex  items-start flex-col mb-4">
                <div
                  className="flex items-center justify-center gap-2 mb-[10px]"
                  onClick={toggleAccordion}
                >
                  <h2 className="text-lg font-bold text-[#023E8A]">Achat</h2>
                  <Image
                    src={downArrow}
                    alt="voir plus"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "-rotate-90"
                    }`}
                  />
                </div>

                <div className=" border-l border mx-8 sm:mx-2 w-full" />
              </div>

              {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Coût unitaire
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prix d'achat
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Qté sur commande actuelle
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Remise
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex items-center space-x-20">
                    <span className="text-sm font-medium text-gray-700">
                      Bloqué
                    </span>
                    <Switch
                      checked={purchaseBlocked}
                      onCheckedChange={setPurchaseBlocked}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/*ventes  */}
          {activeTab === "ventes" && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex  items-start flex-col mb-4">
                <div
                  className="flex items-center justify-center gap-2 mb-[10px]"
                  onClick={toggleAccordion}
                >
                  <h2 className="text-lg font-bold text-[#023E8A]">Ventes</h2>
                  <Image
                    src={downArrow}
                    alt="voir plus"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "-rotate-90"
                    }`}
                  />
                </div>

                <div className=" border-l border mx-8 sm:mx-2 w-full " />
              </div>
              {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border  p-[23px] rounded-[4px]">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prix unitaire <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prix de vente par défaut
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      % marge sur vente <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      UDM par défaut à la vente{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Achat</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-20">
                    <span className="text-sm font-medium text-gray-700">
                      Ventes bloqué
                    </span>
                    <Switch
                      checked={salesBlocked}
                      onCheckedChange={setSalesBlocked}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/*Stock  */}
          {activeTab === "stock" && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex  items-start flex-col mb-4">
                <div
                  className="flex items-center justify-center gap-2 mb-[10px]"
                  onClick={toggleAccordion}
                >
                  <h2 className="text-lg font-bold text-[#023E8A]">Stocks</h2>
                  <Image
                    src={downArrow}
                    alt="voir plus"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "-rotate-90"
                    }`}
                  />
                </div>

                <div className=" border-l border mx-8 sm:mx-2 w-full" />
              </div>
              {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border  p-[23px] rounded-[4px]">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      N° d'emplacement en stock{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Matière première</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Stock de sécurité <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/*taxe  */}
          {activeTab === "taxe" && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex  items-start flex-col mb-4">
                <div
                  className="flex items-center justify-center gap-2 mb-[10px]"
                  onClick={toggleAccordion}
                >
                  <h2 className="text-lg font-bold text-[#023E8A]">Taxe</h2>
                  <Image
                    src={downArrow}
                    alt="voir plus"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "-rotate-90"
                    }`}
                  />
                </div>

                <div className=" border-l border mx-8 sm:mx-2 w-full" />
              </div>
              {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border  p-[23px] rounded-[4px]">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Modèle de taxe <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>TVA (19%)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Validé à partir de <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/*qualité  */}
          {activeTab === "qualite" && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex  items-start flex-col mb-4">
                <div
                  className="flex items-center justify-center gap-2 mb-[10px]"
                  onClick={toggleAccordion}
                >
                  <h2 className="text-lg font-bold text-[#023E8A]">Qualité</h2>
                  <Image
                    src={downArrow}
                    alt="voir plus"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "-rotate-90"
                    }`}
                  />
                </div>
                <div className=" border-l border mx-8 sm:mx-2 w-full" />
              </div>
              {isOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border  p-[23px] rounded-[4px]">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description d'erreur{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phase d'erreur
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phase de réparation
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

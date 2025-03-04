"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import ValiderIcon from "@/assets/icons/valider-icon.png";
import filterIcon from "@/assets/icons/filter.png";
import {
  Copy,
  Pencil,
  Printer,
  Share2Icon,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import downArrow from "@/assets/icons/down-arrow.png";
import Image from "next/image";

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
    { id: "parametrage", label: "Paramétrage de l'inventaire" },
    { id: "champs", label: "Champs Personnalisés" },
  ];
  // Styles for the tabs
  const tabStyles = {
    container: "flex items-center justify-between border-b",
    tab: (isActive: boolean) =>
      `md:px-6 sm:px-4 md:py-2.5 sm:py-1 md:text-sm sm:text-[10px] font-medium transition-colors relative
    ${
      isActive ? "bg-[#023E8A] text-white" : "text-gray-600 hover:text-gray-800"
    }
    ${isActive ? "rounded-t-md" : ""}
    `,
    separator: "h-5 w-px bg-gray-200 mx-1",
    tabContent: "flex items-center space-x-2",
  };

 
  // to track if the form is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // ki teclicki 3al arrow it will open the form in the accordion way
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Product data for the card
  const productData = {
    codeArticle: "A808001",
    description: "Veste légère",
    uniteVente: "PCS",
    stockActuel: 120,
    coutUnitaire: 88,
    prixVente: 120,
    referenceFournisseur: "3200",
    modeEvaluationStock: "FIFO",
    codeModeleRangement: "1896-S",
    dateDebutInventaire: "12/02/2025",
    dateFinInventaire: "17/02/2025",
  };

  const activityData = [
    {
      user: "Rafik Hafsa",
      action: "a créé ceci",
      date: "23/01/2025",
      time: "13:28",
    },
    {
      user: "Vous",
      action: "avez édité ceci",
      date: "23/01/2025",
      time: "10:28",
    },
  ];

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
            <Button className="bg-[#3BCEAB] hover:bg-[#3BCEAB] text-[#F2F9F3] md:w-[120px] ">
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
      <div className={tabStyles.container}>
        {tabs.map((tab, index) => (
          <>
            {index > 0 && <div className={tabStyles.separator} />}
            <button
              key={tab.id}
              className={tabStyles.tab(activeTab === tab.id)}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className={tabStyles.tabContent}>
                <span>{tab.label}</span>
              </div>
            </button>
          </>
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
          {/*Inventaire  */}
          {activeTab === "parametrage" && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex items-start flex-col mb-4">
                <div
                  className="flex items-center justify-center gap-2 mb-[10px]"
                  onClick={toggleAccordion}
                >
                  <h2 className="text-lg font-bold text-[#023E8A]">
                    Paramétrage de l'inventaire
                  </h2>
                  <Image
                    src={downArrow}
                    alt="voir plus"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "-rotate-90" : "rotate-90"
                    }`}
                  />
                </div>
                <div className="border-l border mx-8 sm:mx-2 w-full" />
              </div>
              {!isOpen && (
                <div className="space-y-6 border p-[23px] rounded-[4px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Durée de conservation en jours
                      </label>
                      <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date dern. inventaire
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Proch. date début d'inventaire
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Proch. date fin d'inventaire
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Poids par unité
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        UdM de poids
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="kg">Kilogramme (kg)</option>
                        <option value="g">Gramme (g)</option>
                        <option value="lb">Livre (lb)</option>
                      </select>
                    </div>
                  </div>

                  {/* Méthode de valorisation */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Méthode de valorisation
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="relative">
                        <input
                          type="radio"
                          name="valorisation"
                          value="fifo"
                          id="fifo"
                          className="peer hidden"
                          defaultChecked
                        />
                        <label
                          htmlFor="fifo"
                          className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                        >
                          FIFO
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="radio"
                          name="valorisation"
                          value="lifo"
                          id="lifo"
                          className="peer hidden"
                        />
                        <label
                          htmlFor="lifo"
                          className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                        >
                          LIFO
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="radio"
                          name="valorisation"
                          value="moyenne"
                          id="moyenne"
                          className="peer hidden"
                        />
                        <label
                          htmlFor="moyenne"
                          className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                        >
                          Moyenne Mobile
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Type de requete */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Type de requete de matériaux par défaut
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="relative">
                        <input
                          type="radio"
                          name="type-requete"
                          value="achat"
                          id="achat"
                          className="peer hidden"
                        />
                        <label
                          htmlFor="achat"
                          className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                        >
                          Achat
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="radio"
                          name="type-requete"
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
                          name="type-requete"
                          value="transfert"
                          id="transfert"
                          className="peer hidden"
                        />
                        <label
                          htmlFor="transfert"
                          className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                        >
                          Transfert de matériel
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {/*Champs Personnalisés  */}
          {activeTab === "champs" && (
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex  items-start flex-col mb-4">
                <div className="flex items-center justify-between mb-[10px]">
                  <div
                    className="flex items-center justify-center gap-2 "
                    onClick={toggleAccordion}
                  >
                    <h2 className="text-lg font-bold  text-[#023E8A]">
                      Champs Personnalisés
                    </h2>
                    <Image
                      src={downArrow}
                      alt="voir plus"
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "-rotate-90"
                      }`}
                    />
                  </div>
                 
                </div>

                <div className=" border-l border mx-8 sm:mx-2 w-full" />
              </div>
            </div>
          )}
        </div>
        <div className="md:w-1/3 md:block hidden">
          <ProductCard productDetails={productData} activities={activityData} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

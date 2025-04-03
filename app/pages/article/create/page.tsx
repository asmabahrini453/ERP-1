"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ValiderIcon from "@/assets/icons/valider-icon.png";
import filterIcon from "@/assets/icons/filter.png";
import {
  Copy,
  Pencil,
  Printer,
  Share2Icon,
} from "lucide-react";
import ProductCard from "@/components/article/ProductCard";
import downArrow from "@/assets/icons/down-arrow.png";
import Image from "next/image";
import ArticleForm from "@/components/article/ArticleForm";

const ArticlePage = () => {
  const [activeTab, setActiveTab] = useState(''); 
 

  const tabs = [
    { id: "details", label: "Détails" },
    { id: "achat", label: "Achat" },
    { id: "ventes", label: "Ventes" },
    { id: "stock", label: "Stock" },
    { id: "taxe", label: "Taxe" },
    { id: "qualite", label: "Qualité" },
    { id: "inventaire", label: "Paramétrage de l'inventaire" },
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
    <div className="space-y-6 overflow-x-hidden p-6">
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
        <div className="md:w-[80%] w-full pr-4">
        <ArticleForm
        activeTab={activeTab}
          downArrow={downArrow}
          />
        </div>
        <div className="md:w-[1/3] md:block hidden">
          <ProductCard productDetails={productData} activities={activityData} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

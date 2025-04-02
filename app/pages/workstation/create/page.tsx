"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ValiderIcon from "@/assets/icons/valider-icon.png";
import filterIcon from "@/assets/icons/filter.png";
import { Copy, Pencil, Printer, Share2Icon } from "lucide-react";
import Image from "next/image";
import EntrepotForm from "@/components/entrepot/EntrepotForm";
import downArrow from "@/assets/icons/down-arrow.png"
import EntrepotCard from "@/components/entrepot/EntrepotCard";

const workstationPage = () => {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { id: "details", label: "Détails" },
    { id: "statut", label: "Statut de station de travail" },
    { id: "cout", label: "Coûts d'Exploitation" },

  ];
  const tabStyles = {
    container: "flex items-center justify-center border-b",
    tab: (isActive: boolean) =>
      `md:px-6 sm:px-4 w-full md:py-2.5 sm:py-1 md:text-sm sm:text-[10px] font-medium transition-colors relative text-center
      ${
        isActive
          ? "bg-[#023E8A] text-white"
          : "text-gray-600 hover:text-gray-800"
      }
      ${isActive ? "rounded-t-md" : ""}
      `,
    separator: "h-5 w-px bg-gray-200 mx-1",
    tabContent: "flex items-center justify-center space-x-2",
  };

  const Data = {
    nomDeEntrepot: "entrepôt 1",
    societe: "Devpro Solutions",
    reference: "2321",
    type: "Transit",
    statut: "Actif",
    categorie: "Entrepôt collectif",
    tel: "25-096-055",
    adresse: "B24, rue ibn arafa",        
    gouvernerat: "Monastir",        
    pays: "Tunisie",        
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
          Production/
          </div>
          <h1 className="md:text-xl font-bold text-[#383861] sm:text-[16px]">
          station de travail
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
            <EntrepotForm activeTab={activeTab} downArrow={downArrow} />
        </div>
        <div className="md:w-[1/3] md:block hidden">
            <EntrepotCard activities={activityData}  entrepotDetails={Data}/>
        </div>
      </div>
    </div>
  );
};

export default workstationPage;

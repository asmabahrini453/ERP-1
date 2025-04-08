"use client";

import { Copy, Pencil, Printer, Share2 } from "lucide-react";
import downArrow from "@/assets/icons/down-arrow.png";
import { useState } from "react";
import CollaboratorFiche from "@/components/collaborator/CollaboratorFiche";
import CollaboratorCard from "@/components/collaborator/CollaboratorCard";

const tabs = [
  { id: "generale", label: "Information Générales " },
  { id: "professional", label: "Information Professionnelles " },
  { id: "addressF", label: "Adresse De facturation" },
  { id: "addressL", label: "Adresse De Livraison" },
];

// Styles for the tabs
const tabStyles = {
  container: "flex items-center justify-start border-b",
  tab: (isActive: boolean) => `
    md:px-6 sm:px-4 md:py-2.5 sm:py-1 md:text-sm sm:text-[10px] font-medium transition-colors relative
    ${
      isActive ? "bg-[#023E8A] text-white" : "text-gray-600 hover:text-gray-800"
    }
    ${isActive ? "rounded-t-md" : ""}
  `,
  separator: "h-5 w-px bg-gray-200 mx-1",
  tabContent: "flex items-center space-x-2",
};

//  data for the card
const clientData = {
  nomDeFamille: "Bahrini",
  prenom: "Asma" , 
  description: "Description",
  reference: "40F103",
  type: "Entreprise",
  idFiscale: "000-555",
  activite: "IT",
  devise: "TND",
  condDePaiement: "Virement",
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

const ClientPage = () => {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="space-y-6 overflow-x-hidden  p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="md:text-sm text-muted-foreground sm:text-[12px]">
            Contact /
          </div>
          <h1 className="md:text-xl font-bold text-[#383861] sm:text-[16px]">
            Nouveau Fournisseur
          </h1>
        </div>

        <div className="flex items-center md:gap-4 sm:gap-1 sm:mt-1">
          <div className="flex items-center md:gap-2 sm:gap-1 cursor-pointer">
            {[Copy, Pencil, Printer, Share2].map((Icon, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center w-10 h-10 rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Nav content */}
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
        <CollaboratorFiche activeTab={activeTab} downArrow={downArrow} />
        </div>
        <div className="md:w-[1/3] md:block hidden">
        <CollaboratorCard collaboratorDetails={clientData} activities={activityData}/>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;

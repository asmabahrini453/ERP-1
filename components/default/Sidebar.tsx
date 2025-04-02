"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Box,
  FileText,
  BarChart,
  Users,
  Settings,
  LogOut,
  X,
  ChevronDown,
  RotateCcw,
  ClipboardList,
  Receipt,
  DollarSign,
  BarChart2,
  Table,
  Menu,
  CircleDollarSign,
  Banknote,
  Factory,
  BoxIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";


interface Section {
  id: string;
  icon: ReactNode;
  title: SectionTitle;
  options: (string | SectionOption)[];
}
type SectionTitle = string | { icon: ReactNode; text: string };

interface SectionOption {
  name: string;
  icon: ReactNode;
  subsections?: string[];
}

export function Sidebar() {
  const [openSheet, setOpenSheet] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: "dashboard",
      icon: <LayoutDashboard className="h-8 w-8"/>,
      title:{
        icon: <Menu className="h-6 w-6" />,
        text: "Acceuil",
      },
      options: ["Aperçu", "Analyses"],
    },
    {
      id: "achat",
      icon: <ShoppingCart  className="h-8 w-8" />,
      title: {
        icon: <ShoppingCart className="h-6 w-6" />,
        text: "Achat",
      },
      options: [
        {
          name: "Commandes achat",
          icon: <ClipboardList className="h-4 w-4" />,
          subsections: [
            "Informations de Commande",
            "Statut de la Commande",
            "Suivi de la Commande",
          ],
        },
        {
          name: "Demandes de Prix",
          icon: <DollarSign className="h-4 w-4" />,
          subsections: [
            "Informations de la Demande",
            "Réponses des Fournisseurs",
            "Statut de la Demande",
          ],
        },
        {
          name: "Factures d'Achat",
          icon: <Receipt className="h-4 w-4" />,
          subsections: ["Détails de la Facture", "Paiement", "Validation"],
        },
        {
          name: "Avoirs d'Achat",
          icon: <BarChart className="h-4 w-4" />,
          subsections: [
            "Informations de l'Avoir",
            "Raison de l'Avoir",
            "Statut de l'Avoir",
          ],
        },
        {
          name: "Retours d'Achat",
          icon: <RotateCcw className="h-4 w-4" />,
          subsections: [
            "Informations du Retour",
            "Statut du Retour",
            "Remboursement ou Échange",
          ],
        },
        { name: "Statistiques", icon: <BarChart2 className="h-4 w-4" />,
          subsections: [
           
          ],
         },
      ],
    },
    {
      id: "vente",
      icon: <DollarSign  className="h-8 w-8"/>,
      title: {
        icon: <DollarSign className="h-6 w-6" />,
        text: "Ventes",
      },
      options: [
        {
          name: "Commandes ventes",
          icon: <ClipboardList className="h-4 w-4" />,
          subsections: [
            "Informations de Commande",
            "Statut de la Commande",
            "Suivi de la Commande",
          ],
        },
        {
          name: "Demandes de Prix",
          icon: <DollarSign className="h-4 w-4" />,
          subsections: [
            "Informations de la Demande",
            "Réponses des Fournisseurs",
            "Statut de la Demande",
          ],
        },
        {
          name: "Factures de ventes",
          icon: <Receipt className="h-4 w-4" />,
          subsections: ["Détails de la Facture", "Paiement", "Validation"],
        },
        {
          name: "Avoirs de ventes",
          icon: <BarChart className="h-4 w-4" />,
          subsections: [
            "Informations de l'Avoir",
            "Raison de l'Avoir",
            "Statut de l'Avoir",
          ],
        },
        {
          name: "Retours de ventes",
          icon: <RotateCcw className="h-4 w-4" />,
          subsections: [
            "Informations du Retour",
            "Statut du Retour",
            "Remboursement ou Échange",
          ],
        },
        { name: "Statistiques", icon: <BarChart2 className="h-4 w-4" />,
          subsections: [
           
          ],
         },
      ],
    },
    {
      id: "production",
      icon: <Factory className="h-8 w-8" />,
      title: {
        icon: <Factory className="h-6 w-6" />,
        text: "Production",
      },
      options: [
        {
          name: "Commandes ventes",
          icon: <ClipboardList className="h-4 w-4" />,
          subsections: [
            "Informations de Commande",
            "Statut de la Commande",
            "Suivi de la Commande",
          ],
        },
        {
          name: "Demandes de Prix",
          icon: <DollarSign className="h-4 w-4" />,
          subsections: [
            "Informations de la Demande",
            "Réponses des Fournisseurs",
            "Statut de la Demande",
          ],
        },
        {
          name: "Factures de ventes",
          icon: <Receipt className="h-4 w-4" />,
          subsections: ["Détails de la Facture", "Paiement", "Validation"],
        },
        {
          name: "Avoirs de ventes",
          icon: <BarChart className="h-4 w-4" />,
          subsections: [
            "Informations de l'Avoir",
            "Raison de l'Avoir",
            "Statut de l'Avoir",
          ],
        },
        {
          name: "Retours de ventes",
          icon: <RotateCcw className="h-4 w-4" />,
          subsections: [
            "Informations du Retour",
            "Statut du Retour",
            "Remboursement ou Échange",
          ],
        },
        { name: "Statistiques", icon: <BarChart2 className="h-4 w-4" />,
          subsections: [
           
          ],
         },
      ],
    },
    {
      id: "stock",
      icon: <BoxIcon className="h-6 w-6" />,
      title: {
        icon: <BoxIcon className="h-6 w-6" />,
        text: "Stock",
      },
      options: ["Niveaux de stock", "Niveaux de stock", "Niveaux de stock"],
    },
    {
      id: "inventory",
      icon: <FileText  className="h-8 w-8" />,
      title:  {
        icon: <FileText className="h-6 w-6" />,
        text: "Inventaire",
      },
      options: ["Niveaux de stock", "Fournisseurs", "Alertes"],
    },
    {
      id: "users",
      icon: <Users className="h-8 w-8" />,
      title:{
        icon: <Users className="h-6 w-6" />,
        text: "Utilisateurs",
      },
      options: ["Fournisseurs", "Clients","Employés"],
    },
   
    {
      id: "stats",
      icon: <BarChart className="h-8 w-8" />,
      title: {
        icon: <BarChart className="h-6 w-6" />,
        text: "Statistiques",
      },
      options: ["Ventes", "Clients"],
    },
   
  ];

  return (
    <>
      <div className="w-20 bg-[#1E3A8A] flex flex-col items-center py-6 text-white shadow-lg">
        <nav className="flex-1 flex flex-col gap-8">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="icon"
              className="text-white p-3 rounded-lg"
              onClick={() =>
                setOpenSheet(section.id === openSheet ? null : section.id)
              }
              //i wanted to add a preview for the title when i hover with the cursor on top of an icon
              title={typeof section.title === "string" ? section.title : section.title.text} 

            >
              {section.icon}
            </Button>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white  p-3 rounded-lg"
            title="Paramètres"
          >
            <Settings className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white p-3 rounded-lg"
            title="Déconnexion"

          >
            <LogOut className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {openSheet && (
        <div className="w-72 bg-white p-6 shadow-xl transition-all duration-300">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <div className="flex justify-center items-center bg-[#1E3A8A] rounded-[8px] p-2 w-[80%] text-center">
              <h2 className="text-xl font-semibold text-white">
                {/*the title can hold both a string or an object so we must check the type in order to render it as a 
                proper REACTNODE elem to prevent error, so i created a func to check it */}
                {(() => {
                  //here we get the current section
                  const currentSection = sections.find(
                    (section) => section.id === openSheet
                  );
                  if (!currentSection) return null;

                  if (typeof currentSection.title === "string") {
                    return currentSection.title;
                  } else {
                    //if typeof(title)=== object
                    return (
                      <div className="flex items-center gap-2">
                        {currentSection.title.icon}
                        <span>{currentSection.title.text}</span>
                      </div>
                    );
                  }
                })()}
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpenSheet(null)}
            >
              <X className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Button>
          </div>
          <ul className="space-y-3">
            {sections
              .find((section) => section.id === openSheet)
              ?.options.map((option) => {
                const isObject = typeof option === "object";
                const optionObj = isObject ? (option as SectionOption) : null;
                const isOpen =
                  optionObj?.subsections && openDropdown === optionObj.name;

                return (
                  <li key={isObject ? optionObj!.name : (option as string)}>
                    <div
                      className="cursor-pointer p-3 flex justify-between items-center hover:bg-gray-100 rounded-lg transition-all"
                      onClick={() =>
                        optionObj?.subsections
                          ? setOpenDropdown(isOpen ? null : optionObj.name)
                          : null
                      }
                    >
                      <div className="flex items-center gap-3 text-gray-700">
                        {isObject && optionObj!.icon}
                        <span className="font-medium">
                          {isObject ? optionObj!.name : (option as string)}
                        </span>
                      </div>
                      {optionObj?.subsections && (
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                    {optionObj?.subsections && isOpen && (
                      <ul className="ml-8 mt-2 space-y-2 border-l-2 border-gray-200 pl-3">
                        {optionObj.subsections.map((sub) => (
                          <li
                            key={sub}
                            className="cursor-pointer p-2 text-gray-600 hover:bg-gray-200 rounded-md text-[12px]"
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
}

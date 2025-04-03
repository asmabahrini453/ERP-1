"use client"

import { Copy, Pencil,  Printer, Share2 } from "lucide-react"
import downArrow from "@/assets/icons/down-arrow.png"
import plus from "@/assets/icons/plus.png"
import Image from "next/image"
import { useState } from "react"
import EntrepriseStats from "@/components/entreprise/EntrepriseStats"
import EntrepriseFiche from "@/components/entreprise/EntrepriseFiche"
import EntrepriseProfileCard from "@/components/entreprise/EntrepriseProfileCard"
import Link from "next/link"

const tabs = [
  { id: "generale", label: "Information Générales " },
  { id: "comptable", label: "Information Comptables " },
  { id: "securite", label: "Sécurité" },
  { id: "supprimer", label: "Supprimer mon compte " },
  { id: "notifications", label: "Notifications " },
  { id: "abonnement", label: "Abonnement - Gestion d'abonnement" },
  { id: "services", label: "Services Tiers" },
]

// Styles for the tabs
const tabStyles = {
  container: "flex items-center justify-start border-b ",
  tab: (isActive: boolean) => `
    md:px-6 sm:px-4 md:py-2.5 sm:py-1 md:text-sm sm:text-[10px] font-medium transition-colors relative
    ${isActive ? "bg-[#023E8A] text-white" : "text-gray-600 hover:text-gray-800"}
    ${isActive ? "rounded-t-md" : ""}
  `,
  separator: "h-5 w-px bg-gray-200 mx-1",
  tabContent: "flex items-center space-x-2",
}

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
]

const EntrepriseProfile = () => {
  const [activeTab, setActiveTab] = useState("") 
  return (
    <div className="space-y-6 overflow-x-hidden  p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="md:text-sm text-muted-foreground sm:text-[12px]">Réglages /</div>
          <h1 className="md:text-xl font-bold text-[#383861] sm:text-[16px]">Nouvelle Entreprise</h1>
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

          <div className="border-l border mx-4 sm:mx-2 h-8" />
          
          <div className="flex justify-center items-center">
      <Link
        href="/pages/entreprise/create"
        className="bg-[#023E8A] text-[#F2F9F3] inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#0353A4] transition"
      >
        <Image src={plus} alt="validate icon" className="h-4 w-4" />
        <span className="hidden md:inline">Créer une entreprise</span>
      </Link>
    </div>

         
        </div>
      </div>

      <div className="flex flex-row w-full gap-4">
        <div className="md:w-[80%] w-full pr-4">
          <EntrepriseStats />

          {/* Form Content */}
          <div className="mt-6">
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
            <EntrepriseFiche activeTab={activeTab} downArrow={downArrow} />
          </div>
        </div>

        <div className="md:w-[1/3] md:block hidden">
          <EntrepriseProfileCard activities={activityData} />
        </div>
      </div>
    </div>
  )
}

export default EntrepriseProfile


"use client"
import { Pencil, ChevronDown, Info, Paperclip  } from "lucide-react"
import Avatar from "@/assets/images/asma.jpg"
import Image from "next/image"
import { useState } from "react"
interface ClientCardProps {
    clientDetails: {
    nomDeFamille: string
    prenom: string
    description: string
    reference: string
    type: string
    idFiscale: string
    activite: string
    devise: string
    condDePaiement: string
  }
  activities: Array<{
    user: string
    action: string
    date: string
    time: string
  }>
}

const ClientCard = ({
    clientDetails,
  activities,
}: ClientCardProps) => {

    
  const [activeTopTab, setActiveTopTab] = useState("details")
  const topTabs = [
    { id: "details", label: "Détails" , icon: <Info className="h-4 w-4" />},
    { id: "pieces-jointes", label: "Pièces jointes",icon: <Paperclip className="h-4 w-4" /> },
  ]

  return (
<div
      className="bg-white rounded-lg shadow-md border-[#383861] overflow-hidden"
      style={{ borderWidth: "0.3px" }}
    >
      {/* Top Nav */}
      <div className="flex w-full border-b">
        {topTabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium flex-1 justify-center ${
              activeTopTab === tab.id ? "bg-[#023E8A] text-white" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTopTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

{/* Image section */}
      <div className=" p-4 border-b">
        <div className="flex items-center justify-center mb-2">
          <span className="text-[16px] font-semibold text-[#747487]">Image</span>
          <svg
            className="h-4 w-4 ml-[10px] text-[#747487]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div className="flex justify-center p-2">
          <div className="relative w-32 h-32  flex items-center justify-center ">
            <Image
              src={Avatar}
              alt={clientDetails.description}
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Attributes section */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-center mb-2">
          <span className="text-[16px] font-semibold text-[#747487]">Attributs d'article</span>
          <svg
            className="h-4 w-4 text-[#747487] ml-[10px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div className="space-y-3">
          {Object.entries(clientDetails).map(([key, value], index, array) => {
            //  labels for each key
            const labels: Record<string, string> = {
                nomDeFamille: "Nom de famille",
                prenom: "Prénom" , 
                description: "Description",
                reference: "Référence",
                type: "Type",
                idFiscale: "Numéro d'identification fiscale",
                activite: "Activité",
                devise: "Devise",
                condDePaiement: "Conditions De Paiement",             
            }

            const isLastItem = index === array.length - 1

            return (
              <div key={key} className={`flex justify-between ${!isLastItem ? "border-b" : ""}`}>
                    <span className="text-sm text-gray-600">{labels[key]}</span>
                     <span className="text-sm font-medium">{value}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Commentaire*/}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center justify-center">
            <span className="text-[16px] font-semibold text-[#747487]">Commentaires</span>
            <ChevronDown className="h-4 w-4 ml-[10px] text-[#747487]" />
            </div>
       
            <Pencil className="h-4 w-4 ml-2 text-blue-600" />
          
        </div>
        <textarea
          className="w-full mt-2 p-2 text-sm border border-gray-200 rounded-md"
          rows={3}
          placeholder="Ajouter un commentaire..."
        ></textarea>
      </div>

      {/* Activity tracking */}
      <div className="p-4 bg-blue-50">
        <h3 className="text-sm font-bold text-blue-800 mb-3">Activité</h3>
        <ul className="space-y-2 text-xs">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start">
              <div className="h-2 w-2 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
              <span className="text-gray-700">
                {activity.user} {activity.action} - {activity.date} {activity.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ClientCard


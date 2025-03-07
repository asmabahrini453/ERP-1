"use client"
import { Pencil, Trash, ChevronDown, Info, Paperclip } from "lucide-react"
import Logo from "@/assets/images/logo-entreprise.png"
import Image from "next/image"
import { useState } from "react"

interface NewEntrepriseCardProps {
  activities: Array<{
    user: string
    action: string
    date: string
    time: string
  }>
}

const NewEntrepriseCard = ({ activities }: NewEntrepriseCardProps) => {
  const [activeTopTab, setActiveTopTab] = useState("generale")

  const topTabs = [
    { id: "details", label: "Détails", icon: <Info className="h-4 w-4" /> },
    { id: "pieces-jointes", label: "Pièces jointes", icon: <Paperclip className="h-4 w-4" /> },
  ]

  

  return (
    <div
      className="bg-transparent rounded-lg shadow-md border-[#383861] overflow-hidden"
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

      {/* Image Section */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-center mb-2">
          <span className="text-[16px] font-semibold text-[#747487]">Image</span>
          <ChevronDown className="h-4 w-4 ml-[10px] text-[#747487]" />
        </div>
        <div className="flex justify-center p-2">
          <div className="relative flex items-center justify-center w-40 h-40">
            <Image
              src={Logo || "/default-image.png"} 
              alt="Logo de l'entreprise"
              className="w-full h-full object-contain rounded-md"
              width={160}
              height={160}
            />

            <button
              className="absolute top-[2px] right-[.5px] bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
            >
              <Pencil className="h-5 w-5 text-[#023E8A]" />
            </button>

            <button
              className="absolute bottom-[2px] right-[.5px] bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
            >
              <Trash className="h-5 w-5 text-[#023E8A]" />
            </button>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
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

      {/* Activity Tracking */}
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

export default NewEntrepriseCard

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import info from "@/assets/icons/info.png"
import MatieresPremiere from "./MatieresPremiere"
import Operations from "./Operations"

interface NomenclatureFormProps {
  activeTab: string
  downArrow: any
}

const NomenclatureForm = ({ activeTab, downArrow }: NomenclatureFormProps) => {
  // Refs for each section
  const articleRef = useRef<HTMLDivElement>(null)
  const costRef = useRef<HTMLDivElement>(null)
  const matiereRef = useRef<HTMLDivElement>(null)
  const operationsRef = useRef<HTMLDivElement>(null)

  //scroll to active section when tab changes
  useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        article: articleRef,
        cost: costRef,
        matiere: matiereRef,
        operations: operationsRef,
      }

      const ref = sectionRefs[activeTab]
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    scrollToSection()
  }, [activeTab])

 
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({
    article: true,
    cost: false,
    matiere:false,
    operations:false
  })

  // Toggle section open/closed
  const toggleSection = (section: string) => {
    //to update the state of the section
    setIsOpen((prev) => ({
      ...prev, // Keep existing state for the other sections
      [section]: !prev[section], // Toggle the selected section
    }))
  }
  // State for switches
  const [activeBlocked, setActiveBlocked] = useState(false)
  const [defaultStock, setDefaultStock] = useState(false)

  return (
    <>
      {/* article */}
      <div ref={articleRef} id="article" className="bg-white rounded-lg shadow-md p-6 mb-6 border">
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px] cursor-pointer"
            onClick={() => toggleSection("article")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Article de production</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${isOpen.article ? "rotate-90" : "-rotate-90"}`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>

        {isOpen.article && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Article <span className="text-red-500">*</span>
                </label>
                <Image src={info || "/placeholder.svg"} alt="voir plus" />
              </div>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>AD08001</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UdM de l'article <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantité
                    <span className="text-red-500">*</span>
                  </label>
                  <Image src={info || "/placeholder.svg"} alt="voir plus" />
                </div>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prix unitaire <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Montant</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-20 mt-2 ">
              <div className="flex  justify-between items-center space-x-8  ">
                <span className="text-sm font-medium text-gray-700">Est Active</span>
                <Switch checked={activeBlocked} onCheckedChange={setActiveBlocked} className="shadow-md" />
              </div>
              <div className="flex items-center space-x-8">
                <span className="text-sm font-medium text-gray-700">EstDéfaut</span>
                <Switch checked={defaultStock} onCheckedChange={setDefaultStock} className="shadow-md" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/*Inventaire  */}
      <div ref={costRef} id="cost" className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]  cursor-pointer"
            onClick={() => toggleSection("cost")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Configuration des coûts</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${isOpen.cost ? "rotate-90" : "-rotate-90"}`}
            />
          </div>
          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.cost && (
          <div className="space-y-6 border p-[23px] rounded-[4px]">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Prix des Matériaux basé sur</label>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    name="prix"
                    value="Taux de Valorisation"
                    id="TV"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="prix"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Taux de Valorisation
                  </label>
                </div>
                <div className="relative">
                  <input type="radio" name="prix" value="Dernier Prix d'achat" id="PA" className="peer hidden" />
                  <label
                    htmlFor="PA"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Dernier Prix d'achat
                  </label>
                </div>
                <div className="relative">
                  <input type="radio" name="prix" value="Liste des prix" id="LP" className="peer hidden" />
                  <label
                    htmlFor="LP"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Liste des prix
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Devise
                  <span className="text-red-500">*</span>
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

      {/* Matières premières section */}
      <div ref={matiereRef}>
        <MatieresPremiere downArrow={downArrow} />
      </div>

      {/* Operations section */}
      <div ref={operationsRef}>
        <Operations downArrow={downArrow} />
      </div>
    </>
  )
}

export default NomenclatureForm


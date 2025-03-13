"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Pencil, Trash2, Plus, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface MatieresPremiereProps {
  downArrow: any
}

interface MaterialRow {
  id: number
  numero: number
  numeroSerie: string
  quantite: number
  udm: string
  prixUnitaire: number
  montant: number
}

const MatieresPremiere = ({ downArrow }: MatieresPremiereProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const [materials, setMaterials] = useState<MaterialRow[]>([
    {
      id: 1,
      numero: 1,
      numeroSerie: "Fils",
      quantite: 20,
      udm: "m",
      prixUnitaire: 10,
      montant: 200,
    },
  ])

  // State for editing
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Omit<MaterialRow, "id">>({
    numero: 0,
    numeroSerie: "",
    quantite: 0,
    udm: "",
    prixUnitaire: 0,
    montant: 0,
  })

  const toggleSection = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "quantite" || name === "prixUnitaire") {
      const quantite = name === "quantite" ? Number.parseFloat(value) : editForm.quantite
      const prixUnitaire = name === "prixUnitaire" ? Number.parseFloat(value) : editForm.prixUnitaire

      setEditForm({
        ...editForm,
        [name]: name === "quantite" || name === "prixUnitaire" ? Number.parseFloat(value) : value,
        montant: quantite * prixUnitaire,
      })
    } else {
      setEditForm({
        ...editForm,
        [name]: value,
      })
    }
  }

  const startEditing = (material: MaterialRow) => {
    setEditingId(material.id)
    setEditForm({
      numero: material.numero,
      numeroSerie: material.numeroSerie,
      quantite: material.quantite,
      udm: material.udm,
      prixUnitaire: material.prixUnitaire,
      montant: material.montant,
    })
  }

  // Save edits
  const saveEdit = (id: number) => {
    const updatedMaterials = materials.map((material) => (material.id === id ? { ...material, ...editForm } : material))

    setMaterials(updatedMaterials)
    setEditingId(null)
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null)
  }

  // Delete a material
  const deleteMaterial = (id: number) => {
    const updatedMaterials = materials.filter((material) => material.id !== id)
    setMaterials(updatedMaterials)
  }

  // Add a new material
  const addMaterial = () => {
    const newId = materials.length > 0 ? Math.max(...materials.map((m) => m.id)) + 1 : 1
    const newNumero = materials.length > 0 ? Math.max(...materials.map((m) => m.numero)) + 1 : 1

    const newMaterial: MaterialRow = {
      id: newId,
      numero: newNumero,
      numeroSerie: "",
      quantite: 0,
      udm: "",
      prixUnitaire: 0,
      montant: 0,
    }

    setMaterials([...materials, newMaterial])
    setEditingId(newId)
    setEditForm({
      numero: newNumero,
      numeroSerie: "",
      quantite: 0,
      udm: "",
      prixUnitaire: 0,
      montant: 0,
    })
  }

  return (
    <div id="matiere" className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-start flex-col mb-4">
        <div className="flex items-center justify-between w-full mb-[10px]">
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={toggleSection}>
            <h2 className="text-lg font-bold text-[#023E8A]">Matières premières</h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : "-rotate-90"}`}
            />
          </div>
          <Button onClick={addMaterial} className={`bg-[#3BCEAB] text-[#FFFFFF] ${!isOpen ? "hidden" : ""}`}>
            <Plus className="h-4 w-4 border rounded-full mr-2" />
            Ajouter une matière
          </Button>
        </div>
        <div className="border-l border mx-8 sm:mx-2 w-full" />
      </div>
      {isOpen && (
        <div className="border p-[23px] rounded-[4px]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    N°
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    N° de série de l'article
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Qté
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    UdM
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Prix unitaire(TND)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Montant(TND)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {materials.length > 0 ? (
                  materials.map((material) => (
                    <tr key={material.id}>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{material.numero}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        {editingId === material.id ? (
                          <Input
                            name="numeroSerie"
                            value={editForm.numeroSerie}
                            onChange={handleInputChange}
                            className="w-full p-1.5 text-sm"
                          />
                        ) : (
                          material.numeroSerie
                        )}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        {editingId === material.id ? (
                          <Input
                            name="quantite"
                            type="number"
                            value={editForm.quantite}
                            onChange={handleInputChange}
                            className="w-full p-1.5 text-sm"
                          />
                        ) : (
                          material.quantite
                        )}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        {editingId === material.id ? (
                          <Input
                            name="udm"
                            value={editForm.udm}
                            onChange={handleInputChange}
                            className="w-full p-1.5 text-sm"
                          />
                        ) : (
                          material.udm
                        )}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        {editingId === material.id ? (
                          <Input
                            name="prixUnitaire"
                            type="number"
                            value={editForm.prixUnitaire}
                            onChange={handleInputChange}
                            className="w-full p-1.5 text-sm"
                          />
                        ) : (
                          material.prixUnitaire
                        )}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        {editingId === material.id ? (
                          <Input
                            name="montant"
                            type="number"
                            value={editForm.montant}
                            disabled
                            className="w-full p-1.5 text-sm"
                          />
                        ) : (
                          material.montant
                        )}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          {editingId === material.id ? (
                            <>
                              <Button
                                onClick={() => saveEdit(material.id)}
                                className="bg-green-500 hover:bg-green-600 text-white h-8 w-8 p-0"
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button
                                onClick={cancelEdit}
                                className="bg-gray-500 hover:bg-gray-600 text-white h-8 w-8 p-0"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                onClick={() => startEditing(material)}
                                className="bg-[#023E8A] text-white h-8 w-8 p-0"
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                onClick={() => deleteMaterial(material.id)}
                                className="bg-red-500 hover:bg-red-600 text-white h-8 w-8 p-0"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="bg-gray-50 text-center">
                    <td colSpan={8} className="px-3 py-4 text-sm text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="mt-2">Aucune Donnée</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default MatieresPremiere


"use client"

import type React from "react"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import { Pencil, Trash2, Plus, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface OperationsProps {
  downArrow: any
}

// Define the type for an operation row
interface OperationRow {
  id: number
  numero: number
  operation: string
  stationTravail: string
  dureeOperation: string
  coutExploitation: number
}

const Operations = ({ downArrow }: OperationsProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const [avecOperations, setAvecOperations] = useState(false)
  const [transfererMateriel, setTransfererMateriel] = useState(false)
  const [fabricationType, setFabricationType] = useState("ordre") // "ordre" or "carte"

  // Operations data
  const [operations, setOperations] = useState<OperationRow[]>([])

  // State for editing
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Omit<OperationRow, "id">>({
    numero: 0,
    operation: "",
    stationTravail: "",
    dureeOperation: "",
    coutExploitation: 0,
  })

  const toggleSection = () => {
    setIsOpen(!isOpen)
  }

  // Start editing a row
  const startEditing = (operation: OperationRow) => {
    setEditingId(operation.id)
    setEditForm({
      numero: operation.numero,
      operation: operation.operation,
      stationTravail: operation.stationTravail,
      dureeOperation: operation.dureeOperation,
      coutExploitation: operation.coutExploitation,
    })
  }

  // Save edits
  const saveEdit = (id: number) => {
    const updatedOperations = operations.map((operation) =>
      operation.id === id ? { ...operation, ...editForm } : operation,
    )

    setOperations(updatedOperations)
    setEditingId(null)
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null)
  }

  // Delete an operation
  const deleteOperation = (id: number) => {
    const updatedOperations = operations.filter((operation) => operation.id !== id)
    setOperations(updatedOperations)
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditForm({
      ...editForm,
      [name]: name === "coutExploitation" ? Number.parseFloat(value) : value,
    })
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setEditForm({
      ...editForm,
      [name]: value,
    })
  }

  // Add a new operation
  const addOperation = () => {
    const newId = operations.length > 0 ? Math.max(...operations.map((o) => o.id)) + 1 : 1
    const newNumero = operations.length > 0 ? Math.max(...operations.map((o) => o.numero)) + 1 : 1

    const newOperation: OperationRow = {
      id: newId,
      numero: newNumero,
      operation: "",
      stationTravail: "",
      dureeOperation: "",
      coutExploitation: 0,
    }

    setOperations([...operations, newOperation])
    setEditingId(newId)
    setEditForm({
      numero: newNumero,
      operation: "",
      stationTravail: "",
      dureeOperation: "",
      coutExploitation: 0,
    })
  }

  return (
    <div id="operations" className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-start flex-col mb-4">
        <div className="flex items-center justify-between w-full mb-[10px]">
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={toggleSection}>
            <h2 className="text-lg font-bold text-[#023E8A]">Opérations</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : "-rotate-90"}`}
            />
          </div>
          <Button
            onClick={addOperation}
            className={`bg-[#3BCEAB] text-[#FFFFFF] ${!isOpen ? "hidden" : ""}`}
            disabled={!avecOperations}
          >
            <Plus className="h-4 w-4 border rounded-full mr-2" />
            Ajouter une opération
          </Button>
        </div>
        <div className="border-l border mx-8 sm:mx-2 w-full" />
      </div>
      {isOpen && (
        <div className="border p-[23px] rounded-[4px]">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Avec des Opérations</span>
              <Switch checked={avecOperations} onCheckedChange={setAvecOperations} className="shadow-md" />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Transférer du matériel contre</span>
              <Switch checked={transfererMateriel} onCheckedChange={setTransfererMateriel} className="shadow-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="radio"
                  name="fabrication"
                  value="ordre"
                  id="ordre"
                  className="peer hidden"
                  checked={fabricationType === "ordre"}
                  onChange={() => setFabricationType("ordre")}
                />
                <label
                  htmlFor="ordre"
                  className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                >
                  <span className="w-full text-center">Ordre de fabrication</span>
                </label>
              </div>
              <div className="relative">
                <input
                  type="radio"
                  name="fabrication"
                  value="carte"
                  id="carte"
                  className="peer hidden"
                  checked={fabricationType === "carte"}
                  onChange={() => setFabricationType("carte")}
                />
                <label
                  htmlFor="carte"
                  className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                >
                  <span className="w-full text-center">Carte de travail</span>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Opération(s)</label>
              </div>
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
                        Opération
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Station de travail
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Durée de l'Opération
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Coût d'Exploitation (TND)
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
                    {operations.length > 0 ? (
                      operations.map((operation) => (
                        <tr key={operation.id}>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{operation.numero}</td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {editingId === operation.id ? (
                              <Input
                                name="operation"
                                value={editForm.operation}
                                onChange={handleInputChange}
                                className="w-full p-1.5 text-sm"
                              />
                            ) : (
                              operation.operation
                            )}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {editingId === operation.id ? (
                              <Select
                                onValueChange={(value) => handleSelectChange("stationTravail", value)}
                                value={editForm.stationTravail}
                              >
                                <SelectTrigger className="h-9 text-sm">
                                  <SelectValue placeholder="Sélectionner" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="station1">Station 1</SelectItem>
                                  <SelectItem value="station2">Station 2</SelectItem>
                                  <SelectItem value="station3">Station 3</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              operation.stationTravail
                            )}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {editingId === operation.id ? (
                              <Input
                                name="dureeOperation"
                                value={editForm.dureeOperation}
                                onChange={handleInputChange}
                                className="w-full p-1.5 text-sm"
                              />
                            ) : (
                              operation.dureeOperation
                            )}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {editingId === operation.id ? (
                              <Input
                                name="coutExploitation"
                                type="number"
                                value={editForm.coutExploitation}
                                onChange={handleInputChange}
                                className="w-full p-1.5 text-sm"
                              />
                            ) : (
                              operation.coutExploitation
                            )}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              {editingId === operation.id ? (
                                <>
                                  <Button
                                    onClick={() => saveEdit(operation.id)}
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
                                    onClick={() => startEditing(operation)}
                                    className="bg-[#023E8A] text-white h-8 w-8 p-0"
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    onClick={() => deleteOperation(operation.id)}
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
                        <td colSpan={7} className="px-3 py-4 text-sm text-gray-500">
                          <div className="flex flex-col items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
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
          </div>
        </div>
      )}
    </div>
  )
}

export default Operations


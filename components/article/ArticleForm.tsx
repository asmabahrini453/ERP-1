"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

interface ArticleFormProps {
  activeTab: string;
  downArrow: any;
}

const ArticleForm = ({ activeTab, downArrow }: ArticleFormProps) => {
  // Refs for each section
  const detailsRef = useRef<HTMLDivElement>(null);
  const achatRef = useRef<HTMLDivElement>(null);
  const ventesRef = useRef<HTMLDivElement>(null);
  const stockRef = useRef<HTMLDivElement>(null);
  const taxeRef = useRef<HTMLDivElement>(null);
  const qualiteRef = useRef<HTMLDivElement>(null);
  const inventaireRef = useRef<HTMLDivElement>(null);
  const champsRef = useRef<HTMLDivElement>(null);

  //scroll to active section when tab changes
  useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        details: detailsRef,
        achat: achatRef,
        ventes: ventesRef,
        stock: stockRef,
        taxe: taxeRef,
        qualite: qualiteRef,
        inventaire: inventaireRef,
        champs: champsRef,
      };

      const ref = sectionRefs[activeTab];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToSection();
  }, [activeTab]);

  // State to manage open/closed sections
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({
    details: true, // Details section open by default
    achat: false,
  });

  // Toggle section open/closed
  const toggleSection = (section: string) => {
    //to update the state of the section
    setIsOpen((prev) => ({
      ...prev, // Keep existing state for the other sections
      [section]: !prev[section], // Toggle the selected section
    }));
  };
  // State for switches
  const [maximizeStock, setMaximizeStock] = useState(false);
  const [stockBlocked, setStockBlocked] = useState(false);
  const [purchaseBlocked, setPurchaseBlocked] = useState(false);
  const [salesBlocked, setSalesBlocked] = useState(false);
  //----------------------------------------------------------------------------------------------------
  //champs
  //custom
  const [customFields, setCustomFields] = useState<
    Array<{
      id: string;
      name: string;
      value: string;
      important: boolean;
    }>
  >([
    {
      id: "1",
      name: "Référence externe",
      value: "REF-2023-001",
      important: true,
    },
    {
      id: "2",
      name: "Numéro de lot",
      value: "LOT-A12345",
      important: false,
    },
  ]);

  //  new custom field form
  const [isAddingField, setIsAddingField] = useState(false);
  const [newField, setNewField] = useState({
    name: "",
    value: "",
    important: false,
  });

  // Function to add a new custom field
  const addCustomField = () => {
    if (newField.name.trim() === "") return;

    setCustomFields([
      ...customFields,
      {
        id: Date.now().toString(),
        name: newField.name,
        value: newField.value,
        important: newField.important,
      },
    ]);

    // Reset form
    setNewField({
      name: "",
      value: "",
      important: false,
    });
    setIsAddingField(false);
  };

  // Function to delete a custom field
  const deleteCustomField = (id: string) => {
    setCustomFields(customFields.filter((field) => field.id !== id));
  };

  // Function to updaete a custom field
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    value: "",
    important: false,
  });

  const startEditing = (field: {
    id: string;
    name: string;
    value: string;
    important: boolean;
  }) => {
    setEditingField(field.id);
    setEditForm({
      name: field.name,
      value: field.value,
      important: field.important,
    });
  };

  const saveEdit = (id: string) => {
    setCustomFields(
      customFields.map((field) =>
        field.id === id
          ? {
              ...field,
              name: editForm.name,
              value: editForm.value,
              important: editForm.important,
            }
          : field
      )
    );
    setEditingField(null);
  };

  return (
    <>
      {/* Détails */}
      <div
        ref={detailsRef}
        id="details"
        className="bg-white rounded-lg shadow-md p-6 mb-6 border"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px] cursor-pointer"
            onClick={() => toggleSection("details")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Détails</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.details ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>

        {isOpen.details && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                N° de série <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Matière première</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Code Catégorie de l'article{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                N° de souche <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destinée à <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Achat</option>
              </select>
            </div>
            <div className="flex items-center space-x-20 ">
              <div className="flex items-center space-x-8  ">
                <span className="text-sm font-medium text-gray-700">
                  Bloqué
                </span>
                <Switch
                  checked={stockBlocked}
                  onCheckedChange={setStockBlocked}
                  className="shadow-md"
                />
              </div>
              <div className="flex items-center space-x-8">
                <span className="text-sm font-medium text-gray-700">
                  Maximiser Stock
                </span>
                <Switch
                  checked={maximizeStock}
                  onCheckedChange={setMaximizeStock}
                  className="shadow-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/*Achat */}
      <div
        ref={achatRef}
        id="achat"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px] cursor-pointer"
            onClick={() => toggleSection("achat")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Achat</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300  ${
                isOpen.achat ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>

        {isOpen.achat && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coût unitaire
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prix d'achat
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Qté sur commande actuelle
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Remise
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center space-x-20">
              <span className="text-sm font-medium text-gray-700">Bloqué</span>
              <Switch
                checked={purchaseBlocked}
                onCheckedChange={setPurchaseBlocked}
              />
            </div>
          </div>
        )}
      </div>

      {/*ventes  */}
      <div
        ref={ventesRef}
        id="ventes"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]"
            onClick={() => toggleSection("ventes")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Ventes</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.ventes ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full " />
        </div>
        {isOpen.ventes && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prix unitaire <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prix de vente par défaut
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                % marge sur vente <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UDM par défaut à la vente{" "}
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Achat</option>
              </select>
            </div>
            <div className="flex items-center space-x-20">
              <span className="text-sm font-medium text-gray-700">
                Ventes bloqué
              </span>
              <Switch
                checked={salesBlocked}
                onCheckedChange={setSalesBlocked}
              />
            </div>
          </div>
        )}
      </div>

      {/*Stock  */}
      <div
        ref={stockRef}
        id="stock"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]"
            onClick={() => toggleSection("stock")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Stocks</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.stock ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.stock && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                N° d'emplacement en stock{" "}
                <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Matière première</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock de sécurité <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      {/*taxe  */}
      <div
        ref={taxeRef}
        id="taxe"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]"
            onClick={() => toggleSection("taxe")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Taxe</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.taxe ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.taxe && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Modèle de taxe <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>TVA (19%)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Validé à partir de <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      {/*qualité  */}
      <div
        ref={qualiteRef}
        id="qualite"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]"
            onClick={() => toggleSection("qualite")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Qualité</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.qualite ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.qualite && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description d'erreur <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phase d'erreur
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phase de réparation
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      {/*Inventaire  */}
      <div
        ref={inventaireRef}
        id="inventaire"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]  cursor-pointer"
            onClick={() => toggleSection("inventaire")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Paramétrage de l'inventaire
            </h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.inventaire ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.inventaire && (
          <div className="space-y-6 border p-[23px] rounded-[4px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Durée de conservation en jours
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date dern. inventaire
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Proch. date début d'inventaire
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Proch. date fin d'inventaire
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Poids par unité
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  UdM de poids
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="kg">Kilogramme (kg)</option>
                  <option value="g">Gramme (g)</option>
                  <option value="lb">Livre (lb)</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Méthode de valorisation
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    name="valorisation"
                    value="fifo"
                    id="fifo"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="fifo"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    FIFO
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="valorisation"
                    value="lifo"
                    id="lifo"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="lifo"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    LIFO
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="valorisation"
                    value="moyenne"
                    id="moyenne"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="moyenne"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Moyenne Mobile
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Type de requete de matériaux par défaut
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    name="type-requete"
                    value="achat"
                    id="achat"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="achat"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Achat
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="type-requete"
                    value="production"
                    id="production"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="production"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Production
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="type-requete"
                    value="transfert"
                    id="transfert"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="transfert"
                    className="flex items-center justify-center p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-emerald-400 peer-checked:bg-emerald-400 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100"
                  >
                    Transfert de matériel
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Champs Personnalisés */}
      <div
        ref={champsRef}
        id="champs"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div className="flex items-center justify-between w-full mb-[10px]">
            <div
              className="flex items-center justify-center gap-2  cursor-pointer"
              onClick={() => toggleSection("champs")}
            >
              <h2 className="text-lg font-bold text-[#023E8A]">
                Champs Personnalisés
              </h2>
              <Image
                src={downArrow || "/placeholder.svg"}
                alt="voir plus"
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen.champs ? "rotate-90" : "-rotate-90"
                }`}
              />
            </div>
            <Button
              onClick={() => setIsAddingField(true)}
              className={`bg-[#3BCEAB] text-[#FFFFFF] ${
                !isOpen.champs ? "hidden" : ""
              }`}
            >
              <Plus className="h-4 w-4 border rounded-full" />
              Créer un champ
            </Button>
          </div>
          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.champs && (
          <>
            {isAddingField && (
              <div className="mb-6 p-4 border rounded-md bg-gray-50">
                <h4 className="text-sm font-medium mb-3">
                  Nouveau champ personnalisé
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Nom du champ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={newField.name}
                      onChange={(e) =>
                        setNewField({ ...newField, name: e.target.value })
                      }
                      className="w-full p-2 text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Contenu
                    </label>
                    <input
                      type="text"
                      value={newField.value}
                      onChange={(e) =>
                        setNewField({ ...newField, value: e.target.value })
                      }
                      className="w-full p-2 text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex items-center col-span-2">
                    <input
                      type="checkbox"
                      id="important-field"
                      checked={newField.important}
                      onChange={(e) =>
                        setNewField({
                          ...newField,
                          important: e.target.checked,
                        })
                      }
                      className="mr-2"
                    />
                    <label
                      htmlFor="important-field"
                      className="text-xs text-gray-600"
                    >
                      Important
                    </label>
                  </div>
                  <div className="col-span-2 flex space-x-2">
                    <Button
                      onClick={addCustomField}
                      className="bg-[#023E8A] w-40 text-white"
                    >
                      Ajouter
                    </Button>
                    <Button
                      onClick={() => setIsAddingField(false)}
                      variant="outline"
                      className="border-gray-300 w-40 hover:bg-white"
                    >
                      Annuler
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Champ personnalisé
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contenu
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Important
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {customFields.length > 0 ? (
                    customFields.map((field) => (
                      <tr key={field.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {editingField === field.id ? (
                            <input
                              type="text"
                              value={editForm.name}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  name: e.target.value,
                                })
                              }
                              className="w-full p-1.5 text-sm border border-gray-300 rounded-md"
                            />
                          ) : (
                            field.name
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingField === field.id ? (
                            <input
                              type="text"
                              value={editForm.value}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  value: e.target.value,
                                })
                              }
                              className="w-full p-1.5 text-sm border border-gray-300 rounded-md"
                            />
                          ) : (
                            field.value
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {editingField === field.id ? (
                            <Switch
                              checked={editForm.important}
                              onCheckedChange={(checked) =>
                                setEditForm({ ...editForm, important: checked })
                              }
                            />
                          ) : (
                            <Switch
                              checked={field.important}
                              disabled={editingField !== field.id}
                            />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            {editingField === field.id ? (
                              <>
                                <Button
                                  onClick={() => saveEdit(field.id)}
                                  className="bg-green-500 hover:bg-green-600 text-white h-8 w-8 p-0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </Button>
                                <Button
                                  onClick={() => setEditingField(null)}
                                  className="bg-gray-500 hover:bg-gray-600 text-white h-8 w-8 p-0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
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
                                </Button>
                              </>
                            ) : (
                              <>
                                <Button
                                  onClick={() => startEditing(field)}
                                  className="bg-[#023E8A] text-white h-8 w-8 p-0"
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button
                                  onClick={() => deleteCustomField(field.id)}
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
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                      >
                        Aucun champ personnalisé. Cliquez sur "Créer" pour
                        ajouter un nouveau champ.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ArticleForm;

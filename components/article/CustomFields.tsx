"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Pencil,
  Copy,
  EllipsisVertical,
  Trash,
  ShieldOffIcon,
} from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";

interface CustomFieldsProps {
  downArrow: any;
  isOpen: boolean;
  toggleSection: () => void;
}

const CustomFields = ({
  downArrow,
  isOpen,
  toggleSection,
}: CustomFieldsProps) => {
  //custom fields
  const [customFields, setCustomFields] = React.useState<
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
  const [isAddingField, setIsAddingField] = React.useState(false);
  const [newField, setNewField] = React.useState({
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

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [deleteFieldId, setDeleteFieldId] = React.useState<string | null>(null);
  const [deleteSuccessMessage, setDeleteSuccessMessage] = React.useState<
    string | null
  >(null);

  // Function to handle opening the delete confirmation drawer
  const confirmDelete = (id: string) => {
    setDeleteFieldId(id);
    setIsDrawerOpen(true);
  };

  // Function to delete a custom field
  const deleteCustomField = () => {
    if (deleteFieldId) {
      setCustomFields(
        customFields.filter((field) => field.id !== deleteFieldId)
      );
      setDeleteFieldId(null);
      setDeleteSuccessMessage("Champ supprimé avec succès");
      setTimeout(() => {
        setDeleteSuccessMessage(null);
      }, 3000);
      setIsDrawerOpen(false);
    }
  };

  // Function for editing fields
  const [editingField, setEditingField] = React.useState<string | null>(null);
  const [editForm, setEditForm] = React.useState({
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

  // Function to duplicate a custom field
  const duplicateCustomField = (id: string) => {
    const fieldToDuplicate = customFields.find((field) => field.id === id);
    if (!fieldToDuplicate) return; // If no field is found, exit

    // Create a new field with the same data but a new ID
    const duplicatedField = {
      ...fieldToDuplicate,
      id: Date.now().toString(), // New unique ID
    };

    // Add the duplicated field to the state
    setCustomFields([...customFields, duplicatedField]);
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
    <div id="champs" className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-start flex-col mb-4">
        <div className="flex items-center justify-between w-full mb-[10px]">
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={toggleSection}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Champs Personnalisés
            </h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <Button
            onClick={() => setIsAddingField(true)}
            className={`bg-[#3BCEAB] text-[#FFFFFF] ${!isOpen ? "hidden" : ""}`}
          >
            <Plus className="h-4 w-4 border rounded-full" />
            Créer un champ
          </Button>
        </div>
        <div className="border-l border mx-8 sm:mx-2 w-full" />
      </div>
      {isOpen && (
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
                                className="bg-transparent hover:bg-white text-muted-foreground border hover:border-green-900"
                              >
                                <Pencil className="h-4 w-4 hover:text-green-500" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => confirmDelete(field.id)}
                              >
                                <Trash className="h-5 w-5 text-red-500" />
                              </Button>
                              <Button
                                onClick={() => duplicateCustomField(field.id)}
                                className="bg-transparent hover:bg-white text-muted-foreground border hover:border-blue-900"
                              >
                                <Copy className="h-4 w-4 hover:text-blue-500" />
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
                    <div className="flex flex-col items-center gap-3">
                      <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
                        <ShieldOffIcon size={40} className="stroke-primary" />
                      </div>
                      <div className="flex flex-col gap-1 text-center">
                        <p className="font-bold">Aucun champ personnalisé.</p>
                        <p className="text-sm text-muted-foreground">
                        Cliquer sur "Créer" pour créer un nouveau champs.                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                
                )}
              </tbody>
            </table>
          </div>
          {/* Drawer Component */}
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Confirmer la suppression</DrawerTitle>
              </DrawerHeader>
              <p className="px-6">
                Êtes-vous sûr de vouloir supprimer ce champ personnalisé ?
              </p>
              <DrawerFooter className="flex justify-end gap-2 p-6">
                <Button
                  onClick={() => setIsDrawerOpen(false)}
                  variant="outline"
                >
                  Annuler
                </Button>
                <Button
                  onClick={deleteCustomField}
                  className="bg-red-500 text-white"
                >
                  Supprimer
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          {/* Success message */}
          {deleteSuccessMessage && (
            <div className="bg-green-100 text-green-700 text-sm p-2 rounded-md mt-4">
              {deleteSuccessMessage}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CustomFields;

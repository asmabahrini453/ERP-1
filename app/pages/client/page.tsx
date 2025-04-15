"use client";

import { collaboratorData } from "@/app/data";

import { Collaborator, columns } from "@/components/collaborator/columns";
import CreateCollaboratorSheet from "@/components/collaborator/modals/create-collaborator";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";

import { Copy, PlusCircle, Printer, Share2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ClientList = () => {
  // State for collaborators
  const [collaborators, setCollaborators] =
    useState<Collaborator[]>(collaboratorData);

  const handleEdit = (updated: Collaborator) => {
    setCollaborators((prev) =>
      prev.map((col) => (col.id === updated.id ? updated : col))
    );
  };

  const handleDelete = (collaboratorToDelete: Collaborator) => {
    setCollaborators((prev) =>
      prev.filter((col) => col.id !== collaboratorToDelete.id)
    );
  };


  const [sheetOpen, setSheetOpen] = useState(false)
   // Handle creating a new client
   const handleCreate = (newClient: Collaborator) => {
    setCollaborators((prev) => [...prev, newClient])
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="md:text-sm text-muted-foreground sm:text-[12px]">
            Utilisateurs /
          </div>
          <h1 className="text-2xl text-[#383861] font-bold">
            Liste des clients
          </h1>
          <p className="text-muted-foreground mt-1">
            Gérez vos clients et leurs détails
          </p>
        </div>

        <div className="flex items-center md:gap-4 sm:gap-1 sm:mt-1">
          <div className="flex items-center md:gap-2 sm:gap-1 cursor-pointer">
            {[Copy, Printer, Share2Icon].map((Icon, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center w-10 h-10 rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>

          <div className="border-l border mx-4 sm:mx-2 h-8" />

       
          <div className="flex md:gap-4 sm:gap-1 sm:mr-2">
            <Button
              className="bg-[#023E8A] hover:bg-[#3BCEAB] text-[#F2F9F3] flex items-center"
              onClick={() => setSheetOpen(true)}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Nouveau client</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <DataTable
          data={collaborators}
          columns={columns(handleEdit, handleDelete)}
          filterKey="nomDeFamille"
          filterPlaceholder="Filtrer par Nom..."
          columnLabels={{
            reference: "Référence",
            nomDeFamille: "Nom de famille",
            prenom: "Prénom",
            idFiscale: "N° d'ID fiscale",
            type: "Type",
            activite: "Activité",
            dateAjout: "Date d'ajout",
          }}
        />
      </div>

        {/* Sheet component for creating a new client */}
        <CreateCollaboratorSheet open={sheetOpen} onOpenChange={setSheetOpen} onSave={handleCreate} />
    </div>

    
  );
};

export default ClientList;

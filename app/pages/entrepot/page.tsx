"use client";

import { entrepotData } from "@/app/data";
import { DataTable } from "@/components/data-table";
import { columns, Entrepot } from "@/components/entrepot/columns";
import CreateEntrepotSheet from "@/components/entrepot/modals/create-entrepot";
import LoadingScreen from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { useLenis } from "@/hooks/useLenis";
import { Copy, PlusCircle, Printer, Share2Icon } from "lucide-react";
import { useEffect, useState } from "react";

const EntrepotList = () => {
  const [loading, setLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const [entrepots, setEntrepots] = useState<Entrepot[]>(entrepotData);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleEdit = (updated: Entrepot) => {
    setEntrepots((prev) =>
      prev.map((entrepot) => (entrepot.id === updated.id ? updated : entrepot))
    );
  };

  const handleDelete = (entrepotToDelete: Entrepot) => {
    setEntrepots((prev) =>
      prev.filter((entrepot) => entrepot.id !== entrepotToDelete.id)
    );
  };

  const handleCreate = (newEntrepot: Entrepot) => {
    setEntrepots((prev) => [...prev, newEntrepot]);
  };

  return (
    <>
      {loading && <LoadingScreen isVisible={loading} />}
      {!loading && (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="md:text-sm text-muted-foreground sm:text-[12px]">
                Stock /
              </div>
              <h1 className="text-2xl text-[#383861] font-bold">
                Liste d'Entrepôts
              </h1>
              <p className="text-muted-foreground mt-1">
                Gérez vos entrepôts et leurs détails
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
                  <span className="hidden md:inline">Nouveau entrepôt</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <DataTable
              data={entrepots}
              columns={columns(handleEdit, handleDelete)}
              filterKey="nomDeEntrepot"
              filterPlaceholder="Filtrer par Nom de l'entrepôt..."
              columnLabels={{
                reference: "Réference",
                nomDeEntrepot: "Nom de l'entrepôt",
                type: "Type",
                categorie: "Catégorie",
                statut: "Statut",
              }}
            />
          </div>

          <CreateEntrepotSheet
            open={sheetOpen}
            onOpenChange={setSheetOpen}
            onSave={handleCreate}
          />
        </div>
      )}
    </>
  );
};

export default EntrepotList;

"use client";

import { ofData } from "@/app/data";
import { DataTable } from "@/components/data-table";
import { columns as ofColumns } from "@/components/OF/columns";
import { Button } from "@/components/ui/button";
import {
  Copy,
  PlusCircle,
  Printer,
  Share2Icon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { OF } from "@/components/OF/columns";

const OfList = () => {
  const [of, setOf] = useState<OF[]>(ofData);

  const handleEdit = (updated: OF) => {
    setOf(prev =>
      prev.map(item => (item.id === updated.id ? updated : item))
    );
  };

  const handleDelete = (ofToDelete: OF) => {
    setOf(prev => prev.filter(item => item.id !== ofToDelete.id));
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="md:text-sm text-muted-foreground sm:text-[12px]">
            Production /
          </div>
          <h1 className="text-2xl text-[#383861] font-bold">
            Liste des Ordres de fabrication
          </h1>
          <p className="text-muted-foreground mt-1">
            Gérez vos ordres de fabrication et leurs détails
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

          <div className="border-l mx-4 sm:mx-2 h-8" />

          <div className="flex md:gap-4 sm:gap-1 sm:mr-2">
            <Link href="/pages/ordre_fabrication/create">
              <Button className="bg-[#023E8A] hover:bg-[#3BCEAB] text-[#F2F9F3] flex items-center">
                <PlusCircle className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Nouveau ordre de fabrication</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <DataTable
          data={of}
          columns={ofColumns(handleEdit, handleDelete)}
          filterKey="titre"
          filterPlaceholder="Filtrer par titre..."
          columnLabels={{
            numSerie: "N° de Série",
            titre:"Titre" ,
            numNomenclature: "N° Nomenclature",
            quantiteProduire: "Quantite à produire",
            dateDebutReel: "Date début réel",
            dateFinReelle: "Date fin réel",

          }}
        />
      </div>
    </div>
  );
};

export default OfList;

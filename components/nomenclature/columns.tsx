"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "../ui/badge";
import { DataTableRowActions } from "./data-table-row-actions";

 
export type Nomenclature = {
    id: string;
    codeArticle: string;
    quantite: number;
    stockActuel: number;
    prixUnitaire: number;
    montant: number;
    devise: string;
    avecDesOperations: string;
};

export const columns = (
  onEdit: (updated: Nomenclature) => void,
  onDelete:(deleted:Nomenclature) =>void
): ColumnDef<Nomenclature>[] => [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <div className="flex justify-center">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
    size: 40,
  },
  {
    accessorKey: "codeArticle",
    header: () => <div className="text-left">Code article</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("codeArticle")}</div>
    ),
    size: 120, //w-[120px] 
  },
  {
    accessorKey: "quantite",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-right w-full"
        >
          Quantité <ArrowUpDown className="ml-2 h-4 w-4 inline" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantite: number = row.getValue("quantite");
      return <div className="text-center font-medium">{quantite}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("quantite"));
      const valueB = Number.parseFloat(rowB.getValue("quantite"));
      return valueA - valueB;
    },
    size: 80,
  },
 
  {
    accessorKey: "stockActuel",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-right w-full"
        >
          Stock actuel <ArrowUpDown className="ml-2 h-4 w-4 inline" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const stockActuel: number = row.getValue("stockActuel");
      return <div className="text-center font-medium">{stockActuel}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("stockActuel"));
      const valueB = Number.parseFloat(rowB.getValue("stockActuel"));
      return valueA - valueB;
    },
    size: 80,
  },
  {
    accessorKey: "prixUnitaire",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-right w-full"
        >
         Prix unitaire <ArrowUpDown className="ml-2 h-4 w-4 inline" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const prixUnitaire: number = row.getValue("prixUnitaire");
      return <div className="text-center font-medium">{prixUnitaire}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("prixUnitaire"));
      const valueB = Number.parseFloat(rowB.getValue("prixUnitaire"));
      return valueA - valueB;
    },
    size: 80,
  },

  
  {
    accessorKey: "montant",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-right w-full"
        >
         Montant <ArrowUpDown className="ml-2 h-4 w-4 inline" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const montant: number = row.getValue("montant");
      return <div className="text-center font-medium">{montant}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("montant"));
      const valueB = Number.parseFloat(rowB.getValue("montant"));
      return valueA - valueB;
    },
    size: 80,
  },



  {
    accessorKey: "devise",
    header: () => <div className="text-left">Devise</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("devise")}</div>
    ),
    size: 80, 
  },


  {
    accessorKey: "avecDesOperations",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Avec opérations <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="justify-left  flex">
        <Badge variant="outline" className="font-normal justify-center items-center flex w-[50%]">
          {row.getValue("avecDesOperations")}
        </Badge>
      </div>
    ),
    size: 100,
  },

 

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <DataTableRowActions row={row} onEdit={onEdit} onDelete={onDelete} />
    ),
    size: 50,
  }, 
];
"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "../ui/badge";
import { DataTableRowActions } from "./data-table-row-actions";

export type OF = {
  id: string;
  numSerie: string;
  titre: string;
  quantiteProduire: number;
  numNomenclature: string;
  dateDebutReel: Date;
  dateFinReelle: Date;
};

export const columns = (
  onEdit: (updated: OF) => void,
  onDelete:(deleted:OF) =>void
): ColumnDef<OF>[] => [
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
    accessorKey: "numSerie",
    header: () => <div className="text-left">N° de Série</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("numSerie")}</div>
    ),
    size: 120, //w-[120px] 
  },

  {
    accessorKey: "titre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Titre <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize font-medium">{row.getValue("titre")}</div>
    ),
    minSize: 200,
    maxSize: 300,
  },


  {
    accessorKey: "numNomenclature",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-right w-full"
        >
          N° Nomenclature<ArrowUpDown className="ml-2 h-4 w-4 inline" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const numNomenclature: number = row.getValue("numNomenclature");
      return <div className="text-center font-medium">{numNomenclature}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("numNomenclature"));
      const valueB = Number.parseFloat(rowB.getValue("numNomenclature"));
      return valueA - valueB;
    },
    size: 80,
  },

  {
    accessorKey: "quantiteProduire",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-right w-full"
        >
          Quantite à produire <ArrowUpDown className="ml-2 h-4 w-4 inline" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantiteProduire: number = row.getValue("quantiteProduire");
      return <div className="text-center font-medium">{quantiteProduire}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("quantiteProduire"));
      const valueB = Number.parseFloat(rowB.getValue("quantiteProduire"));
      return valueA - valueB;
    },
    size: 80,
  },

  
  {
    accessorKey: "dateDebutReel",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Date début réel
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const field = row.getValue("dateDebutReel") as Date;
      return <div>{field.toLocaleDateString("fr-FR")}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.dateDebutReel);
      const dateB = new Date(rowB.original.dateDebutReel);
      return dateA.getTime() - dateB.getTime();
    },
  },
  


  {
    accessorKey: "dateFinReelle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Date fin réel
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const field = row.getValue("dateFinReelle") as Date;
      return <div>{field.toLocaleDateString("fr-FR")}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.dateFinReelle);
      const dateB = new Date(rowB.original.dateFinReelle);
      return dateA.getTime() - dateB.getTime();
    },
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
"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "../ui/badge";
import { DataTableRowActions } from "./data-table-row-actions";

export type Entrepot = {
  id: string;
  reference: string;
  nomDeEntrepot: string;
  type: string;
  categorie: string;
  statut: string;
};

export const columns = (
  onEdit: (updated: Entrepot) => void,
  onDelete:(deleted:Entrepot) =>void
): ColumnDef<Entrepot>[] => [
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
    accessorKey: "reference",
    header: () => <div className="text-left">Réference</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("reference")}</div>
    ),
    size: 120, //w-[120px] 
  },

  {
    accessorKey: "nomDeEntrepot",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Nom de l'entrepôt <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize font-medium">{row.getValue("nomDeEntrepot")}</div>
    ),
    minSize: 200,
    maxSize: 300,
  },

  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Type <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        <Badge variant="outline" className="font-normal">
          {row.getValue("type")}
        </Badge>
      </div>
    ),
    size: 150,
  },
  {
    accessorKey: "categorie",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Catégorie <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        <Badge variant="outline" className="font-normal">
          {row.getValue("categorie")}
        </Badge>
      </div>
    ),
    size: 150,
  },

  {
    accessorKey: "statut",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
         Statut <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const statut = row.getValue("statut") as string;
      return (
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
            ${statut === "Actif" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {statut}
        </div>
      );
    },
    
    minSize: 200,
    maxSize: 300,
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
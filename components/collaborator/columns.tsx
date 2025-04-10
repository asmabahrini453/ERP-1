"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "../ui/badge";
import { DataTableRowActions } from "./data-table-row-actions";


export type Collaborator = {
  id: string;
  nomDeFamille: string;
  prenom: string;
  reference: string;
  idFiscale: string;
  type: string;
  activite: string;
  dateAjout: Date;

};

export const columns = (
  onEdit: (updated: Collaborator) => void,
  onDelete:(deleted:Collaborator) =>void
): ColumnDef<Collaborator>[] => [
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
    header: () => <div className="text-left">Référence</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("reference")}</div>
    ),
    size: 120, //w-[120px] 
  },
  {
    accessorKey: "nomDeFamille",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 hover:bg-transparent"
          >
            Nom de famille <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("nomDeFamille")}</div>
    ),
    minSize: 200,
    maxSize: 300, 
  },

  {
    accessorKey: "prenom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Prénom <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize font-medium">{row.getValue("prenom")}</div>
    ),
    minSize: 200,
    maxSize: 300,
  },
  {
    accessorKey: "idFiscale",
    header: () => <div className="text-left">N° d'ID fiscale</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("idFiscale")}</div>
    ),
    size: 120, //w-[120px] 
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
    accessorKey: "activite",
    header: ({ column }) => {
      return (
        <div >
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 hover:bg-transparent"
          >
            Activité 
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
        <div className="font-medium">{row.getValue("activite")}</div>

      ),
    size: 90,
  }
,
{
    accessorKey: "dateAjout",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Date d'ajout
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const field = row.getValue("dateAjout") as Date;
      return <div>{field.toLocaleDateString("fr-FR")}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.dateAjout);
      const dateB = new Date(rowB.original.dateAjout);
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
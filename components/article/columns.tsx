"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "../ui/badge";
import { DataTableRowActions } from "./data-table-row-actions";

export type Article = {
  id: string;
  serieNbr: string;
  title: string;
  category: string;
  unitCost: number;
  salePrice: number;
  stock: number;
  unit: string;
};

export const columns: ColumnDef<Article>[] = [
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
    accessorKey: "serieNbr",
    header: () => <div className="text-left">N° de Série</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("serieNbr")}</div>
    ),
    size: 120,
  },

  {
    accessorKey: "title",
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
      <div className="capitalize font-medium">{row.getValue("title")}</div>
    ),
    minSize: 200,
    maxSize: 300,
  },

  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Categorie <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        <Badge variant="outline" className="font-normal">
          {row.getValue("category")}
        </Badge>
      </div>
    ),
    size: 150,
  },

  {
    accessorKey: "unitCost",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 hover:bg-transparent"
          >
            Coût unitaire <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const unitCost = Number.parseFloat(row.getValue("unitCost"));
      const formatted = new Intl.NumberFormat("fr-TN", {
        style: "currency",
        currency: "TND",
      }).format(unitCost);

      return <div className="text-right font-medium">{formatted}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("unitCost"));
      const valueB = Number.parseFloat(rowB.getValue("unitCost"));
      return valueA - valueB;
    },
    size: 120,
  },

  {
    accessorKey: "salePrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-right w-full"
        >
          Prix de vente
          <ArrowUpDown className="ml-2 h-4 w-4 inline" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const salePrice = Number.parseFloat(row.getValue("salePrice"));
      const formatted = new Intl.NumberFormat("fr-TN", {
        style: "currency",
        currency: "TND",
      }).format(salePrice);

      // Format to match the screenshot (e.g., "49,990 DT")
      const simplifiedFormat = formatted
        .replace(/TND/g, "DT")
        .replace(/\s/g, "")
        .replace(/\./, ",");

      return <div className="text-right font-medium">{simplifiedFormat}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("salePrice"));
      const valueB = Number.parseFloat(rowB.getValue("salePrice"));
      return valueA - valueB;
    },
    size: 120,
  },

  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent text-right w-full"
        >
          Stock <ArrowUpDown className="ml-2 h-4 w-4 inline" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const stock: number = row.getValue("stock");
      return <div className="text-center font-medium">{stock}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const valueA = Number.parseFloat(rowA.getValue("stock"));
      const valueB = Number.parseFloat(rowB.getValue("stock"));
      return valueA - valueB;
    },
    size: 80,
  },

  {
    accessorKey: "unit",
    header: () => <div className="text-center">UdM</div>,
    cell: ({ row }) => (
      <div className="text-center uppercase">{row.getValue("unit")}</div>
    ),
    size: 70,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row, table }) => (
      <div className="flex justify-end">
        <DataTableRowActions
          row={row}
        />
      </div>
    ),
    size: 50,
  }
];

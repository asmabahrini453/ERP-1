"use client"; 

import { ColumnDef } from "@tanstack/react-table"; 
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { Checkbox } from "@/components/ui/checkbox"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; 
import { Badge } from "../ui/badge";


export type Article = {
  id: string;
  serieNbr:string;
  title:string;
  category:string;
  unitCost:number ;
  salePrice: number;
  stock:number;
  unit:string;
  
};


export const columns: ColumnDef<Article>[] = [
  {
    id: "select", // Column for row selection checkboxes
    header: ({ table }) => {
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() || // Check if all rows are selected
            (table.getIsSomePageRowsSelected() && "indeterminate") // Show indeterminate state if some rows are selected
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} // Toggle all rows selection
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()} // Check if the row is selected
          onCheckedChange={(value) => row.toggleSelected(!!value)} // Toggle row selection
          aria-label="Select row"
        />
      );
    },
    enableSorting: false, // Disable sorting for this column
    enableHiding: false, // Prevent hiding this column
  },



  {
    accessorKey: "serieNbr", 
    header: () => "N° de Série",
    cell: ({ row }) =>  <div>{row.getValue("serieNbr")}</div>, 
  },


  {
    accessorKey: "title", 
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} // Toggle sorting order
        >
          Titre <ArrowUpDown className="ml-2 h-4 w-4" /> {/* Sorting icon */}
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("title")}</div>, // Display Title with capitalization
  },

  {
    accessorKey: "category", 
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
        >
          categorie <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) =>
     <div className="capitalize">
      <Badge variant='outline'>
      {row.getValue("category")}
        </Badge>
      
    </div>, 
  },
 

  {
    accessorKey: "unitCost",
    header: () => <div className="text-right">Coût Unitaire</div>,
    cell: ({ row }) => {
      const unitCost = parseFloat(row.getValue("unitCost")); // Convert amount to float
      const formatted = new Intl.NumberFormat("fr-TN", {
        style: "currency",
        currency: "TND",
      }).format(unitCost); 
  
      return <div className="text-right font-medium">{formatted}</div>; 
    },
  },
  
  {
    accessorKey: "salePrice",
    header: () => <div className="text-right">Prix de Vente</div>,
    cell: ({ row }) => {
      const salePrice = parseFloat(row.getValue("salePrice"));
      const formatted = new Intl.NumberFormat("fr-TN", {
        style: "currency",
        currency: "TND",
      }).format(salePrice);
  
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  

  {
    accessorKey: "stock",
    header: () => <div className="text-right">Stock</div>,
    cell: ({ row }) =>  <div>{row.getValue("stock")}</div>, 
  },


  {
    accessorKey: "unit", 
    header: () => "Unité de vente",
    cell: ({ row }) => <div className="uppercase">{row.getValue("unit")}</div>, 
  },

  {
    id: "actions", // Column for action buttons
    enableHiding: false, // Prevent hiding this column
    cell: ({ row }) => {
      const payment = row.original; // Get the entire row data

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" /> 
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

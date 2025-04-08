"use client"

import * as React from "react"
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, Search } from "lucide-react"
import { columns, type Collaborator } from "./columns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DataTablePagination } from "../data-table-pagination"

// Define the props for DataTable, which expects an array of article objects
interface DataTableProps {
  data: Collaborator[],
  onEdit: (updated: Collaborator) => void; 
  onDelete : (deleted:Collaborator)=> void ; 
}

export function DataTable({ data, onEdit,onDelete }: DataTableProps) {
  // State variables for table functionalities
  const [sorting, setSorting] = React.useState<SortingState>([]) // Manages sorting state
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]) // Manages filters
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
    // Hide these columns by default to match the screenshot
    unitCost: true,
    unit: true,
  }) // Manages visibility of columns
  const [rowSelection, setRowSelection] = React.useState({}) // Manages row selection

  // Create table instance using useReactTable hook
  const table = useReactTable({
    data,
    columns: columns(onEdit, onDelete), 
        onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      {/* Search and filter controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Filtrer par titre..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
            className="pl-9 w-full"
          />
        </div>

        {/* Dropdown menu for selecting visible columns */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colonnes <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                let headerText

                switch (column.id) {
                  case "serieNbr":
                    headerText = "N° de Série"
                    break
                  case "title":
                    headerText = "Titre"
                    break
                  case "category":
                    headerText = "Categorie"
                    break
                  case "unitCost":
                    headerText = "Coût Unitaire"
                    break
                  case "salePrice":
                    headerText = "Prix de Vente"
                    break
                  case "stock":
                    headerText = "Stock"
                    break
                  case "unit":
                    headerText = "Unité de vente"
                    break
                  default:
                    headerText = column.id
                }

                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {headerText}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table layout */}
      <div className="border rounded-md">
        <div className="relative w-full">
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="bg-gray-50">
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="px-4 py-3 text-left font-medium text-gray-700">
                        {header.isPlaceholder
                          ? null
                          : header.column.columnDef.header &&
                            React.createElement(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="px-4 py-3 whitespace-nowrap">
                          {cell.column.columnDef.cell &&
                            React.createElement(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center text-gray-500">
                      Aucun résultat.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Pagination controls */}
      <div className="mt-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  )
}
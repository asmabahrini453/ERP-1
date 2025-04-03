"use client"

import type { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  pageSizeOptions?: number[]
}

export function DataTablePagination<TData>({
  table,
  pageSizeOptions = [10, 20, 30, 40, 50],
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-4 gap-4 bg-white rounded-md border">
      <div className="text-sm text-muted-foreground order-2 sm:order-1">
        {table.getFilteredSelectedRowModel().rows.length > 0 ? (
          <span className="font-medium">{table.getFilteredSelectedRowModel().rows.length}</span>
        ) : (
          "0"
        )}{" "}
        sur <span className="font-medium">{table.getFilteredRowModel().rows.length}</span> ligne(s) sélectionnée(s)
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4 order-1 sm:order-2">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium hidden sm:block">Lignes</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[60px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top" className="min-w-[60px]">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium whitespace-nowrap hidden sm:inline">
            Page <span className="font-bold">{table.getState().pagination.pageIndex + 1}</span> sur{" "}
            <span className="font-bold">{table.getPageCount()}</span>
          </span>
          <span className="text-sm font-medium whitespace-nowrap sm:hidden">
            <span className="font-bold">{table.getState().pagination.pageIndex + 1}</span>/{table.getPageCount()}
          </span>

          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="icon"
              className="hidden h-7 w-7 p-0 sm:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Aller à la 1ère page</span>
              <ChevronsLeft className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Page précédente</span>
              <ChevronLeft className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Page suivante</span>
              <ChevronRight className="h-3 w-3" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden h-7 w-7 p-0 sm:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Aller à la dernière page</span>
              <ChevronsRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


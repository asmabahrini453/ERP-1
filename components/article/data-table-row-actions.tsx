// Fixed DataTableRowActions Component
"use client";

import * as React from "react";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Copy, Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import EditDialog from "@/components/modals/edit-modal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DeleteDialog from "@/components/modals/delete-modal";
import { ArticleFormSchema } from "@/lib/validations/schema";
import { Article } from "./columns";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (updated: Article) => void;
  onDelete: (deleted: Article) => void;
}

export function DataTableRowActions<TData>({ row, onEdit, onDelete }: DataTableRowActionsProps<TData>) {
  const [dialogContent, setDialogContent] = React.useState<React.ReactNode | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = React.useState<boolean>(false);
  const { toast } = useToast();

  // Validate the row.original data against the schema per row
  const article = ArticleFormSchema.parse(row.original);

  const handleEditClick = () => {
    setDialogContent(
      <EditDialog
        articleData={article}
        onSave={(updatedArticle) => {
          onEdit(updatedArticle); // Call parent handler
          setDialogContent(null); // Close dialog after save
        }}
      />
    );
  };
  
  const handleDelete = () => {
    onDelete(article);
    toast({
      title: "Success",
      description: "Article supprimé avec succès!",
    });
        setShowDeleteDialog(false);
  };
  
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Dupliquer tâche
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Voir les détails
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild onClick={handleEditClick}>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Modifier les détails
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setShowDeleteDialog(true);
            }}
            className="text-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Supprimer les détails
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {dialogContent && <DialogContent>{dialogContent}</DialogContent>}
      <DeleteDialog
        isOpen={showDeleteDialog}
        showActionToggle={setShowDeleteDialog}
        onDelete={handleDelete}
      />
    </Dialog>
  );
}
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

import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Collaborator } from "./columns";
import { useToast } from "@/hooks/use-toast";
import { collaboratorFormSchema } from "@/lib/validations/schema";
import DeleteDialog from "./modals/delete-modal";
import EditDialog from "./modals/edit-modal";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (updated: Collaborator) => void;
  onDelete: (deleted: Collaborator) => void;
}

export function DataTableRowActions<TData>({ row, onEdit, onDelete }: DataTableRowActionsProps<TData>) {
  const [dialogContent, setDialogContent] = React.useState<React.ReactNode | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = React.useState<boolean>(false);
  const { toast } = useToast();

  // Validate the row.original data against the schema per row
  const collaborator = collaboratorFormSchema.parse(row.original);

  const handleEditClick = () => {
    setDialogContent(
      <EditDialog
      collaboratorData={collaborator}
        onSave={(updatedCollaborator) => {
          onEdit(updatedCollaborator); // Call parent handler
          setDialogContent(null); // Close dialog after save
        }}
      />
    );
  };
  
  const handleDelete = () => {
    onDelete(collaborator);
    toast({
      title: "Success",
      description: "Collaborateur supprimé avec succès!",
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
          <DropdownMenuSeparator />
         {/*  <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Dupliquer tâche
          </DropdownMenuItem> 
          */}
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
          <DropdownMenuSeparator />
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
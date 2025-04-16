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
import {Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Workstation } from "./columns";
import { workstationSchema } from "@/lib/validations/schema";
import EditDialog from "./modals/edit-modal";
import DeleteDialog from "./modals/delete-modal";


interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (updated: Workstation) => void;
  onDelete: (deleted: Workstation) => void;
}

export function DataTableRowActions<TData>({ row, onEdit, onDelete }: DataTableRowActionsProps<TData>) {
  const [dialogContent, setDialogContent] = React.useState<React.ReactNode | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = React.useState<boolean>(false);
  const { toast } = useToast();

  const workstation = workstationSchema.parse(row.original);

  const handleEditClick = () => {
    setDialogContent(
      <EditDialog
        workstationData={workstation}
        onSave={(updatedEntrepot) => {
          onEdit(updatedEntrepot); 
          setDialogContent(null);
        }}
      />
    );
  };
  
  const handleDelete = () => {
    onDelete(workstation);
    toast({
      title: "Success",
      description: "station de travail supprimé avec succès!",
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
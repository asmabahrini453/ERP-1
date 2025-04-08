import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type DeleteProps = {
  isOpen: boolean;
  showActionToggle: (open: boolean) => void;
  onDelete: () => void;
};

export default function DeleteDialog({
  isOpen,
  showActionToggle,
  onDelete,
}: DeleteProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={showActionToggle}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action est irréversible. Vous êtes sur le point de supprimer le collaborateur.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={() => {
              onDelete(); // Call the onDelete function when confirmed
              // No need to call showActionToggle here as it's handled in handleDelete
            }}
          >
            Supprimer
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
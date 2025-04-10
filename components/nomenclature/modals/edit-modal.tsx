"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  nomenclatureFormSchema,
  nomenclatureFormValues,
  ops,
} from "@/lib/validations/schema";
import { Nomenclature } from "../columns";

interface EditDialogProps {
  nomenclatureData?: nomenclatureFormValues;
  onSave: (updated: Nomenclature) => void;
}

const EditDialog = ({ nomenclatureData, onSave }: EditDialogProps) => {
  const { toast } = useToast();

  //define the edit form
  const editForm = useForm<nomenclatureFormValues>({
    resolver: zodResolver(nomenclatureFormSchema),
    defaultValues: nomenclatureData || {
      codeArticle: "",
      quantite: 0,
      stockActuel: 0,
      prixUnitaire: 0,
      montant: 0,
      devise: "",
      avecDesOperations: "NON",
    },
  });

  function onSubmit(data: nomenclatureFormValues) {
    const updatedNomenclature: Nomenclature = {
      ...data,
      id: nomenclatureData?.id ?? "",
    };
    onSave(updatedNomenclature);

    toast({
      title: "Succès",
      description: "Nomenclature a été mis à jour avec succès",
    });
  }

  return (
    <div className=" max-w-md ">
      <DialogHeader className="flex items-start mb-6">
        <DialogTitle className="text-xl section-title ">
          Modifier les détails du Nomenclature
        </DialogTitle>
      </DialogHeader>

      <div className="max-h-[440px] overflow-y-auto p-1">
        <Form {...editForm}>
          <form
            onSubmit={editForm.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FormField
              control={editForm.control}
              name="codeArticle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Code article
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Code article"
                      className="h-10 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="quantite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Quantité
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Quantité"
                      className="h-10 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="stockActuel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Stock actuel
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Stock actuel"
                      className="h-10 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="prixUnitaire"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Prix Unitaire
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Prix Unitaire"
                      className="h-10 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="montant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Montant
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Montant"
                      className="h-10 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="devise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Devise
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Devise"
                      className="h-10 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="avecDesOperations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                  Avec des opérations
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10 rounded-md">
                        <SelectValue placeholder="Veuillez choisir une option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ops.map((op, index) => (
                        <SelectItem key={index} value={op}>
                          {op}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 mt-6 bg-slate-900 hover:bg-slate-800 text-white rounded-md"
            >
              Mettre à jour
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditDialog;
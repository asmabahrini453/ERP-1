"use client";
import {
  categoriesEntrepot,
  entrepotFormValues,
  entrepotSchema,
  type,
} from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
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
import { Entrepot } from "../columns";

interface EditDialogProps {
  entrepotData?: entrepotFormValues;
  onSave: (updated: Entrepot) => void;
}

const EditDialog = ({ entrepotData, onSave }: EditDialogProps) => {
  const { toast } = useToast();

  //define the edit form
  const editForm = useForm<entrepotFormValues>({
    resolver: zodResolver(entrepotSchema),
    defaultValues: entrepotData || {
      reference: "",
      nomDeEntrepot: "",
      type: "Transit",
      categorie: "Entrepôt collectif",
      statut: "Actif",
    },
  });

  function onSubmit(data: entrepotFormValues) {
    console.log(data);

    const updatedEntrepot: Entrepot = {
      ...data,
      id: entrepotData?.id ?? "",
    };
    onSave(updatedEntrepot);

    toast({
      title: "Succès",
      description: "Entrepôt a été mis à jour avec succès",
    });
  }

  return (
    <div className=" max-w-md ">
      <DialogHeader className="flex items-start mb-6">
        <DialogTitle className="text-xl section-title ">
          Modifier les détails de l'entrepôt
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
              name="reference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Réference
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Réference"
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
              name="nomDeEntrepot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Nom de l'entrepôt
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nom de l'entrepôt"
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Categorie
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10 rounded-md">
                        <SelectValue placeholder="Veuillez choisir un type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {type.map((t, i) => (
                        <SelectItem key={i} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="categorie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Catégorie
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10 rounded-md">
                        <SelectValue placeholder="Veuillez choisir un type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categoriesEntrepot.map((t, i) => (
                        <SelectItem key={i} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
  control={editForm.control}
  name="statut"
  render={({ field }) => (
    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
      <div className="space-y-0.5">
        <FormLabel className="text-base">Statut</FormLabel>
        <p className="text-sm text-muted-foreground">
          {field.value === "Actif"
            ? "L'entrepôt est actif"
            : "L'entrepôt est inactif"}
        </p>
      </div>
      <FormControl>
        <Switch
          checked={field.value === "Actif"}
          onCheckedChange={(checked) =>
            field.onChange(checked ? "Actif" : "Inactif")
          }
        />
      </FormControl>
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

"use client";
import {
  workstationFormValues,
  workstationSchema,
  workstationtype,
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
import { Workstation } from "../columns";

interface EditDialogProps {
  workstationData?: workstationFormValues;
  onSave: (updated: Workstation) => void;
}

const EditDialog = ({ workstationData, onSave }: EditDialogProps) => {
  const { toast } = useToast();

  //define the edit form
  const editForm = useForm<workstationFormValues>({
    resolver: zodResolver(workstationSchema),
    defaultValues: workstationData || {
      nom: "",
      capacite:0,
      heures:0,
      type: "Assemblage",
      statut: "Actif",

   
    },
  });

  function onSubmit(data: workstationFormValues) {
    console.log(data);

    const updatedWorkstation: Workstation = {
      ...data,
      id: workstationData?.id ?? "",
    };
    onSave(updatedWorkstation);

    toast({
      title: "Succès",
      description: "Station de travail a été mis à jour avec succès",
    });
  }

  return (
    <div className=" max-w-md ">
      <DialogHeader className="flex items-start mb-6">
        <DialogTitle className="text-xl section-title ">
          Modifier les détails du station de travail
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
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                  Nom
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nom"
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
              name="capacite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium"> Capacité de travail</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" className="h-10 rounded-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
<FormField
              control={editForm.control}
              name="heures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">  Total des Heures Travaillées</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" className="h-10 rounded-md" {...field} />
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
                  Type
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
                      {workstationtype.map((t, i) => (
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

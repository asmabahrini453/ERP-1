"use client";

import {
  workstationFormValues,
  workstationSchema,
  workstationtype,
} from "@/lib/validations/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";

interface CreateWorkstationSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (newWorkstation: workstationFormValues) => void;
}

const CreateWorkstationSheet = ({
  open,
  onOpenChange,
  onSave,
}: CreateWorkstationSheetProps) => {
  const { toast } = useToast();

  const form = useForm<workstationFormValues>({
    resolver: zodResolver(workstationSchema),
    defaultValues: {
      id: "",
      nom: "",
      capacite: 0,
      heures: 0,
      type: "Assemblage",
      statut: "Actif",
    },
  });

  const onSubmit = (data: workstationFormValues) => {
   
  
    onSave(data);
  

    toast({
      title: "Succès",
      description: "Station de travail créée avec succès.",
    });

    form.reset();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl section-title">
            Créer une station de travail
          </SheetTitle>
          <SheetDescription>
            Remplissez les détails pour créer une nouvelle station de travail
          </SheetDescription>
        </SheetHeader>

        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nom de la station"
                        className="h-10 rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="capacite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Capacité</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        className="h-10 rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="heures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total des heures travaillées</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        className="h-10 rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-10 rounded-md">
                          <SelectValue placeholder="Sélectionnez un type" />
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
                control={form.control}
                name="statut"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Statut</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        {field.value === "Actif"
                          ? "La station est active"
                          : "La station est inactive"}
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <SheetFooter className="mt-6 flex flex-col sm:flex-row gap-2">
          <Button
            type="submit"
            className="w-full bg-[#023E8A] hover:bg-[#023E8A]/90 text-white"
            onClick={form.handleSubmit(onSubmit)}
          >
            Créer la station
          </Button>

          <SheetClose asChild>
            <Link href="/pages/workstation/create">
              <Button variant="outline" className="w-full">
                Formulaire complet
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CreateWorkstationSheet;

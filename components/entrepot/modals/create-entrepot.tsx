"use client";

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
import {
  categoriesEntrepot,
  entrepotFormValues,
  entrepotSchema,
  type,
} from "@/lib/validations/schema";

interface CreateEntrepotSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (newEntrepot: entrepotFormValues) => void;
}

const CreateEntrepotSheet = ({
  open,
  onOpenChange,
  onSave,
}: CreateEntrepotSheetProps) => {
  const { toast } = useToast();

  const form = useForm<entrepotFormValues>({
    resolver: zodResolver(entrepotSchema),
    defaultValues: {
      id: "",
      reference: "",
      nomDeEntrepot: "",
      type: "Transit",
      statut: "Actif",
      categorie: "Entrepôt collectif",
    },
  });

  const onSubmit = (data: entrepotFormValues) => {
    onSave(data);

    toast({
      title: "Succès",
      description: "Entrepôt créé avec succès.",
    });

    form.reset();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl section-title">
            Créer un nouvel entrepôt
          </SheetTitle>
          <SheetDescription>
            Remplissez les détails pour créer un entrepôt
          </SheetDescription>
        </SheetHeader>

        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="reference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Référence</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Réf. entrepôt"
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
                name="nomDeEntrepot"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de l'entrepôt</FormLabel>
                    <FormControl>
                      <Input
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
                        {type.map((t, i) => (
                          <SelectItem key={i} value={t}>
                            {t || "Non défini"}
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
                          ? "L'entrepôt sera actif"
                          : "L'entrepôt sera inactif"}
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

              <FormField
                control={form.control}
                name="categorie"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catégorie</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-10 rounded-md">
                          <SelectValue placeholder="Sélectionnez une catégorie" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categoriesEntrepot.map((cat, i) => (
                          <SelectItem key={i} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
            Créer l'entrepôt
          </Button>

          <SheetClose asChild>
            <Link href="/pages/entrepot/create">
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

export default CreateEntrepotSheet;

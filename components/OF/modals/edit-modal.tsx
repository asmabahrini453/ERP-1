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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  nomenclatureFormSchema,
  nomenclatureFormValues,
  ofFormSchema,
  ofFormValues,
  ops,
} from "@/lib/validations/schema";
import { OF } from "../columns";

interface EditDialogProps {
  ofData?: ofFormValues;
  onSave: (updated: OF) => void;
}

const EditDialog = ({ ofData, onSave }: EditDialogProps) => {
  const { toast } = useToast();

  //define the edit form
  const editForm = useForm<ofFormValues>({
    resolver: zodResolver(ofFormSchema),
    defaultValues: ofData || {
      numSerie: "",
      titre: "",
      quantiteProduire: 0,
      numNomenclature: "",
      dateDebutReel: new Date(),
      dateFinReelle: new Date(),
    },
  });

  function onSubmit(data: ofFormValues) {
    const updatedOf: OF = {
      ...data,
      id: ofData?.id ?? "",
    };
    onSave(updatedOf);

    toast({
      title: "Succès",
      description: "Ordre de fabrication a été mis à jour avec succès",
    });
  }

  return (
    <div className=" max-w-md ">
      <DialogHeader className="flex items-start mb-6">
        <DialogTitle className="text-xl section-title ">
          Modifier les détails de l'ordre de fabrication
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
              name="numSerie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    N° de Série{" "}
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
              name="titre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre</FormLabel>
                  <FormControl>
                    <Input placeholder="Titre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="quantiteProduire"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantité à Produire</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Quantité" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

         
            <FormField
              control={editForm.control}
              name="numNomenclature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>N° de Nomenclature</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="N° de Nomenclature"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          
            <FormField
              control={editForm.control}
              name="dateDebutReel"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date Début Réelle</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Choisissez une date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="dateFinReelle"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date Fin Réelle</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Choisissez une date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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

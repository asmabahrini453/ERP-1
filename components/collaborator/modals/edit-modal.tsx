"use client"
import {  type ArticleFormValues, categories, collaboratorFormSchema, collaboratorFormValues, types } from "@/lib/validations/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Collaborator } from "../columns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns";


interface EditDialogProps {
  collaboratorData?: collaboratorFormValues, 
   onSave: (updated: Collaborator) => void;
 }

const EditDialog = ({ collaboratorData , onSave}: EditDialogProps) => {

  const { toast } = useToast()

  //define the edit form
  const editForm = useForm<collaboratorFormValues>({
    resolver: zodResolver(collaboratorFormSchema),
    defaultValues: collaboratorData || {
      nomDeFamille: "",
      prenom: "",
      reference: "",
      idFiscale: "",
      type: "Entreprise",
      activite: "",
      dateAjout: new Date("2025-04-01"),

    },
  })

  function onSubmit(data: collaboratorFormValues) {
    console.log(data)

    const updatedCollaborator: Collaborator={
      ...data,
      id:collaboratorData?.id ?? "" ,
    };
    onSave(updatedCollaborator);

    toast({
      title: "Succès",
      description: "Collaborateur a été mis à jour avec succès",
    })
    
  }

  return (
    <div className=" max-w-md ">
      <DialogHeader className="flex items-start mb-6">
        <DialogTitle className="text-xl section-title ">Modifier les détails du collaborateur</DialogTitle>
      </DialogHeader>

      <div className="max-h-[440px] overflow-y-auto p-1">
        <Form {...editForm}>
          <form onSubmit={editForm.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={editForm.control}
              name="nomDeFamille"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Nom de famille</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Entrez le nom de famille" className="h-10 rounded-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
              name="prenom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Prénom</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Entrez le prénom" className="h-10 rounded-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
              control={editForm.control}
              name="idFiscale"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">N° d'identification fiscale</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Entrez le N° d'identification fiscale" className="h-10 rounded-md" {...field} />
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
                  <FormLabel className="text-base font-medium">Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-10 rounded-md">
                        <SelectValue placeholder="Veuillez choisir un type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {types.map((type, index) => (
                        <SelectItem key={index} value={type}>
                          {type}
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
              name="activite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Activité</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Unité de mesure" className="h-10 rounded-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


<FormField
              control={editForm.control}
              name='dateAjout'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Date d'ajout</FormLabel>
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
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='end'>
                      <Calendar
                        mode='single'
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


            <Button type="submit" className="w-full h-12 mt-6 bg-slate-900 hover:bg-slate-800 text-white rounded-md">
              Mettre à jour
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default EditDialog


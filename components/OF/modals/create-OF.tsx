"use client"

import { ofFormSchema, type ofFormValues } from "@/lib/validations/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import type { OF } from "../columns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

interface CreateOFSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (newOF: OF) => void
}

const CreateOFSheet = ({ open, onOpenChange, onSave }: CreateOFSheetProps) => {
  const { toast } = useToast()

  const createForm = useForm<ofFormValues>({
    resolver: zodResolver(ofFormSchema),
    defaultValues: {
      id:"",
      numSerie: "",
      titre: "",
      quantiteProduire: 0,
      numNomenclature: "",
      dateDebutReel: new Date(),
      dateFinReelle: new Date(),
    },
  })

  function onSubmit(data: ofFormValues) {
    const newOF: OF = {
      ...data,
    }

    onSave(newOF)

    toast({
      title: "Succès",
      description: "Ordre de fabrication a été créé avec succès",
    })

    createForm.reset({
      id:"",
      numSerie: "",
      titre: "",
      quantiteProduire: 0,
      numNomenclature: "",
      dateDebutReel: new Date(),
      dateFinReelle: new Date(),
    })
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl section-title">Créer un nouvel ordre de fabrication</SheetTitle>
          <SheetDescription>Remplissez les détails de base pour créer un nouvel ordre de fabrication</SheetDescription>
        </SheetHeader>

        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-1">
          <Form {...createForm}>
            <form onSubmit={createForm.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={createForm.control}
                name="numSerie"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">N° de Série</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Entrez le numéro de série"
                        className="h-10 rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="titre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Titre</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Entrez le titre" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="numNomenclature"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">N° Nomenclature</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Entrez le numéro de nomenclature"
                        className="h-10 rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="quantiteProduire"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Quantité à produire</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="dateDebutReel"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date début réel</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Choisissez une date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="dateFinReelle"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date fin réel</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Choisissez une date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                      </PopoverContent>
                    </Popover>
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
            onClick={createForm.handleSubmit(onSubmit)}
          >
            Créer l'ordre de fabrication
          </Button>

          <SheetClose asChild>
            <Link href="/pages/ordre_fabrication/create">
              <Button variant="outline" className="w-full">
                Formulaire complet
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CreateOFSheet

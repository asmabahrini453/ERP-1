"use client"

import { nomenclatureFormSchema, type nomenclatureFormValues, ops } from "@/lib/validations/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
} from "@/components/ui/sheet";
import type { Nomenclature } from "../columns"

interface CreateNomenclatureSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (newNomenclature: Nomenclature) => void
}

const CreateNomenclatureSheet = ({ open, onOpenChange, onSave }: CreateNomenclatureSheetProps) => {
  const { toast } = useToast()

  // Define the creation form
  const createForm = useForm<nomenclatureFormValues>({
    resolver: zodResolver(nomenclatureFormSchema),
    defaultValues: {
      id:"",
      codeArticle: "",
      quantite: 0,
      stockActuel: 0,
      prixUnitaire: 0,
      montant: 0,
      devise: "",
      avecDesOperations: "NON",
    },
  })

  function onSubmit(data: nomenclatureFormValues) {
    const newNomenclature: Nomenclature = {
      ...data,
    }

    onSave(newNomenclature)

    toast({
      title: "Succès",
      description: "Nomenclature a été créée avec succès",
    })

    createForm.reset({
      id:'',
      codeArticle: "",
      quantite: 0,
      stockActuel: 0,
      prixUnitaire: 0,
      montant: 0,
      devise: "",
      avecDesOperations: "NON",
    })
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl section-title">Créer une nouvelle nomenclature</SheetTitle>
          <SheetDescription>Remplissez les détails de base pour créer une nouvelle nomenclature</SheetDescription>
        </SheetHeader>

        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-1">
          <Form {...createForm}>
            <form onSubmit={createForm.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={createForm.control}
                name="codeArticle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Code article</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Code article" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="quantite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Quantité</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Quantité" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="stockActuel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Stock actuel</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Stock actuel" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="prixUnitaire"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Prix Unitaire</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Prix Unitaire" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="montant"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Montant</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Montant" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="devise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Devise</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Devise" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="avecDesOperations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Avec des opérations</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
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
            </form>
          </Form>
        </div>

        <SheetFooter className="mt-6 flex flex-col sm:flex-row gap-2">
          <Button
            type="submit"
            className="w-full bg-[#023E8A] hover:bg-[#023E8A]/90 text-white"
            onClick={createForm.handleSubmit(onSubmit)}
          >
            Créer la nomenclature
          </Button>

          <SheetClose asChild>
            <Link href="/pages/nomenclature/create">
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

export default CreateNomenclatureSheet

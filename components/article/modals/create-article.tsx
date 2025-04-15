"use client"

import { articleFormSchema, type ArticleFormValues, categories } from "@/lib/validations/schema"
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
} from "@/components/ui/sheet"
import { Article } from "../columns"

interface CreateArticleSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (newArticle: Article) => void
}

const CreateArticleSheet = ({ open, onOpenChange, onSave }: CreateArticleSheetProps) => {
  const { toast } = useToast()

  const createForm = useForm<ArticleFormValues>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      id: "",
      serieNbr: "",
      title: "",
      category: "Matière première",
      unitCost: 0,
      salePrice: 0,
      stock: 0,
      unit: "",
    },
  })

  function onSubmit(data: ArticleFormValues) {
    const newArticle: Article = {
      ...data,
    }

    onSave(newArticle)

    toast({
      title: "Succès",
      description: "Article a été créé avec succès",
    })

    createForm.reset()
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-xl section-title">Créer un nouvel article</SheetTitle>
          <SheetDescription>Remplissez les détails de base pour créer un nouvel article</SheetDescription>
        </SheetHeader>

        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-1">
          <Form {...createForm}>
            <form onSubmit={createForm.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={createForm.control}
                name="serieNbr"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">N° de série</FormLabel>
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
                name="title"
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Categorie</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-10 rounded-md">
                          <SelectValue placeholder="Veuillez choisir une catégorie" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category, index) => (
                          <SelectItem key={index} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="unit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">UdM</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Unité de mesure" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="unitCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Coût unitaire</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0.00" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="salePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Prix de vente</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0.00" className="h-10 rounded-md" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={createForm.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Stock</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0" className="h-10 rounded-md" {...field} />
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
            onClick={createForm.handleSubmit(onSubmit)}
          >
            Créer l'article
          </Button>

          <SheetClose asChild>
            <Link href="/pages/article/create">
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

export default CreateArticleSheet

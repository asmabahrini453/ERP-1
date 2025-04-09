"use client"
import { articleFormSchema, type ArticleFormValues, categories } from "@/lib/validations/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Article } from "../columns"

interface EditDialogProps {
  articleData?: ArticleFormValues, 
   onSave: (updated: Article) => void;
 }

const EditDialog = ({ articleData , onSave}: EditDialogProps) => {

  const { toast } = useToast()

  //define the edit form
  const editForm = useForm<ArticleFormValues>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: articleData || {
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
    console.log(data)

    const updatedArticle: Article={
      ...data,
      id:articleData?.id ?? "" ,
    };
    onSave(updatedArticle);

    toast({
      title: "Succès",
      description: "Article a été mis à jour avec succès",
    })
    
  }

  return (
    <div className=" max-w-md ">
      <DialogHeader className="flex items-start mb-6">
        <DialogTitle className="text-xl section-title ">Modifier les détails de l'article</DialogTitle>
      </DialogHeader>

      <div className="max-h-[440px] overflow-y-auto p-1">
        <Form {...editForm}>
          <form onSubmit={editForm.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={editForm.control}
              name="serieNbr"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">N° de série</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Entrez le numéro de série" className="h-10 rounded-md" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={editForm.control}
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
              control={editForm.control}
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
              control={editForm.control}
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
              control={editForm.control}
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
              control={editForm.control}
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
              control={editForm.control}
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


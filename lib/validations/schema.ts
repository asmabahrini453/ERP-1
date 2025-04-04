import {z} from "zod"

export const categories=[ "Matière première","Produit","consommable","service"] as const ;//as const because by default 
// ts reconize the array as an array of strings, so in order to make them immutable types we change type to ass const

export const ArticleFormSchema= z.object({
    serieNbr: z.string().min(1, "N° de série est obligatoire"),
    title: z.string().min(1, "Titre d'article est obligatoire"),
    category: z.enum(categories),
    unitCost: z.coerce.number().min(0,"Coût unitaire est obligatoire"),
    salePrice: z.coerce.number().min(0,"Prix de vente est obligatoire"),
    stock: z.coerce.number().min(0,"Stock est obligatoire"),
    unit:  z.string().min(1, "UdM est obligatoire"),
})

//here ts will generate a type from the schema we provided 
// type ArticleFormValues = { title: string; unitCost: number }
//z.infer gives us compile-time types from the schema 
export type ArticleFormValues = z.infer<typeof ArticleFormSchema>
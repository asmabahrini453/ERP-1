import {z} from "zod"

export const categories=[ "Matière première","Produit","consommable","service"] as const ;//as const because by default 
// ts reconize the array as an array of strings, so in order to make them immutable types we change type to ass const

export const articleFormSchema= z.object({
    id: z.string(), 
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
export type ArticleFormValues = z.infer<typeof articleFormSchema>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const types = ["Entreprise","Particulier"] as const ;

export const  collaboratorFormSchema = z.object({
    id: z.string(),
    nomDeFamille:z.string().min(1, "Nom est obligatoire"),
    prenom: z.string().min(1, "Prenom est obligatoire"),
    reference: z.string().min(1, "Réfernece est obligatoire"),
    idFiscale: z.string().min(1, "Id Fiscale est obligatoire"),
    type: z.enum(types),
    activite: z.string().min(1, "Activité est obligatoire"),
    dateAjout: z.date().transform((value) => new Date(value)),
})
export type collaboratorFormValues = z.infer<typeof collaboratorFormSchema>
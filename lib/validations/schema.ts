import { z } from "zod";

export const categories = [
  "Matière première",
  "Produit",
  "consommable",
  "service",
] as const; //as const because by default
// ts reconize the array as an array of strings, so in order to make them immutable types we change type to ass const

export const articleFormSchema = z.object({
  id: z.string(),
  serieNbr: z.string().min(1, "N° de série est obligatoire"),
  title: z.string().min(1, "Titre d'article est obligatoire"),
  category: z.enum(categories),
  unitCost: z.coerce.number().min(0, "Coût unitaire est obligatoire"),
  salePrice: z.coerce.number().min(0, "Prix de vente est obligatoire"),
  stock: z.coerce.number().min(0, "Stock est obligatoire"),
  unit: z.string().min(1, "UdM est obligatoire"),
});

//here ts will generate a type from the schema we provided
// type ArticleFormValues = { title: string; unitCost: number }
//z.infer gives us compile-time types from the schema
export type ArticleFormValues = z.infer<typeof articleFormSchema>;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const types = ["Entreprise", "Particulier"] as const;

export const collaboratorFormSchema = z.object({
  id: z.string(),
  nomDeFamille: z.string().min(1, "Nom est obligatoire"),
  prenom: z.string().min(1, "Prenom est obligatoire"),
  reference: z.string().min(1, "Réfernece est obligatoire"),
  idFiscale: z.string().min(1, "Id Fiscale est obligatoire"),
  type: z.enum(types),
  activite: z.string().min(1, "Activité est obligatoire"),
  dateAjout: z.date().transform((value) => new Date(value)),
});
export type collaboratorFormValues = z.infer<typeof collaboratorFormSchema>;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ops=["OUI","NON"] as const ;
export const nomenclatureFormSchema = z.object({
  id: z.string(),
  codeArticle: z.string().min(1,"Code article est obligatoire"),
  quantite: z.coerce.number().min(0, "Quantité est obligatoire"),
  stockActuel:  z.coerce.number().min(0, "Stock actuel est obligatoire"),
  prixUnitaire:  z.coerce.number().min(0, "Prix unitaire est obligatoire"),
  montant: z.coerce.number().min(0, "Montant est obligatoire"),
  devise:  z.string(),
  avecDesOperations:  z.enum(ops),
});
export type nomenclatureFormValues = z.infer<typeof nomenclatureFormSchema> ; 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ofFormSchema = z.object({
  id: z.string(),
  numSerie: z.string().min(1,"Code article est obligatoire"),
  titre: z.string().min(1,"Code article est obligatoire"),
  quantiteProduire: z.coerce.number().min(0, "Quantité est obligatoire"),
  numNomenclature:  z.string().min(0, "N° nomenclature est obligatoire"),
  dateDebutReel: z.date().transform((value) => new Date(value)),
  dateFinReelle: z.date().transform((value) => new Date(value)),


});
export type ofFormValues = z.infer<typeof ofFormSchema> ; 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const categoriesEntrepot = [
  "Entrepôt collectif",
  "Entrepôt de rebut",
] as const;
export const type = [
  "Transit",
  "Principal", 
] as const;
export const statuts = [
  "Actif",
  "Inactif", 
] as const;


export const entrepotSchema = z.object({
  id: z.string(),
  reference: z.string().min(1,"Réference est obligatoire"),
  nomDeEntrepot: z.string().min(1,"Nom de l'entrepôt est obligatoire"),
  type:z.enum(type),
  statut:z.enum(statuts),
  categorie: z.enum(categoriesEntrepot)
});
export type entrepotFormValues = z.infer<typeof entrepotSchema> ; 
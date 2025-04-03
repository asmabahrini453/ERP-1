"use client"

import type { Article } from "@/components/article/columns"
import { DataTable } from "@/components/article/data-table"

export const data: Article[] = [
  {
    id: "1",
    serieNbr: "CF123456",
    title: "Chemise en coton homme",
    category: "Matière première",
    unitCost: 25.99,
    salePrice: 49.99,
    stock: 50,
    unit: "pcs",
  },
  {
    id: "2",
    serieNbr: "CF654321",
    title: "Robe d'été florale",
    category: "Production",
    unitCost: 30.5,
    salePrice: 59.99,
    stock: 30,
    unit: "pcs",
  },
  {
    id: "3",
    serieNbr: "CF987654",
    title: "Jean slim homme",
    category: "Production",
    unitCost: 40.0,
    salePrice: 79.99,
    stock: 45,
    unit: "pcs",
  },
  {
    id: "4",
    serieNbr: "CF456789",
    title: "Veste en cuir femme",
    category: "Production",
    unitCost: 120.0,
    salePrice: 199.99,
    stock: 15,
    unit: "pcs",
  },
  {
    id: "5",
    serieNbr: "CF741852",
    title: "Chaussures en cuir",
    category: "Production",
    unitCost: 55.99,
    salePrice: 99.99,
    stock: 35,
    unit: "pcs",
  },
  {
    id: "6",
    serieNbr: "CF852963",
    title: "Sac à main en cuir",
    category: "Matière première",
    unitCost: 75.0,
    salePrice: 149.99,
    stock: 20,
    unit: "pcs",
  },
  {
    id: "7",
    serieNbr: "CF369258",
    title: "Bonnet en laine",
    category: "Accessoires",
    unitCost: 10.0,
    salePrice: 24.99,
    stock: 60,
    unit: "pcs",
  },
  {
    id: "8",
    serieNbr: "CF147258",
    title: "Écharpe en cachemire",
    category: "Matière première",
    unitCost: 35.0,
    salePrice: 79.99,
    stock: 25,
    unit: "pcs",
  },
  {
    id: "9",
    serieNbr: "CF963741",
    title: "Gants en cuir",
    category: "Accessoires",
    unitCost: 20.0,
    salePrice: 49.99,
    stock: 40,
    unit: "pcs",
  },
  {
    id: "10",
    serieNbr: "CF258369",
    title: "Montre en acier inoxydable",
    category: "Matière première",
    unitCost: 90.0,
    salePrice: 199.99,
    stock: 10,
    unit: "pcs",
  },
  {
    id: "11",
    serieNbr: "CF741852",
    title: "Chaussures en cuir",
    category: "Production",
    unitCost: 55.99,
    salePrice: 99.99,
    stock: 35,
    unit: "pcs",
  },
  {
    id: "12",
    serieNbr: "CF852963",
    title: "Sac à main en cuir",
    category: "Matière première",
    unitCost: 75.0,
    salePrice: 149.99,
    stock: 20,
    unit: "pcs",
  },
  {
    id: "13",
    serieNbr: "CF369258",
    title: "Bonnet en laine",
    category: "Accessoires",
    unitCost: 10.0,
    salePrice: 24.99,
    stock: 60,
    unit: "pcs",
  },
  {
    id: "14",
    serieNbr: "CF147258",
    title: "Écharpe en cachemire",
    category: "Matière première",
    unitCost: 35.0,
    salePrice: 79.99,
    stock: 25,
    unit: "pcs",
  },
  {
    id: "15",
    serieNbr: "CF963741",
    title: "Gants en cuir",
    category: "Accessoires",
    unitCost: 20.0,
    salePrice: 49.99,
    stock: 40,
    unit: "pcs",
  },
  {
    id: "16",
    serieNbr: "CF258369",
    title: "Montre en acier inoxydable",
    category: "Matière première",
    unitCost: 90.0,
    salePrice: 199.99,
    stock: 10,
    unit: "pcs",
  },
]

const ArticleList = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Liste d'articles</h1>
        <p className="text-muted-foreground mt-1">Gérez votre inventaire et vos produits</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <DataTable data={data} />
      </div>
    </div>
  )
}

export default ArticleList


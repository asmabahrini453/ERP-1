"use client";

import type { Article } from "@/components/article/columns";
import { DataTable } from "@/components/article/data-table";
import { Button } from "@/components/ui/button";
import ValiderIcon from "@/assets/icons/valider-icon.png";
import filterIcon from "@/assets/icons/filter.png";
import Image from "next/image";
import {
  Copy,
  Pencil,
  Plus,
  PlusCircle,
  Printer,
  Share2Icon,
} from "lucide-react";
import Link from "next/link";

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
];

const ArticleList = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="md:text-sm text-muted-foreground sm:text-[12px]">
            Stock /
          </div>
          <h1 className="text-2xl text-[#383861] font-bold">
            Liste d'articles
          </h1>
          <p className="text-muted-foreground mt-1">
            Gérez vos articles et leurs détails
          </p>
        </div>

        <div className="flex items-center md:gap-4 sm:gap-1 sm:mt-1">
          <div className="flex items-center md:gap-2 sm:gap-1 cursor-pointer">
            {[Copy,Printer, Share2Icon].map((Icon, index) => (
              <div
                key={index}
                className="relative flex justify-center items-center w-10 h-10 rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>

          <div className="border-l border mx-4 sm:mx-2 h-8" />

          <div className="flex md:gap-4 sm:gap-1 sm:mr-2">
            <Link href="/pages/article/create">
              <Button className="bg-[#023E8A] hover:bg-[#3BCEAB] text-[#F2F9F3] flex items-center">
                <PlusCircle className="h-4 w-4" />
                <span className="hidden md:inline">Nouveau article</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default ArticleList;

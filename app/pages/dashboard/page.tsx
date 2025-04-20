"use client"
import LoadingScreen from "@/components/Loading";
import { Separator } from "@/components/ui/separator";
import { useLenis } from "@/hooks/useLenis";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const DashboardPage = () => {
    const[loading ,setLoading ]= useState(true)

    useLenis();

    useEffect(()=>{

        const timeout= setTimeout(()=>{
            setLoading(false)
        },2000)
        return()=>{clearTimeout(timeout)}
    },[])

  return (
    <>
    {loading && <LoadingScreen isVisible={loading}/>}
    {!loading && 
      <>
      <Link href="/pages/article">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Liste d'articles</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
        <Link href="/pages/nomenclature">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Liste des nomenclatures</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
  
        <Separator/>
  
        <Link href="/pages/ordre_fabrication">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Liste des ordres de fabrications</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
  
        <Separator/>
  
        <Separator/>
        <Link href="/pages/fournisseur">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Liste des fournisseurs</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
  
        <Separator/>
  
        <Link href="/pages/client">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Liste des clients</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
  
        <Separator/>
  
        <Link href="/pages/employe">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Liste des employés</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
        <Separator/>
  
        <Link href="/pages/entreprise/profile">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Entreprise</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
  
        <Separator/>
  
  
        <Link href="/pages/entrepot">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Liste des entrepots</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
  
        <Separator/>
  
        
        <Link href="/pages/workstation">
        <div className="m-4 flex justify-start items-center">
          <h1 className="text-2xl text-[#383861] font-bold">Liste des stations de travails</h1>
          <ArrowBigRight className="h-8 w-8  ml-2 text-muted-foreground cursor-pointer hover:text-teal-500"/>
        </div>
        </Link>
  
        <Separator/>
      </>}
    </>
  
  );
};
export default DashboardPage;

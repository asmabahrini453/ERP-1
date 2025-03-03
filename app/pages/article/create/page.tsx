'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button'; 
import ValiderIcon from '@/assets/icons/valider-icon.png'
import filterIcon from '@/assets/icons/filter.png'

import {  Copy, Pencil,Printer,Share2Icon} from 'lucide-react';

const ArticlePage = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [maximizeStock, setMaximizeStock] = useState(false);
  const [stockBlocked, setStockBlocked] = useState(false);
  const [purchaseBlocked, setPurchaseBlocked] = useState(false);
  const [salesBlocked, setSalesBlocked] = useState(false);

  const tabs = [
    { id: 'details', label: 'Détails' },
    { id: 'achat', label: 'Achat' },
    { id: 'ventes', label: 'Ventes' },
    { id: 'stock', label: 'Stock' },
    { id: 'taxe', label: 'Taxe' },
    { id: 'qualite', label: 'Qualité' }
  ];

  return (
    
    <div className="space-y-6">
    <div className="flex items-center justify-between"> 
    <div >
      <div className="md:text-sm text-muted-foreground sm:text-[12px]">Stock /</div>
      <h1 className="md:text-xl font-semibold text-[#383861] sm:text-[16px]">Article</h1>
    </div>

    <div className="flex items-center md:gap-4   sm:gap-1 sm:mt-1">
      <div className="flex items-center md:gap-2 sm:gap-1">
        <div className="relative flex justify-center items-center  w-10 h-10 rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
          <Copy className="h-4 w-4" />
        </div>

        <div className="relative flex justify-center items-center w-10 h-10 rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
          <Pencil className="h-4 w-4" />
        </div>

        <div className="relative flex justify-center items-center  w-10 h-10 rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
          <Printer className="h-4 w-4" />
        </div>

        <div className="relative flex justify-center items-center  w-10 h-10 rounded-full bg-white shadow-lg shadow-black/5 before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
          <Share2Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="border-l border mx-4 sm:mx-2 h-8 " /> 

      <div className="flex  md:gap-4 sm:gap-1 sm:mr-2">
        <Button className="bg-transparent hover:bg-[#3BCEAB] text-muted-foreground border">
          <Image src={filterIcon} alt="filtrer icon" className="h-4 w-4" />
          <span className="hidden md:inline">Filtrer</span> 
        </Button>
        <Button className="bg-[#3BCEAB] hover:bg-[#3BCEAB] text-[#F2F9F3]">
          <Image src={ValiderIcon} alt="valider icon" className="h-4 w-4" />
          <span className="hidden md:inline">Valider</span> 
        </Button>
      </div>
    </div>
    </div>


    
    <div className="flex space-x-2 mb-6 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 text-sm ${activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

     {/*détails  */ }       
     <div className="flex">
              <div className="w-2/3 pr-4">
                {activeTab === 'details' && (
                  <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium ">Détails</h2>
                      <div className="flex items-center text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Titre <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">N° de série <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded-md" rows={4} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie <span className="text-red-500">*</span></label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option>Matière première</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Code Catégorie de l'article <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">N° de souche <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Destinée à <span className="text-red-500">*</span></label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option>Achat</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between col-span-2">
                        <span className="text-sm font-medium text-gray-700">Bloqué</span>
                        <Switch checked={stockBlocked} onCheckedChange={setStockBlocked} />
                      </div>
                      <div className="flex items-center justify-between col-span-2">
                        <span className="text-sm font-medium text-gray-700">Maximiser Stock</span>
                        <Switch checked={maximizeStock} onCheckedChange={setMaximizeStock} />
                      </div>
                    </div>
                  </div>
                )}

            {/*achat */ }     
            {activeTab === 'achat' && (
                  <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium">Achat</h2>
                      <div className="flex items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Coût unitaire <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Prix d'achat
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Qté sur commande actuelles <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Remise
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="flex items-center justify-between col-span-2">
                        <span className="text-sm font-medium text-gray-700">Bloqué</span>
                        <Switch
                          checked={purchaseBlocked}
                          onCheckedChange={setPurchaseBlocked}
                        />
                      </div>
                    </div>
                  </div>
                )}

             {/*ventes  */ } 
             {activeTab === 'ventes' && (
                  <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium">Ventes</h2>
                      <div className="flex items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Prix unitaire <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Prix de vente par défaut
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          % marge sur vente <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          UDM par défaut à la vente <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option>Achat</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between col-span-2">
                        <span className="text-sm font-medium text-gray-700">Ventes bloqué</span>
                        <Switch 
                          checked={salesBlocked} 
                          onCheckedChange={setSalesBlocked} 
                        />
                      </div>
                    </div>
                  </div>
                )}

            {/*Stock  */ }   
            {activeTab === 'stock' && (
                  <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium">Stocks</h2>
                      <div className="flex items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          N° d'emplacement en stock <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option>Matière première</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Stock de sécurité <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}

            {/*taxe  */ }   
            {activeTab === 'taxe' && (
                  <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium">Taxe</h2>
                      <div className="flex items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Modèle de taxe <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option>TVA (19%)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Validé à partir de <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}

            {/*qualité  */ }   
            {activeTab === 'qualite' && (
                  <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium">Qualité</h2>
                      <div className="flex items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description d'erreur <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phase d'erreur
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phase de réparation
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}


            
              </div>
            </div>

            

        
  </div>
  );
};

export default ArticlePage;

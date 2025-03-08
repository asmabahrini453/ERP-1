"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AddressMap from "@/components/AddressMap";
import info from "@/assets/icons/info.png";
import close from "@/assets/icons/close.png";
import eye from "@/assets/icons/eye.png";
import attention from "@/assets/icons/attention.png";
import { Checkbox } from "../ui/checkbox";
import ValiderIcon from "@/assets/icons/valider-icon.png";
import verifier from "@/assets/icons/verifier.png";
import redClose from "@/assets/icons/redClose.png";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface NewEntrepriseProps {
  activeTab: string;
  downArrow: any;
}

const EntrepriseFiche = ({ activeTab, downArrow }: NewEntrepriseProps) => {
  const generaleRef = useRef<HTMLDivElement>(null);
  const comptableRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const abonnementRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const securiteRef = useRef<HTMLDivElement>(null);
  const supprimerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToSection = () => {
      const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        generale: generaleRef,
        comptable: comptableRef,
        securite: securiteRef,
        supprimer: supprimerRef,
        notifications: notificationsRef,
        abonnement: abonnementRef,
        services: servicesRef,
      };
      const ref = sectionRefs[activeTab];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToSection();
  }, [activeTab]);

  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({
    generale: true,
    comptable: false,
    securite: false,
    supprimer: false,
    notifications: false,
    abonnement: false,
    services: false,
   
  });

  const toggleSection = (section: string) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      {/* info generale */}
      <div
        ref={generaleRef}
        id="generale"
        className="bg-white rounded-lg shadow-md p-6 mb-6 border"
      >
        <div className="flex flex-col mb-4">
          <div
            className="flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => toggleSection("generale")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Information Générales
            </h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.generale ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-b w-full" />
        </div>

        {isOpen.generale && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom De L'entreprise <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                disabled
                value="DevPro Solution"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Activité <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                disabled
                value="Technologie"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Langue des PDF <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  disabled
                  value="Français"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Internet
                </label>
                <input
                  type="text"
                  disabled
                  value="devpro-solution.com"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="text"
                  disabled
                  value="+216 99 036 639"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="border-b border-dashed border-gray-300 col-span-2" />

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse
              </label>
              <input
                type="text"
                disabled
                value="B 24, Immeuble Ibn Arafa, Avenue Ibn Sina"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gouvernorat <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value="Monastir"
                  disabled
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code Postal
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="5000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pays <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="Tunisie"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carte
              </label>
              <AddressMap
                address="B 24"
                codePostal="5000"
                gouvernorat="Monastir"
                pays="Tunisie"
              />
            </div>
          </div>
        )}
      </div>

      {/*comptable  */}
      <div
        ref={comptableRef}
        id="comptable"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center justify-center gap-2 mb-[10px]"
            onClick={() => toggleSection("comptable")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Information Comptables
            </h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.comptable ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>

          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>
        {isOpen.comptable && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border p-[23px] rounded-[4px]">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Numéro D'identification Fiscale
              </label>
              <input
                type="text"
                value="1361232E"
                disabled
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Année Fiscale
              </label>
              <input
                type="text"
                value="2012"
                disabled
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Devise Principale <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value="TND"
                disabled
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Security Section */}
      <div
        ref={securiteRef}
        id="securite"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => toggleSection("securite")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Sécurité</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.securite ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-b w-full" />
        </div>

        {isOpen.securite && (
          <div className="space-y-6 border rounded-md p-6">
            <div className="space-y-4 ">
              <div className="flex justify-start items-center gap-3">
                <Image src={info} alt="information" />
                <p className="text-[12px] text-[#52937C]">
                  Maintenant, entrez simplement un nouveau mot de passe qui
                  remplacera l'ancien. Le nouveau mot de passe doit contenir au
                  moins 8 caractères.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border p-[23px] rounded-[4px]">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ancien mot de passe
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmer le nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <Button className="bg-[#3BCEAB] hover:bg-[#3BCEAB] text-[#F2F9F3] md:w-[120px] ">
                <Image
                  src={ValiderIcon}
                  alt="Mise à jour"
                  className="h-4 w-4"
                />
                <span className="hidden md:inline">Mise à jour</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* supprimer compte Section */}
      <div
        ref={supprimerRef}
        id="supprimer"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        {/* Header Section */}
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => toggleSection("supprimer")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Supprimer mon compte
            </h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.supprimer ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-b w-full" />
        </div>

        {isOpen.supprimer && (
          <div className="space-y-6 border rounded-md p-6">
            <div className="space-y-4 ">
              <div className=" border p-[23px] rounded-[4px]">
                <div className="flex flex-wrap items-center justify-between w-full gap-4">
                  <div className="flex flex-col justify-start max-w-[364px]">
                    <div className="flex items-center gap-2">
                      <Image src={attention} alt="attention" />
                      <p className="text-[12px] font-semibold text-[#F24E1E]">
                        Êtes-vous sûr de bien vouloir supprimer votre compte ?
                      </p>
                    </div>
                    <p className="text-[12px] text-muted-foreground ml-6">
                      La demande de suppression de votre compte sera transmise à
                      notre équipe et une fois votre compte supprimé, il vous
                      sera impossible de le récupérer.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 border p-2 rounded-md">
                    <Checkbox id="confirm-delete" />
                    <label
                      htmlFor="confirm-delete"
                      className="text-sm font-medium text-[#023E8A]"
                    >
                      Je confirme ma demande de supprimer ce compte
                    </label>
                  </div>
                </div>
              </div>

              <Button className="bg-[#DB7B77] hover:bg-[#DB7B77] text-[#F2F9F3]  ">
                <Image src={close} alt="supprimer " className="h-4 w-4" />
                <span className="hidden md:inline">Supprimer mon compte</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Notifications Section */}
      <div
        ref={notificationsRef}
        id="notifications"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div className="flex items-center justify-between w-full mb-[10px]">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => toggleSection("notifications")}
            >
              <h2 className="text-lg font-bold text-[#023E8A]">
                Notifications
              </h2>
              <Image
                src={downArrow || "/placeholder.svg"}
                alt="voir plus"
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen.notifications ? "rotate-90" : "-rotate-90"
                }`}
              />
            </div>
            <Button
              className={`bg-[#023E8A] text-[#FFFFFF] ${
                !isOpen.notifications ? "hidden" : ""
              }`}
            >
              <Image src={eye} alt="marquer comme vu" className="h-4 w-4" />
              Tout marquer comme Vu
            </Button>
          </div>
          <div className="border-l border mx-8 sm:mx-2 w-full" />
        </div>

        {isOpen.notifications && (
          <div className="border rounded-md p-4">
            <Table className="min-w-full divide-y divide-gray-200">
  <TableHeader className="bg-gray-50">
    <TableRow>
      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Notifications
      </TableHead>
      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Date/Heure
      </TableHead>
      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Système
      </TableHead>
      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Email
      </TableHead>
      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Navigateur
      </TableHead>
      <TableHead className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Action
      </TableHead>
    </TableRow>
  </TableHeader>

  <TableBody className="bg-white divide-y divide-gray-200">
    <TableRow>
      <TableCell className="max-w-[300px] px-6 py-4 text-sm font-medium text-[#023E8A] break-words">
      <strong>Renouvellement d'abonnement</strong>
    <p className="text-sm text-gray-600 relative">
      Ceci est un rappel automatique que votre abonnement au plan
      <strong> Premium</strong> se terminera dans
      <span className="font-semibold"> 3 jours.</span>
    </p>
</TableCell>


      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        06/02/2025 16:55
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <Image src={verifier} alt="vu" />
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <Image src={verifier} alt="vu" />
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <Image src={redClose} alt="non vu" />
      </TableCell>
      <TableCell>
        <Button variant="outline" size="sm" className="bg-[#023E8A] text-white">
          <Image src={eye} alt="marquer comme vu" className="h-4 w-4" />
          <span className="hidden md:inline"> Tout marquer comme Vu</span>
        </Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

          </div>
        )}
      </div>

      {/* Abonnement Section */}
      <div
        ref={abonnementRef}
        id="abonnement"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => toggleSection("abonnement")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">
              Abonnement - Gestion d'abonnement
            </h2>
            <Image
              src={downArrow}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.abonnement ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-b w-full" />
        </div>

        {isOpen.abonnement && (
          <div className="border rounded-md p-6">
            <div className="space-y-4">
            <div className=" border p-[23px] rounded-[4px]">
                <div className="flex flex-wrap items-center justify-between w-full gap-4">
                  <div className="flex flex-col justify-start max-w-[364px]">
                   
                      <strong className=" font-semibold text-muted-foreground">
                      Votre plan actif est le plan Gratuit.
                      </strong>
                    </div>
                    <p className=" text-muted-foreground ml-6">
                    Actif jusqu’au 31-12-2025
                    </p>
                
                    <Button variant="outline" size="sm" className="bg-[#023E8A] text-white">Mettre à niveau</Button>
                 
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Services Section */}
      <div
        ref={servicesRef}
        id="services"
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-start flex-col mb-4">
          <div
            className="flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => toggleSection("services")}
          >
            <h2 className="text-lg font-bold text-[#023E8A]">Services Tiers</h2>
            <Image
              src={downArrow || "/placeholder.svg"}
              alt="voir plus"
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen.services ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
          <div className="border-b w-full" />
        </div>

        {isOpen.services && (
          <div className="border rounded-md p-4">
            <p className="text-center text-gray-500">Aucun résultat trouvé</p>
          </div>
        )}
      </div>
    </>
  );
};
export default EntrepriseFiche;

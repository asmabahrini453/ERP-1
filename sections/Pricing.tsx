"use client";

import CheckIcon from "@/assets/icons/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Essentiel",
    monthlyPrice: 29,
    buttonText: "Choisir l'offre",
    popular: false,
    inverse: false,
    features: [
      "Jusqu'à 5 utilisateurs",
      "Gestion des ventes et des achats",
      "Suivi des stocks",
      "Facturation et devis",
      "Tableau de bord analytique",
      "Support standard",
    ],
  },
  {
    title: "Professionnel",
    monthlyPrice: 59,
    buttonText: "Choisir l'offre",
    popular: true,
    inverse: true,
    features: [
      "Jusqu'à 50 utilisateurs",
      "Toutes les fonctionnalités de l'offre Essentiel",
      "Gestion avancée des stocks",
      "Automatisation des processus",
      "Rapports personnalisés",
      "Accès API",
      "Support prioritaire",
    ],
  },
  {
    title: "Entreprise",
    monthlyPrice: 99,
    buttonText: "Choisir l'offre",
    popular: false,
    inverse: false,
    features: [
      "Utilisateurs illimités",
      "Toutes les fonctionnalités de l'offre Professionnel",
      "Gestion multi-sites et multi-devises",
      "Personnalisation complète",
      "Intégrations avancées",
      "Sécurité et conformité renforcées",
      "Gestion des accès et permissions avancées",
      "Support dédié 24/7",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Tarification</h2>
          <p className="section-description mt-5 text-muted-foreground">
            Choisissez l’offre qui correspond à vos besoins et optimisez la gestion de votre entreprise avec notre ERP puissant et intuitif.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <motion.div
              key={title}
              className={twMerge(
                "card p-6 border rounded-lg shadow-lg transition-all",
                inverse && "border-black text-white bg-black"
              )}
              whileHover={{
                rotateX: -10, 
                rotateY: 8, 
                scale: 1.08, 
              }}
              transition={{
                duration: 0.2, 
                ease: "easeOut",
              }}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>
                  {title}
                </h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{ backgroundPositionX: "100%" }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                      className="[background-size:200%] bg-[linear-gradient(to_right,#023E8A,#3BCEAB,#C4D0BA,#DDDDDD,#3BCEAB,#C4D0BA)] text-transparent bg-clip-text font-medium"
                    >
                      Populaire
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">{monthlyPrice}€</span>
                <span className="tracking-tighter font-bold text-black/50">/mois</span>
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse && "bg-white text-black")}>
                {buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

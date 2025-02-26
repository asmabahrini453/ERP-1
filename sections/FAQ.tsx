"use client"

import Plus from "@/assets/icons/plus.svg";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        question: "Comment ERPPro se distingue-t-il des autres outils ERP ?",
        answer: "Contrairement aux outils ERP traditionnels, ERPPro privilégie la rapidité et la simplicité sans compromettre la puissance. Notre interface intelligente s'adapte à votre flux de travail, réduisant les clics et vous permettant de rester dans votre flux créatif.",
    },
    {
        question: "Y a-t-il une courbe d'apprentissage ?",
        answer: "ERPPro est conçu pour être intuitif dès le premier jour. La plupart des utilisateurs sont productifs en quelques heures, et non en quelques semaines. Nous fournissons également des tutoriels interactifs et une documentation complète pour vous aider à démarrer.",
    },
    {
        question: "Comment gérez-vous le contrôle de version ?",
        answer: "Chaque modification dans ERPPro est automatiquement enregistrée et versionnée. Vous pouvez consulter l'historique, restaurer des versions précédentes et créer des versions nommées pour les étapes importantes.",
    },
    {
        question: "Puis-je travailler hors ligne ?",
        answer: "Oui ! ERPPro comprend un mode hors ligne robuste. Les modifications se synchronisent automatiquement lorsque vous êtes de nouveau en ligne, vous permettant ainsi de continuer à travailler n'importe où.",
    },
    {
        question: "Comment ERPPro gère-t-il la collaboration ?",
        answer: "ERPPro est conçu pour la collaboration. Vous pouvez inviter des membres de votre équipe à vos projets, partager des retours et travailler ensemble en temps réel.",
    },
];

export const FAQ = () => {
    const [selectedIndex, setselectedIndex] = useState(0);

    return (
        <section className="py-24 lg:relative ">
            {/* Large Device Section */}
            <div 
                className="lg:absolute lg:inset-0 lg:bg-cover lg:z-0 top-10"
                style={{
                    backgroundImage: "url('/blurred-shape1.png')",
                    backgroundPosition: "center top",
                    backgroundSize: "80%",
                    transform: "translateY(-40%) translatex(-30%)"
                }}
            ></div>

            {/* Small Device Section */}
            <div 
                className="sm:py-24 sm:flex sm:justify-center sm:items-center sm:bg-cover sm:bg-top sm:relative"
                style={{
                    backgroundImage: "url('/secondary-illustration1.png')"
                }}
            >
                <div className="container">
                    <div className="section-heading mb-12">
                        <h2 className="section-title">FAQ</h2>
                        <p className="section-description mt-5 text-muted-foreground">
                            Nous avons des réponses
                        </p>
                    </div>

                    <div className="grid gap-6 grid-cols-1">
                        {faqs.map((faq, faqIndex) => (
                            <div
                                key={faq.question}
                                className="bg-white rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-xl"
                            >
                                <div 
                                    className="flex items-center justify-between gap-6 cursor-pointer" 
                                    onClick={() => setselectedIndex(faqIndex)}
                                >
                                    <h3 className="font-medium flex-1">{faq.question}</h3>
                                    <Plus
                                        className={twMerge(
                                            "text-[#3BCEAB] flex-shrink-0 transition duration-300 cursor-pointer",
                                            selectedIndex === faqIndex && "rotate-45"
                                        )}
                                    />
                                </div>
                                <AnimatePresence>
                                    {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                        height: 0,
                                        marginTop: 0,
                                        }}
                                        animate={{
                                        height: "auto",
                                        marginTop: 24,
                                        }}
                                        exit={{
                                        height: 0,
                                        marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                        id={`faq-answer-${faqIndex}`}
                                    >
                                        <p className="text-muted-foreground">{faq.answer}</p>
                                    </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

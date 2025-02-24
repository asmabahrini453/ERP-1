'use client'
import { FeatureCard } from "@/components/FeatureCard";
import Image from "next/image";
import workflow from '@/assets/images/workflow2.png';
import taskflow from '@/assets/images/taskflow.png';
import kanban from '@/assets/images/kanban.png';
import { motion } from "framer-motion";

const features = [
    "Bibliothèque d'actifs",
    "Aperçu du code",
    "Mode flux",
    "Synchronisation intelligente",
    "Disposition automatique",
    "Recherche rapide",
    "Guides intelligents",
];

export const Features = () => {
    return (
        <section className="py-24">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-title">Fonctionnalités</h2>
                    <p className="section-description mt-5 text-muted-foreground">
                        Là où la puissance rencontre la simplicité
                    </p>
                </div>
                
                <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5 }} 
                >
                    <FeatureCard
                        title="Gestion optimisée des tâches"
                        description="Simplifiez la gestion des tâches et améliorez votre productivité."
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <motion.div 
                            className="flex items-center justify-center overflow-hidden"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image 
                                src={taskflow} 
                                alt="Gestion des tâches ERP" 
                                className="w-[350px] h-[200px] object-contain transition-all"
                            />
                        </motion.div>
                    </FeatureCard>

                    <FeatureCard
                        title="Automatisation des processus"
                        description="Optimisez votre processus de travail grâce à notre ERP."
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <motion.div 
                            className="flex items-center justify-center overflow-hidden"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image 
                                src={workflow} 
                                alt="Flux de travail ERP" 
                                className="w-[350px] h-[200px] object-contain transition-all"
                            />
                        </motion.div>
                    </FeatureCard>

                    <FeatureCard
                        title="Organisation avec Kanban"
                        description="Organisez votre travail efficacement avec notre système Kanban."
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    >
                        <motion.div 
                            className="flex items-center justify-center overflow-hidden"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image 
                                src={kanban} 
                                alt="Kanban ERP" 
                                className="w-[350px] h-[200px] object-contain transition-all"
                            />
                        </motion.div>
                    </FeatureCard>
                </motion.div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-[#EEEEF1] border-white/10 inline-flex px-4 md:px-6 py-2 md:py-3 rounded-2xl gap-3
                             items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-[#023E8A] text-white size-5 rounded-full inline-flex items-center justify-center text-xl 
                            group-hover:rotate-45 trasition  duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

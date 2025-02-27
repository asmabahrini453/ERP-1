'use client';

import { motion } from 'framer-motion';
import { Steps } from '@/components/Steps';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion';
import { TypingText } from '@/components/TypingText';
import { TitleText } from "@/components/TitleText";
import Image from 'next/image'
import kanban from '@/assets/images/kanban.png';


export const startingFeatures = [
    'Choisissez une tâche à suivre sur votre tableau Kanban.',
    'Déplacez les cartes selon leur progression.',
    'Suivez l\'avancement en temps réel et validez chaque étape.'
  ];
  

export const Kanban: React.FC = () => (
  <section className="relative z-10 sm:p-16 xs:p-8 px-6 py-12">
    <motion.div
      variants={staggerContainer(0.2, 0.5)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={planetVariants('left')}
        className="flex-1 flex justify-center items-center"
      >
        <Image
          src={kanban}
          alt="get-started"
          className="w-[80%] h-[80%] object-contain"
        />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| la vue Kanban" />
        <TitleText title={<span>Organisation optimisée avec Kanban</span>} /> 

        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature: string, index: number) => (
            <Steps
              key={feature}
              number={`${index < 9 ? '0' : ''}${index + 1}`} 
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);



'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion';
import { TypingText } from '@/components/TypingText';
import { TitleText } from "@/components/TitleText";
import Image from 'next/image';
import { Steps } from '@/components/Steps';
import taskflow from '@/assets/images/taskflow.png';

export const startingFeatures = [
  'Ajoutez une nouvelle tâche avec un titre et une description.',
  ' Attribuez-la à un membre de groupe si nécessaire.',
  ' Spécifiez une date limite pour assurer le suivi.'
];

export const Taskflow: React.FC = () => (
  <section className="sm:pl-28 xs:p-8 px-6  py-12 relative z-10">
    <motion.div
      variants={staggerContainer(0.2, 0.5)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
     
           <motion.div
             variants={fadeIn('left', 'tween', 0.2, 1)}
             className="flex-[0.75] flex justify-center flex-col"
           >
             <TypingText title="| la vue Workflow" />
             <TitleText title={<span>Automatisation des processus</span>} /> 
     
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

      <motion.div
        variants={planetVariants('right')}
        className="flex-1 flex justify-center items-center"
      >
        <Image
          src={taskflow}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Taskflow;

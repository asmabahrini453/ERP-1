'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion';
import { TypingText } from '@/components/TypingText';
import { TitleText } from "@/components/TitleText";
import Image from 'next/image';
import { Steps } from '@/components/Steps';
import taskflow from '@/assets/images/calendrier.png';

export const startingFeatures = [
    'Planifiez un événement avec un titre et une description.',
    'Invitez des participants pour une meilleure coordination.',
    'Définissez une date et une heure pour organiser votre emploi du temps.'
];

export const Calendar: React.FC = () => (
  <section className="sm:pl-28 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer(0.2, 0.5)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      {/* Image */}
      <div className="flex-1 flex justify-center items-center order-1 sm:order-1">
        <Image
          src={taskflow}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </div>

      {/* Texte */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)} 
        className="flex-[0.75] flex justify-center flex-col order-2 sm:order-2"
      >
        <TypingText title="| la vue Calendrier" />
        <TitleText title={<span>Planification et Suivi de votre Calendrier</span>} />

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

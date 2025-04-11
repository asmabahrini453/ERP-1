"use client";

import { motion } from "framer-motion";
import { Steps } from "@/components/Steps";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TypingText } from "@/components/TypingText";
import { TitleText } from "@/components/TitleText";
import workflow from "@/assets/images/exp2.png";
import ProfessionalImageCard from "@/components/ProfessionalImageCard";

export const startingFeatures = [
  "Trouvez un processus que vous souhaitez suivre dans le système.",
  "Complétez les informations nécessaires pour chaque étape.",
  "Validez et suivez l'avancement du processus en temps réel.",
];

export const Workflow: React.FC = () => (
  <section className="relative z-10 sm:p-16 xs:p-8 px-6 py-12">
    <motion.div
      variants={staggerContainer(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <div className="flex-1 flex justify-center items-center">
        <ProfessionalImageCard
          src={workflow}
          alt="workflow "
        />
      </div>

      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| la vue Workflow" />
        <TitleText title={<span>Automatisation des processus</span>} />

        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature: string, index: number) => (
            <Steps
              key={feature}
              number={`${index < 9 ? "0" : ""}${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

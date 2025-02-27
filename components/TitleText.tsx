'use client';

import { motion } from 'framer-motion';
import { textVariant2 } from '../utils/motion';

interface TitleTextProps {
  title: string | JSX.Element;
  textStyles?: string;
}

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[54px] text-[30px] section-title text-left ${textStyles}`}
  >
    {title}
  </motion.h2>
);

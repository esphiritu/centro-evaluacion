'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  SearchCheck,
  FlaskConical,
  PencilLine,
  Award,
} from "lucide-react";

const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 1 }
  }
};

const iconVariants = {
  initial: { 
    scale: 0.8, 
    opacity: 0.5 
  },
  animate: { 
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 0.1,
    },
  },
  exit: { 
    scale: 0.8,
    opacity: 0.5,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 1, 
    },
  }
};

const texts = [
  { icon: <SearchCheck />, text: 'Identifica', id: "step-1", indx: "search" },
  { icon: <FlaskConical />, text: 'Toma una prueba', id: "step-2", indx: "flash" },
  { icon: <PencilLine />, text: 'Realiza tu evaluación', id: "step-3", indx: "pencil" },
  { icon: <Award />, text: 'Consulta resultados', id: "step-4", indx: "award" },
];


export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute bg-white dark:bg-slate-900 rounded-full top-5 left-3 flex items-center font-semibold text-lg py-1 px-1" >
      <motion.div 
        className="p-2 bg-teal-500 rounded-full text-white"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={texts[currentIndex].indx}>
          {texts[currentIndex].icon}
      </motion.div>
      <motion.p
        className="px-4"
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={texts[currentIndex].id}>
          {texts[currentIndex].text}
      </motion.p>
    </div>

  );
}



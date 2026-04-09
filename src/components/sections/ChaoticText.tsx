"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ChaoticText({ dict }: { dict: any }) {
  const [index, setIndex] = useState(0);
  const [isFinal, setIsFinal] = useState(false);

  const messages = [
    dict?.msg1 || "Onlar bizə güvəndi… nəticə aldı.",
    dict?.msg2 || "Onların seçimi təsadüfi deyildi.",
    dict?.msg3 || "Onlar başladı… indi qazanır.",
    dict?.msg4 || "Onlar dəyişdi… sən də dəyiş.",
    dict?.msg5 || "Onlar artıq başladı… sən hələ düşünürsən?",
    dict?.msg6 || "Bu yolu seçənlər uduzmur."
  ];

  const finalMessage = dict?.finalMessage || "Sıfırdan başlayaraq peşəkar səviyyəyə qədər proqramlaşdırma öyrənin. Real layihələr, təcrübəli mentorlar və karyera dəstəyi ilə hədəflərinizə çatın.";

  useEffect(() => {
    let timer: any;
    if (!isFinal) {
      timer = setInterval(() => {
        setIndex((prev) => {
          if (prev === messages.length - 1) {
            setIsFinal(true);
            return prev;
          }
          return prev + 1;
        });
      }, 5000);
    } else {
      timer = setTimeout(() => {
        setIsFinal(false);
        setIndex(0);
      }, 9000);
    }
    return () => {
      clearInterval(timer);
      clearTimeout(timer);
    };
  }, [isFinal, messages.length]);

  const letterVariants = {
    initial: {
      opacity: 0,
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1200,
      rotate: (Math.random() - 0.5) * 720,
      scale: 5,
      filter: "blur(40px)",
    },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 30,
        delay: i * 0.015,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: 150,
      filter: "blur(15px)",
      transition: { duration: 0.6, delay: i * 0.01 }
    }),
  };

  const renderLetters = (text: string, isBig: boolean) => (
    <motion.div 
      className={`flex flex-wrap justify-center lg:justify-end gap-x-4 md:gap-x-8 text-right
        ${isBig ? "text-3xl md:text-5xl lg:text-[64px]" : "text-xl md:text-3xl lg:text-[36px] max-w-xl"}`}
    >
      {text.split(" ").map((word, wIdx) => (
        <span key={wIdx} className="flex">
          {word.split("").map((char, cIdx) => (
            <motion.span
              key={`${wIdx}-${cIdx}`}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={cIdx + wIdx * 5}
              className="inline-block font-black text-slate-900 leading-[1.1] tracking-tighter"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );

  return (
    <div className="relative min-h-[400px] flex items-center justify-center lg:justify-end w-full select-none">
      <AnimatePresence mode="wait">
        {!isFinal ? (
          renderLetters(messages[index], true)
        ) : (
          renderLetters(finalMessage, false)
        )}
      </AnimatePresence>
    </div>
  );
}
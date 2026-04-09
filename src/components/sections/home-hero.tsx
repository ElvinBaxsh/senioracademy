"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HomeHero({ dict, lang }: { dict: any; lang: string }) {
  const [index, setIndex] = useState(0);
  const [isFinal, setIsFinal] = useState(false);

  const messages = useMemo(() => [
    dict?.chaoticSection?.msg1 || "Gələcəyi gözləmə, onu sən yaz!",
    dict?.chaoticSection?.msg2 || "Bizə güvənlər artıq karyerasına başlayıb",
    dict?.chaoticSection?.msg3 || "İndi sıra sənindir!"
  ], [dict]);

  const finalMessage =
    dict?.chaoticSection?.finalMessage ||
    "Sıfırdan başlayaraq peşəkar səviyyəyə qədər proqramlaşdırma öyrənin. Real layihələr, təcrübəli mentorlar və karyera dəstəyi ilə hədəflərinizə çatın.";

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
      }, 4500);
    } else {
      // Final cümlədə dövrü dayandırırıq ki, istifadəçi düyməyə basa bilsin
      // Əgər yenidən başlasın istəyirsənsə, bura setTimeout əlavə edə bilərik
    }
    return () => clearInterval(timer);
  }, [isFinal, messages.length]);

  const randomPositions = useMemo(() => {
    return Array.from({ length: 300 }).map(() => ({
      x: (Math.random() - 0.5) * 1000,
      y: (Math.random() - 0.5) * 800,
      rotate: (Math.random() - 0.5) * 180,
    }));
  }, []);

  const letterVariants = {
    initial: (i: number) => ({
      opacity: 0,
      x: randomPositions[i % 300].x,
      y: randomPositions[i % 300].y,
      rotate: randomPositions[i % 300].rotate,
      scale: 2,
      filter: "blur(12px)", 
    }),
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.015,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: 100,
      filter: "blur(8px)",
      transition: { duration: 0.5, delay: i * 0.008 },
    }),
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[60%] bg-brand-cyan/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[55%] bg-brand-navy/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <AnimatePresence mode="wait">
          {!isFinal ? (
            <motion.h1
              key="messages"
              className="text-center font-black text-slate-900 leading-[1.1] tracking-tighter flex flex-wrap justify-center items-center text-4xl md:text-7xl lg:text-[90px] px-4"
            >
              {messages[index].split(" ").map((word, wIdx) => (
                <span key={wIdx} className="flex mx-[0.15em]">
                  {word.split("").map((char, cIdx) => (
                    <motion.span
                      key={cIdx}
                      custom={cIdx + wIdx * 8}
                      variants={letterVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="inline-block will-change-[transform,filter,opacity]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
          ) : (
            <motion.div 
              key="final-container"
              className="flex flex-col items-center text-center px-6"
            >
              {/* FINAL CÜMLƏ */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-2xl md:text-5xl lg:text-[48px] font-black text-slate-900 max-w-5xl leading-[1.2] tracking-tight mb-12"
              >
                {finalMessage}
              </motion.h2>

              {/* QƏŞƏNG DEMO DƏRS BUTONU */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              >
                <Link
                  href={`/${lang}/contact`}
                  className="group relative inline-flex items-center gap-4 px-10 py-5 bg-brand-navy text-white rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-10px_rgba(15,60,102,0.4)]"
                >
                  {/* Buton daxili parıltı effekti */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <Sparkles size={24} className="text-brand-cyan animate-pulse" />
                  Ödənişsiz Demo Dərs
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <p className="mt-4 text-slate-400 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Qeydiyyat hazırda aktivdir
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
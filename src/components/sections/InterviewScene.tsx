"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Phone, Briefcase, GraduationCap, FileText, UserCheck, TrendingUp } from "lucide-react";

export default function TypographyHero() {
  const [showSubtext, setShowSubtext] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Problemlər və Senior.az-ın həlləri
  const painPoints = [
    { q: "Təcrübə tələb olunur…", a: "Biz onu veririk.", icon: <TrendingUp size={18} /> },
    { q: "İş istəyirlər…", a: "Biz səni hazır edirik.", icon: <Briefcase size={18} /> },
    { q: "CV-də boşluq var?", a: "Dolduraq.", icon: <FileText size={18} /> },
    { q: "“Junior lazımdır” deyirlər…", a: "Sən ol.", icon: <UserCheck size={18} /> },
    { q: "Bilik var, nəticə yoxdur?", a: "Düzəldək.", icon: <GraduationCap size={18} /> }
  ];

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowSubtext(true), 1500);
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % painPoints.length);
    }, 3000);
    
    return () => {
      clearTimeout(titleTimer);
      clearInterval(stepTimer);
    };
  }, []);

  const mainTitle = "GƏLƏCƏYİNİ KODLA İNŞA ET";

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-6 py-20">
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[150px]" />
      </div>

      {/* Main Title (Xaotik hərflərlə) */}
      <div className="text-center mb-12 min-h-[160px] md:min-h-[250px] flex items-center justify-center w-full max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-7xl lg:text-[100px] font-black text-slate-900 leading-[0.95] tracking-tighter flex flex-wrap justify-center gap-x-6">
          {mainTitle.split(" ").map((word, wIdx) => (
            <span key={wIdx} className="flex">
              {word.split("").map((char, cIdx) => (
                <motion.span
                  key={`${wIdx}-${cIdx}`}
                  initial={{ opacity: 0, scale: 5, x: (Math.random()-0.5)*500, y: (Math.random()-0.5)*500, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)" }}
                  transition={{ type: "spring", damping: 25, stiffness: 40, delay: (wIdx * 5 + cIdx) * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
      </div>

      {/* DİNAMİK CÜMLƏLƏR (Problem-Həll Bloku) */}
      <div className="w-full max-w-2xl h-[100px] flex items-center justify-center mb-16">
        <AnimatePresence mode="wait">
          {showSubtext && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center gap-3"
            >
              <div className="flex items-center gap-3 text-slate-400 font-bold text-lg md:text-xl italic">
                {painPoints[activeStep].icon}
                {painPoints[activeStep].q}
              </div>
              <div className="text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight">
                {painPoints[activeStep].a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: showSubtext ? 1 : 0, y: showSubtext ? 0 : 30 }}
        className="w-full max-w-2xl"
      >
        <div className="relative p-2 bg-white border-2 border-slate-100 rounded-[35px] shadow-2xl shadow-slate-200/40 focus-within:border-brand-navy transition-all duration-500">
          <div className="flex flex-col sm:flex-row items-center">
            <input 
              type="tel" 
              placeholder="Nömrəni yaz, biz sənə zəng edək..." 
              className="flex-1 px-8 py-5 bg-transparent outline-none font-bold text-xl text-slate-700"
            />
            <button className="w-full sm:w-auto bg-brand-navy text-white px-10 py-5 rounded-[28px] font-black text-base flex items-center justify-center gap-3 hover:bg-slate-900 transition-all active:scale-95 shadow-xl">
              Demo Dərs Al
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function TypographyHero() {
  const [index, setIndex] = useState(0);
  
  // Ekranda böyük hərflərlə fırlanacaq əsas mesajlar
  const messages = [
    "GLOBAL KARYERA",
    "YÜKSƏK MAAŞ",
    "SENIOR TƏCRÜBƏ",
    "REALLAŞAN XƏYALLAR"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] flex flex-col items-center justify-center bg-white overflow-hidden px-6">
      
      {/* Arxa fon üçün çox yüngül, hərəkətsiz dekor (Göz yormayan) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-brand-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-brand-navy/5 rounded-full blur-[120px]" />
      </div>

      {/* Üst Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8"
      >
        <Sparkles size={14} className="text-brand-cyan" />
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
          Gələcəyin burada başlayır
        </span>
      </motion.div>

      {/* ƏSAS BÖYÜK YAZI - Ekranı tutan hissə */}
      <div className="text-center mb-12 h-[120px] md:h-[180px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={messages[index]}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl lg:text-[110px] font-black text-slate-900 leading-none tracking-tighter"
          >
            {messages[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-slate-500 font-medium mb-12 text-center max-w-2xl"
      >
        Senior Akademiya ilə sadəcə öyrənmirsən, sənayedə iz buraxacaq bir mütəxəssisə çevrilirsən.
      </motion.p>

      {/* DEMO DƏRS INPUT SİSTEMİ - Mərkəzdə və Diqqətçəkən */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-xl"
      >
        <div className="relative flex flex-col sm:flex-row p-2 bg-white border-2 border-slate-100 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] focus-within:border-brand-navy transition-all duration-300">
          <input 
            type="tel" 
            placeholder="Əlaqə nömrəniz (Məs: 050...)" 
            className="flex-1 bg-transparent px-6 py-4 outline-none font-bold text-lg text-slate-700 placeholder:text-slate-300"
          />
          <button className="bg-brand-navy text-white px-8 py-4 rounded-[26px] font-black text-base flex items-center justify-center gap-3 hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-brand-navy/20">
            Ödənişsiz Demo Dərs
            <ArrowRight size={20} />
          </button>
        </div>
        
        {/* Alt Bilgiləndirmə */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
            <CheckCircle2 size={14} className="text-emerald-500" /> İlk dərs ödənişsizdir
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
            <CheckCircle2 size={14} className="text-emerald-500" /> Qeydiyyat 24/7 aktivdir
          </div>
        </div>
      </motion.div>

    </section>
  );
}
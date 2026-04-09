"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Zap, ArrowRight, Star, Code2 } from "lucide-react";
import { Button } from "../ui/button";

interface HomeAboutProps {
  dict: any;
  lang: string;
}

export const HomeAbout = ({ dict, lang }: HomeAboutProps) => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* SOL HİSSƏ - Mətnlər */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-brand-cyan" />
              <span className="text-brand-navy font-bold text-sm tracking-widest uppercase">
                {dict.badge}
              </span>
            </div>

            {/* Heading - Ölçülər tənzimləndi */}
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-slate-900 leading-[1.1] tracking-tighter">
              <span className="block mb-2">{dict.title}</span>
              <span className="text-brand-navy block">
                {dict.title_highlight}
              </span>
            </h2>

            {/* Desc */}
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              {dict.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <Link href={`/${lang}/contact`}>
              <Button
                className="h-14 px-10 rounded-2xl bg-brand-navy hover:bg-brand-navy/90 text-white text-base font-black shadow-xl shadow-brand-navy/20 transition-all active:scale-95"
              >
                {dict.btn_contact}
              </Button>
            </Link>

            <Link
              href={`/${lang}/courses`}
              className="h-14 px-8 rounded-2xl border-2 border-slate-100 flex items-center gap-2 font-bold text-slate-700 hover:bg-slate-50 transition-all group"
            >
              {dict.btn_courses}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Features - Alt Bölmə */}
          <div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-navy shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm uppercase tracking-tight">
                  Müasir Texnologiyalar
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  React, Next.js, Node.js
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-navy shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm uppercase tracking-tight">
                  Praktiki Təcrübə
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Real layihələr üzərində iş
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SAĞ HİSSƏ - Vizual Elementlər */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Əsas Şəkil - Aspect ratio ilə hündürlük tənzimləndi */}
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(15,60,102,0.2)] aspect-[4/5] border-[12px] border-white bg-slate-50">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Senior Akademiya Tədris"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card - Məzun Statistikası */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-10 z-20 bg-white/95 backdrop-blur-md px-6 py-5 rounded-[32px] shadow-2xl border border-white flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-11 h-11 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                  <Image src={`https://i.pravatar.cc/150?u=${i+30}`} alt="Student" fill className="object-cover" />
                </div>
              ))}
              <div className="relative w-11 h-11 rounded-full border-4 border-white bg-brand-navy text-white text-[10px] font-black flex items-center justify-center shadow-lg">
                +1k
              </div>
            </div>

            <div className="pr-2">
              <p className="text-xl font-black text-slate-900 leading-none">1000+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                {dict.stats_label}
              </p>
            </div>
          </motion.div>

          {/* Arxa fon bəzəyi - Cyan ləkəsi */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/5 rounded-full blur-[100px] -z-0" />
        </motion.div>

      </div>
    </section>
  );
};
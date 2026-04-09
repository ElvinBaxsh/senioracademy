"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Users, LayoutGrid, Zap, Infinity, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  award: Award,
  briefcase: Briefcase,
  users: Users,
  "layout-grid": LayoutGrid,
  zap: Zap,
  infinity: Infinity
};

export const HomeWhyChooseUs = ({ dict }: { dict: any }) => {
  return (
    <section id="why" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlıq */}
        <div className="text-center space-y-4 mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold text-[10px] md:text-xs tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            {dict.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {dict.title}
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {dict.description}
          </p>
        </div>

        {/* Kartlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dict.features.map((feature: any, index: number) => {
            const IconComponent = icons[feature.icon as keyof typeof icons] || Zap;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative bg-white p-6 md:p-8 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500",
                  "flex flex-col h-full group overflow-hidden",
                  "hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] hover:border-blue-100"
                )}
              >
                {/* 1. Soldan Sağa Yüklənən Mavi Xətt */}
                <div className="absolute top-0 left-0 h-1.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-in-out" />

                {/* İkon və Tag */}
                <div className="flex items-center justify-between mb-6">
                  {/* 2. Hover zamanı içi mavi olan ikon */}
                  <div className={cn(
                    "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300",
                    "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                  )}>
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  
                  {feature.tag && (
                    <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase bg-slate-100 px-3 py-1 rounded-lg">
                      {feature.tag}
                    </span>
                  )}
                </div>

                {/* Mətnlər - Boşluğu minimuma endirmək üçün flex-grow istifadə edildi */}
                <div className="flex-grow space-y-3">
                  <h4 className="font-bold text-slate-900 text-xl md:text-2xl leading-snug group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed line-clamp-4 md:line-clamp-none">
                    {feature.desc}
                  </p>
                </div>

                {/* Sağ altda ox ikonu */}
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Dekorativ künc dairəsi */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50/30 rounded-full -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
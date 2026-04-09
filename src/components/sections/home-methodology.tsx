"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Users2, BrainCircuit, ArrowRight, Rocket } from "lucide-react";

export const HomeMethodology = ({ dict }: { dict: any }) => {
  const icons = {
    code: <Code2 className="w-6 h-6 text-blue-600" />,
    users: <Users2 className="w-6 h-6 text-purple-600" />,
    brain: <BrainCircuit className="w-6 h-6 text-emerald-600" />
  };

  return (
    <section id="method" className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        {/* SOL HİSSƏ - Yazılar (Mobildə Üstdə) */}
        <div className="flex flex-col justify-between order-1 lg:order-1 lg:py-20">
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4 lg:space-y-6">
              {/* Badge: Mavi background */}
              <span className="text-blue-600 font-bold text-[10px] tracking-widest uppercase bg-[#E0E7FF] px-4 py-1.5 rounded-full inline-block">
                {dict.badge}
              </span>
              
              {/* Başlıq: Yan-yana başlıq məntiqi */}
              <h2 className="text-[20px] sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                <span className="block lg:whitespace-nowrap">
                  Gələcəyin Proqramçılarını <span className="text-blue-600">Necə</span>
                </span>
                <span className="text-blue-600 block">Hazırlayırıq?</span>
              </h2>
              
              <p className="text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed">
                {dict.description}
              </p>
            </div>

            {/* Metodika Kartları */}
            <div className="space-y-4">
              {dict.features.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-5 lg:p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6"
                >
                  <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center">
                    {icons[feature.icon as keyof typeof icons]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base lg:text-lg mb-0.5">{feature.title}</h4>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Düymə */}
            <div className="pt-2">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 group">
                {dict.btn_explore}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* SAĞ HİSSƏ - Şəkil (Mobildə Aşağıda) */}
        <div className="relative order-2 lg:order-2 h-full min-h-[300px] lg:min-h-[550px]">
          {/* Arxa Çərçivə */}
          <div className="absolute -top-8 -right-8 w-full h-full border-2 border-blue-100 rounded-[3rem] -z-0" />
          
          {/* Şəkil Konteyneri: Desktopda mütləq düymədən aşağı uzanır */}
          <div className="relative z-10 h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/metodgy.jpg" 
              alt="Teaching Methodology"
              fill
              className="object-cover"
              priority
            />
            
            {/* Məzun Uğuru Kartı */}
            <div className="absolute bottom-6 inset-x-6 lg:bottom-10 lg:inset-x-10">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-xl flex items-center gap-5 border border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-emerald-600">
                  <Rocket className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{dict.success_label}</p>
                  <p className="text-xl lg:text-2xl font-black text-slate-900">{dict.success_rate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
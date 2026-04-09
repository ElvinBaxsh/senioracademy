"use client";

import Link from "next/link";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HomeCTA = ({ dict, lang }: { dict: any; lang: string }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-[#F8FAFC] p-8 md:p-16"
        >
          {/* Arxa fon Grid Naxışı */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px), radial-gradient(#CBD5E1 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px'
            }} 
          />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            
            {/* Sol Hissə - Mətnlər */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-xs tracking-widest uppercase">{dict.badge}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  {dict.title}
                </h2>
                
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                  {dict.description}
                </p>
              </div>

              {/* Kiçik Özəlliklər */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  {dict.feature1}
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {dict.feature2}
                </div>
              </div>
            </div>

            {/* Sağ Hissə - Düymə və Qeyd */}
            <div className="flex flex-col items-center gap-4">
              <Link href={`/${lang}/contact`}>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all group"
                >
                  <Mail className="w-5 h-5" />
                  {dict.btn_text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <p className="text-slate-400 text-sm font-medium">
                {dict.footer_note}
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
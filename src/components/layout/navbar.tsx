"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

export function Navbar({ lang, dict }: { lang: string; dict: Record<string, string> }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 md:h-24 flex items-center justify-between">

        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center group shrink-0">
          <Image
            src="/logo_final2.png"
            alt="Senior.az Logo"
            width={1099}
            height={258}
            className="h-10 w-auto sm:h-12 md:h-14 transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 relative">
          {NAV_LINKS.map((item) => {
            const href = `/${lang}${item.href}`;
            const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;
            const isActive = isHomePage ? item.key === "about" : pathname === href;

            return (
              <Link
                key={item.key}
                href={href}
                className={cn(
                  "relative px-6 py-2.5 text-base font-semibold transition-colors duration-300 outline-none",
                  isActive ? "text-white" : "text-gray-700 hover:text-brand-navy"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full -z-10 shadow-lg"
                    style={{ backgroundColor: "#0F3C66" }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                {dict[item.key]}
              </Link>
            );
          })}
        </nav>

        {/* Sağ tərəf */}
        <div className="flex items-center gap-4 md:gap-6">
          <LanguageSwitcher currentLang={lang} />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 rounded-xl bg-gray-50 text-gray-700"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[80px] md:top-[96px] inset-x-0 bg-white border-b shadow-xl px-6 py-8 flex flex-col gap-4 z-50"
          >
            {NAV_LINKS.map((item) => {
              const href = `/${lang}${item.href}`;
              const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;
              const isActive = isHomePage ? item.key === "about" : pathname === href;

              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-6 py-4 rounded-2xl text-lg font-bold transition-all",
                    isActive ? "text-white" : "bg-gray-50 text-gray-800"
                  )}
                  style={isActive ? { backgroundColor: "#0F3C66" } : {}}
                >
                  {dict[item.key]}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOCALES } from "@/constants/navigation";

const labels: Record<string, string> = { az: "AZ", en: "EN", ru: "RU" };

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (lang: string) => {
    // Replace current lang segment in pathname
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{labels[currentLang]}</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-20 w-24 bg-white border border-gray-100 rounded-xl shadow-lg py-1 overflow-hidden">
            {LOCALES.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLang(loc)}
                className={cn(
                  "w-full px-4 py-2 text-left text-sm font-medium transition-colors",
                  currentLang === loc
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                {labels[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

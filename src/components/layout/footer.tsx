import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

interface FooterProps {
  lang: string;
  dict: { rights: string };
  navDict: Record<string, string>;
}

export function Footer({ lang, dict, navDict }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">PK</span>
              </div>
              <span className="text-white font-semibold text-lg">Senior.az</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Sıfırdan başlayaraq peşəkar səviyyəyə qədər proqramlaşdırma öyrənin.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold">Keçidlər</span>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.key}
                href={`/${lang}${item.href}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {navDict[item.key]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Senior.az. {dict.rights}
          </p>
          <p className="text-xs text-gray-700">Next.js 15 · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

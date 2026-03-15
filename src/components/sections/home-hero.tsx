import Link from "next/link";
import { ArrowRight, Code2, Layers } from "lucide-react";

interface HeroDict {
  badge: string;
  headingStart: string;
  headingHighlight: string;
  headingEnd: string;
  subheading: string;
  ctaPrimary: string;
  ctaSecondary: string;
  feature1Title: string;
  feature1Sub: string;
  feature2Title: string;
  feature2Sub: string;
  socialCount: string;
  socialLabel: string;
}

export function HomeHero({ dict, lang }: { dict: HeroDict; lang: string }) {
  return (
    <section className=" min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-blue-50/40 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm text-gray-600 font-medium">{dict.badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              {dict.headingStart}{" "}
              <span className="text-blue-600">{dict.headingHighlight}</span>{" "}
              {dict.headingEnd}
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              {dict.subheading}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`/${lang}/courses`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                {dict.ctaPrimary}
              </Link>
              <Link
                href={`/${lang}/courses`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                {dict.ctaSecondary}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{dict.feature1Title}</p>
                  <p className="text-xs text-gray-400">{dict.feature1Sub}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">{dict.feature2Title}</p>
                  <p className="text-xs text-gray-400">{dict.feature2Sub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-100 aspect-[4/3] bg-slate-800">
              <img
                src="/hero-image.jpg"
                alt="Proqramlaşdırma"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-blue-500", "bg-blue-400", "bg-blue-300"].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold ${bg}`}
                  >
                    {["A", "B", "C"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{dict.socialCount}</p>
                <p className="text-xs text-gray-400">{dict.socialLabel}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

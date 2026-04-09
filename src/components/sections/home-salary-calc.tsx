"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Rocket, Globe, Briefcase, ChevronRight, TrendingUp, GraduationCap, Clock } from "lucide-react";

export const HomeSalaryCalc = () => {
  const [track, setTrack] = useState("");
  const [experience, setExperience] = useState(0);
  const [hours, setHours] = useState(10);
  const [english, setEnglish] = useState("medium");
  const [method, setMethod] = useState("senior");
  const [res, setRes] = useState({
    salary: 0,
    roiMonths: 0,
    roles: [] as string[],
  });

  useEffect(() => {
    if (!track) return;

    const level = experience < 2 ? "junior" : experience < 5 ? "mid" : "senior";
    const hoursMult = hours <= 5 ? 0.8 : hours <= 15 ? 1 : hours <= 25 ? 1.1 : 1.2;

    const azData: any = {
      frontend:  { junior: 950,  mid: 1850, senior: 3500 },
      backend:   { junior: 1150, mid: 2250, senior: 4750 },
      fullstack: { junior: 1150, mid: 2250, senior: 4000 },
      mobile:    { junior: 1150, mid: 2250, senior: 4500 },
    };

    const mMult: any = { senior: 1.25, others: 1, self: 0.8 };
    const local = azData[track][level] * mMult[method] * hoursMult;

    const roleMap: any = {
      frontend:  ["Frontend Developer", "Web Developer", "UI/UX Developer", "Software Engineer"],
      backend:   ["Software Developer", "Software Engineer", "IT Project Manager", "Backend Developer"],
      fullstack: ["Software Developer", "Software Engineer", "Web Developer", "Frontend Developer"],
      mobile:    ["Mobile Frontend Developer", "Software Engineer", "Frontend Developer", "Web Developer"],
    };

    setRes({
      salary: Math.round(local),
      roiMonths: method === "senior" ? 3 : 7,
      roles: roleMap[track],
    });
  }, [track, experience, hours, english, method]);

  const methods = [
    { id: "senior", label: "Senior Akademiya",  icon: <Rocket size={16} /> },
    { id: "self",   label: "Özüm öyrənərəm",    icon: <GraduationCap size={16} /> },
    { id: "others", label: "Digər kurslar",      icon: <Briefcase size={16} /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Başlıq */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-3">
            Karyera Kalkulyatoru
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Gələcək maaşını{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">hesabla</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                <path d="M0 5 Q50 0 100 5 Q150 0 200 5" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>{" "}
            <motion.span
              animate={{ rotate: [0, 15, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              🚀
            </motion.span>
          </h2>
        </div>

        {/* Kart */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/80 overflow-hidden">
          <div className="grid lg:grid-cols-2">

            {/* SOL — İnputlar */}
            <div className="p-8 md:p-12 space-y-7 border-r border-slate-100">

              {/* İstiqamət — Dropdown */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Briefcase size={12} className="text-blue-500" /> İstiqamət
                </label>
                <div className="relative">
                  <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full appearance-none p-4 pr-10 rounded-2xl bg-slate-50 border-2 border-slate-100 font-bold text-slate-700 outline-none focus:border-blue-400 cursor-pointer transition-all text-sm"
                  >
                    <option value="" disabled>Seçim edin...</option>
                    <option value="frontend">💻 Frontend Developer</option>
                    <option value="backend">⚙️ Backend Developer</option>
                    <option value="fullstack">🔄 Full Stack Developer</option>
                    <option value="mobile">📱 Mobile Developer</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Öyrənmə üsulu */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Necə öyrənəcəksən?
                </label>
                <div className="flex flex-col gap-2">
                  {methods.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border-2 text-sm font-bold transition-all duration-200 ${
                        method === m.id
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200"
                      }`}
                    >
                      <span className={method === m.id ? "text-blue-500" : "text-slate-400"}>{m.icon}</span>
                      {m.label}
                      {method === m.id && (
                        <span className="ml-auto text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-black">
                          SEÇİLDİ
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Təcrübə */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Təcrübə</label>
                  <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {experience} il
                  </span>
                </div>
                <input
                  type="range" min="0" max="10" value={experience}
                  onChange={(e) => setExperience(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-600"
                  style={{
                    background: `linear-gradient(to right, #2563eb ${experience * 10}%, #f1f5f9 ${experience * 10}%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-slate-300 font-bold">
                  <span>0 il</span><span>5 il</span><span>10 il</span>
                </div>
              </div>

              {/* Həftəlik saat */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                    <Clock size={12} className="text-blue-500" /> Həftəlik məşğul olacaqsan
                  </label>
                  <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {hours} saat
                  </span>
                </div>
                <input
                  type="range" min="1" max="40" value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-blue-600"
                  style={{
                    background: `linear-gradient(to right, #2563eb ${(hours / 40) * 100}%, #f1f5f9 ${(hours / 40) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-slate-300 font-bold">
                  <span>1 saat</span><span>20 saat</span><span>40 saat</span>
                </div>
              </div>

              {/* İngilis dili */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Globe size={12} className="text-blue-500" /> İngilis dili
                </label>
                <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                  {[
                    { id: "weak",   label: "Zəif" },
                    { id: "medium", label: "Orta" },
                    { id: "fluent", label: "Əla"  },
                  ].map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setEnglish(l.id)}
                      className={`flex-1 py-2.5 rounded-xl text-[11px] font-black transition-all ${
                        english === l.id
                          ? "bg-white text-blue-600 shadow-sm border border-slate-100"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* SAĞ — Nəticə */}
            <div className="p-8 md:p-12 bg-slate-50/50 flex flex-col justify-center">
              <div className="space-y-5">

                {/* Aylıq maaş */}
                <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5">
                    <TrendingUp size={12} className="text-emerald-500" /> Aylıq Maaş
                  </p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className={`text-6xl font-black leading-none tracking-tighter transition-colors duration-300 ${!track ? "text-slate-200" : "text-slate-900"}`}>
                      <CountUp end={res.salary} duration={0.8} separator="," />
                    </span>
                    <span className={`text-2xl font-black transition-colors duration-300 ${!track ? "text-slate-200" : "text-blue-500"}`}>₼</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Azərbaycan bazarında ortalama</p>
                </div>

                {/* Kurs haqqını geri qazanma */}
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-3">
                    <Clock size={14} className="text-amber-500" />
                    <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                      Kurs haqqını nə vaxt qazanırsan?
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <p className={`text-3xl font-black transition-colors duration-300 ${!track ? "text-slate-200" : "text-slate-800"}`}>
                      {track ? res.roiMonths : 0}
                    </p>
                    <span className={`text-sm font-bold transition-colors duration-300 ${!track ? "text-slate-200" : "text-slate-400"}`}>
                      ay ərzində
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 font-medium">İlk maaşından etibarən</p>
                </div>

                {/* Vəzifələr */}
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Əldə edə biləcəyin vəzifələr
                  </p>
                  <div className="flex flex-wrap gap-2 min-h-[32px]">
                    {track ? res.roles.map((r) => (
                      <span key={r} className="bg-white text-slate-600 border border-slate-100 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {r}
                      </span>
                    )) : (
                      <>
                        <span className="bg-slate-100 text-slate-300 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider">Developer</span>
                        <span className="bg-slate-100 text-slate-300 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider">Engineer</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Qeyd */}
                <p className="text-[10px] text-slate-300 font-medium leading-relaxed">
                  * Məlumatlar Azərbaycan iş bazarının 2024 ortalamalarına əsaslanır.
                </p>

                {/* CTA */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white py-4 px-6 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-3 group shadow-lg shadow-blue-100">
                  Bu hədəfə başla
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
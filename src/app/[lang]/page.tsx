import { getDictionary } from "@/lib/dictionaries";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeStats } from "@/components/sections/home-stats";
import type { PageProps } from "@/types";

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <HomeHero dict={dict.home.hero} lang={lang} />
      <HomeStats />
      {/* Buraya gələcəkdə deyəcəyin yeni bölmələri əlavə edəcəyik */}
    </>
  );
}
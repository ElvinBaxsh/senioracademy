import { getDictionary } from "@/lib/dictionaries";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeStats } from "@/components/sections/home-stats";
import { HomeAbout } from "@/components/sections/home-about";
import { HomeMethodology } from "@/components/sections/home-methodology";
import { HomeWhyChooseUs } from "@/components/sections/home-why-choose-us";
import { HomeSalaryCalc } from "@/components/sections/home-salary-calc";
import { HomeCTA } from "@/components/sections/home-cta";
import InterviewScene from "@/components/sections/InterviewScene";

import type { PageProps } from "@/types";

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <HomeHero dict={dict.home.hero} lang={lang} />
      
      {/* Yeni vizual səhnəni Hero-dan dərhal sonra yerləşdiririk */}
      {/* <InterviewScene /> */}

      <HomeAbout dict={dict.home.about_section} lang={lang} />
      <HomeMethodology dict={dict.home.methodology} />
      <HomeWhyChooseUs dict={dict.home.why_choose_us} />
      <HomeSalaryCalc dict={dict.home.salary_calc} />
      <HomeCTA dict={dict.home.cta_section} lang={lang} />
      <HomeStats />
    </>
  );
}
import { getDictionary } from "@/lib/dictionaries";
import { AboutContent } from "@/components/sections/about-content";
import type { PageProps } from "@/types";

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <AboutContent title={dict.about.title} />;
}

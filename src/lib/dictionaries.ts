import type { Lang } from "@/types";

export async function getDictionary(lang: Lang) {
  const dict = await import(`@/dictionaries/${lang}.json`);
  return dict.default;
}

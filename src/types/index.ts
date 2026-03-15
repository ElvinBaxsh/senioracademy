export type Lang = "az" | "en" | "ru";

export interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "Başlanğıc" | "Orta" | "İrəliləmiş";
  badge?: string;
}

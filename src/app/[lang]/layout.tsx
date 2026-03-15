import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Lang } from "@/types";
import "../globals.css";

export const metadata: Metadata = {
  title: { template: "%s | Senior.az", default: "Senior.az" },
  description: "Proqramlaşdırma öyrən",
};

export function generateStaticParams() {
  return [{ lang: "az" }, { lang: "en" }, { lang: "ru" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Navbar lang={lang} dict={dict.nav} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict.footer} navDict={dict.nav} />
      </body>
    </html>
  );
}

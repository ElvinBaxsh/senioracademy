import { getDictionary } from "@/lib/dictionaries";
import type { PageProps } from "@/types";

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900">{dict.contact.title}</h1>
      </div>
    </section>
  );
}

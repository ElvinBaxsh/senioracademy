export function AboutContent({ title }: { title: string }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
      </div>
    </section>
  );
}

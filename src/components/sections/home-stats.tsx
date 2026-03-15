const stats = [
  { value: "1000+", label: "Tələbə" },
  { value: "15+",   label: "Kurs" },
  { value: "95%",   label: "Məşğulluq nisbəti" },
  { value: "3+",    label: "İl təcrübə" },
];

export function HomeStats() {
  return (
    <section className="bg-white border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-4xl font-extrabold text-blue-600">{stat.value}</span>
              <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ title, subtitle, centered = false, className }: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col gap-3", centered && "items-center text-center", className)}>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

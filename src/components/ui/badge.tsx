import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "new" | "online";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        variant === "default" && "bg-gray-100 text-gray-600",
        variant === "new"     && "bg-blue-50 text-blue-600 border border-blue-100",
        variant === "online"  && "bg-green-50 text-green-600 border border-green-100",
        className
      )}
    >
      {children}
    </span>
  );
}

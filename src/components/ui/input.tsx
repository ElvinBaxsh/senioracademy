import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        className={cn(
          "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 text-sm placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
          error ? "border-red-400" : "border-gray-200 hover:border-gray-300",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

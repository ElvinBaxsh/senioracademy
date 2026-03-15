import type { Metadata } from "next";
import '../app/globals.css'
export const metadata: Metadata = {
  title: "Senior.az",
  description: "Proqramlaşdırma öyrən",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

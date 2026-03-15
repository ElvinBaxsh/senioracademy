export const NAV_LINKS = [
  { key: "about",    href: " ",    isAnchor: true  }, // ID-yə gedir
  { key: "courses",  href: "/courses",  isAnchor: false }, // Səhifəyə gedir
  { key: "method",   href: "/method",   isAnchor: false },
  { key: "contact",  href: "/contact",  isAnchor: false },
] as const;

export const LOCALES = ["az", "en", "ru"] as const;
export const DEFAULT_LOCALE = "az";

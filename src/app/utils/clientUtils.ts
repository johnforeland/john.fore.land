"use client";

import { usePathname } from "next/navigation";

export function isAboutPage(): Boolean {
  const pathname = usePathname() ?? "";
  return pathname.startsWith("/about");
}

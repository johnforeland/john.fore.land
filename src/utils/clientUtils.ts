"use client";

import { usePathname } from "next/navigation";

export function IsAboutPage(): boolean {
  const pathname = usePathname() ?? "";
  return pathname.startsWith("/about");
}

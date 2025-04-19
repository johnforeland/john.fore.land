"use client";

import { usePathname } from "next/navigation";

export function addPadding(): Boolean {
  const pathname = usePathname() ?? "";
  return !pathname.startsWith("/about");
}

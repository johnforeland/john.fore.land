"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { usePathname } from "next/navigation";
import { Flex } from "@/once-ui/components";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const isAboutPage = pathname.startsWith("/about");

  return (
    <Flex
      position="relative"
      zIndex={0}
      fillWidth
      paddingY={isAboutPage ? "0" : "l"}
      paddingX={isAboutPage ? "0" : "l"}
      horizontal="center"
      flex={1}
    >
      <Flex horizontal="center" fillWidth minHeight="0">
        {children}
      </Flex>
    </Flex>
  );
}

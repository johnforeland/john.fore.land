"use client";

import { Flex } from "@/once-ui/components";
import { IsAboutPage } from "@/utils/clientUtils";

export default function Providers({ children }: { children: React.ReactNode }) {
  const isAbout = IsAboutPage();

  return (
    <Flex
      position="relative"
      zIndex={0}
      fillWidth
      paddingY={isAbout ? "0" : "l"}
      paddingX={isAbout ? "0" : "l"}
      horizontal="center"
      flex={1}
    >
      <Flex horizontal="center" fillWidth minHeight="0">
        {children}
      </Flex>
    </Flex>
  );
}

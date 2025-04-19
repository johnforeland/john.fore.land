"use client";

import { Flex } from "@/once-ui/components";
import { addPadding } from "@/app/utils/clientUtils";

export default function Providers({ children }: { children: React.ReactNode }) {
  const shouldAddPadding = addPadding();

  return (
    <Flex
      position="relative"
      zIndex={0}
      fillWidth
      paddingY={shouldAddPadding && "l"}
      paddingX={shouldAddPadding && "l"}
      horizontal="center"
      flex={1}
    >
      <Flex horizontal="center" fillWidth minHeight="0">
        {children}
      </Flex>
    </Flex>
  );
}

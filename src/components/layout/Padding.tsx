import { Flex } from "@/once-ui/components";

export default function Providers({ children }: { children: React.ReactNode }) {
  // const isAbout = IsAboutPage(); //! not needed, as every layout that needs padding manually adds it

  return (
    <Flex
      position="relative"
      zIndex={0}
      fillWidth
      paddingY="l"
      paddingX="l"
      horizontal="center"
      flex={1}
    >
      <Flex horizontal="center" fillWidth minHeight="0">
        {children}
      </Flex>
    </Flex>
  );
}

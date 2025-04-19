import { Flex } from "@/once-ui/components";

export default async function RootLayout({ children }) {
  return (
    <>
      <Flex position="relative" zIndex={0} fillWidth horizontal="center">
        <Flex horizontal="center" fillWidth minHeight="0">
          {children}
        </Flex>
      </Flex>
    </>
  );
}

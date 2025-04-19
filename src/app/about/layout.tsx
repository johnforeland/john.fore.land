import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Footer, Header, RouteGuard } from "@/components";
import { Column, Flex, ToastProvider } from "@/once-ui/components";

import ParallaxProvider from "@/app/parallax-provider";
import Root from "@/app/root";

import { generateMetadataObjectLayout } from "@/app/utils/utils";

export async function generateMetadata() {
  return generateMetadataObjectLayout();
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Root>
      <ToastProvider>
        <Column
          style={{ minHeight: "100vh" }}
          as="body"
          fillWidth
          margin="0"
          padding="0"
        >
          <Flex fillWidth minHeight="16"></Flex>
          <Header />
          <Flex position="relative" zIndex={0} fillWidth horizontal="center">
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>
                <ParallaxProvider>{children}</ParallaxProvider>
              </RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </ToastProvider>
    </Root>
  );
}

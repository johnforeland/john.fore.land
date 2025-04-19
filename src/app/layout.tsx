import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Footer, Header, RouteGuard } from "@/components";
import { Column, Flex, ToastProvider } from "@/once-ui/components";

import ParallaxProvider from "@/components/layout/Parallax";
import DefaultBackground from "@/components/backgrounds/default-background/DefaultBackground";
import Root from "@/components/layout/Root";

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
          <DefaultBackground />
          <Flex fillWidth minHeight="16"></Flex>
          <Header />
          <RouteGuard>
            <ParallaxProvider>
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
            </ParallaxProvider>
          </RouteGuard>
          <Footer />
        </Column>
      </ToastProvider>
    </Root>
  );
}

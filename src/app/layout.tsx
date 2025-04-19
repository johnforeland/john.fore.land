import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Footer, Header, RouteGuard } from "@/components";
import { Column, Flex, ToastProvider } from "@/once-ui/components";

import ParallaxProvider from "@/components/layout/Parallax";
import DefaultBackground from "@/components/backgrounds/default-background/DefaultBackground";
import Root from "@/components/layout/Root";

import { generateMetadataObjectLayout } from "@/app/utils/utils";
import Padding from "@/components/layout/Padding";

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
              <Padding>{children}</Padding>
            </ParallaxProvider>
          </RouteGuard>
          <Footer />
        </Column>
      </ToastProvider>
    </Root>
  );
}

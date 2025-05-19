import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/resources/globals.css";

import { Footer, Header, RouteGuard } from "@/components/layout";
import { Column, Flex, ToastProvider } from "@/once-ui/components";

import { DefaultBackground } from "@/components/backgrounds";
import { Padding, Root } from "@/components/layout";

import { generateMetadataObjectLayout } from "@/utils/utils";

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
            <Padding>{children}</Padding>
          </RouteGuard>
          <Footer />
        </Column>
      </ToastProvider>
    </Root>
  );
}

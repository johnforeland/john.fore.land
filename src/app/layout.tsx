import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/resources/globals.css";

import { Navigation, RouteGuard } from "@/components/layout";
import { Flex } from "@/once-ui/components";

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
      <DefaultBackground />
      <Flex fillWidth minHeight="16"></Flex>
      <RouteGuard>
        <Padding>{children}</Padding>
      </RouteGuard>
      <Navigation />
    </Root>
  );
}

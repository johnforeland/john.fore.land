import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/resources/globals.css";

import { Navigation, RouteGuard } from "@/components/layout";

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
      <RouteGuard>
        <Padding>{children}</Padding>
      </RouteGuard>
      <Navigation />
    </Root>
  );
}

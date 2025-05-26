import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/resources/globals.css";

import { Navigation, RouteGuard } from "@/components/layout";

import { Root } from "@/components/layout";

import { ColorSplashBackground } from "@/components/backgrounds";
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
      <Navigation />
      <ColorSplashBackground />
      <RouteGuard>{children}</RouteGuard>
    </Root>
  );
}

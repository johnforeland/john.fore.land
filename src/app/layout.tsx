import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/resources/globals.css";

import { Navigation, Root, RouteGuard } from "@/components/layout";
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
      <RouteGuard>{children}</RouteGuard>
    </Root>
  );
}

import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL } from "@/app/resources";

import { person, home } from "@/app/resources/content";
import { Column, Flex, ToastProvider } from "@/once-ui/components";
import ParallaxProvider from "@/app/parallax-provider";
import DefaultBackground from "@/components/backgrounds/default-background/DefaultBackground";
import Root from "@/app/root";

export async function generateMetadata() {
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: home.title,
    description: home.description,
    openGraph: {
      title: `${person.firstName}'s Portfolio`,
      description: "Portfolio website showcasing my work.",
      url: baseURL,
      siteName: `${person.firstName}'s Portfolio`,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
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

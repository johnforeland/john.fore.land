import { EmptyBackground } from "@/components/backgrounds/EmptyBackground";
import { ParallaxProvider } from "@/components/layout";

export default async function RootLayout({ children }) {
  return (
    <>
      <EmptyBackground />
      <ParallaxProvider>{children}</ParallaxProvider>
    </>
  );
}

import { ColorSplashBackground } from "@/components/backgrounds";
import { Padding } from "@/components/layout";

export default async function RootLayout({ children }) {
  return (
    <>
      <ColorSplashBackground />
      <Padding>{children}</Padding>
    </>
  );
}

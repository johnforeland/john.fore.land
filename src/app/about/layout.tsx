import { ParallaxProvider } from "@/components/layout";

export default async function RootLayout({ children }) {
  return (
    <>
      <ParallaxProvider>{children}</ParallaxProvider>
    </>
  );
}

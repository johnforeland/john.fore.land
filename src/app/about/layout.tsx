import ParallaxProvider from "@/components/layout/Parallax";

export default async function RootLayout({ children }) {
  return (
    <>
      <ParallaxProvider>{children}</ParallaxProvider>
    </>
  );
}

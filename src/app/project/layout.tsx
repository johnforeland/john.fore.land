import { NormalBackground } from "@/components/backgrounds";
import { Padding } from "@/components/layout";

export default async function RootLayout({ children }) {
  return (
    <>
      <NormalBackground grid={{ display: false }} mask={{ x: 25, y: 25 }} />
      <Padding>{children}</Padding>
    </>
  );
}

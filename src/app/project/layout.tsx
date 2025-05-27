import { NormalBackground } from "@/components/backgrounds";
import { Padding } from "@/components/layout";

export default async function RootLayout({ children }) {
  return (
    <>
      <NormalBackground />
      <Padding>{children}</Padding>
    </>
  );
}

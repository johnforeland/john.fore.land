import { Padding } from "@/components/layout";

export default async function RootLayout({ children }) {
  return (
    <>
      <Padding>{children}</Padding>
    </>
  );
}

import { ToastProvider } from "@/once-ui/components";

export default async function RootLayout({ children }) {
  return (
    <>
      <ToastProvider>{children}</ToastProvider>
    </>
  );
}

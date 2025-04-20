import { LogoCloud } from "@/once-ui/components";

export default function Title() {
  return (
    <LogoCloud
      columns="1"
      style={{
        transform: "translate(140px, -45px) rotate(-20deg) scale(1.4)",
      }}
      mobileColumns="1"
      rotationInterval={3000}
      limit={1}
      logos={[
        {
          iconSrc: "/images/about/titles/frontend.gif",
          wordmark: false,
        },
        {
          iconSrc: "/images/about/titles/architect.gif",
          wordmark: false,
        },
        {
          iconSrc: "/images/about/titles/devops.gif",
          wordmark: false,
        },
        {
          iconSrc: "/images/about/titles/backend.gif",
          wordmark: false,
        },
        {
          iconSrc: "/images/about/titles/integration.gif",
          wordmark: false,
        },
      ]}
    />
  );
}

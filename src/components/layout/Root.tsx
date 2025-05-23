import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

import { style } from "@/resources";

import { Inter, Source_Code_Pro } from "next/font/google";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
Replace with code for secondary and tertiary fonts
from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={classNames(
        primary.variable,
        secondary?.variable || "",
        tertiary?.variable || "",
        code.variable
      )}
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent || ""}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
    >
      <body className="bg-page">{children}</body>
    </html>
  );
}

import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

import { style } from "@/app/resources";

import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { Flex } from "@/once-ui/components";

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
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable
      )}
    >
      {children}
    </Flex>
  );
}

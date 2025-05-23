"use client";

import { iconLibrary, IconName } from "@/components/shared/icons/Icons";
import classNames from "classnames";
import { forwardRef } from "react";
import { IconType } from "react-icons";

export type IconSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

interface IconProps {
  name: IconName;
  size?: IconSize;
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ name, size = "l", ...rest }, ref) => {
    const IconComponent: IconType | undefined = iconLibrary[name];

    if (!IconComponent) {
      console.warn(`Icon "${name}" does not exist in the library.`);
      return null;
    }

    return (
      <div
        className={classNames(`text-${size}`, "inline-flex")}
        ref={ref}
        {...rest}
      >
        <IconComponent />
      </div>
    );
  }
);

Icon.displayName = "Icon";

"use client";

import { iconLibrary, IconName } from "@/components/shared/icons/icons";
import classNames from "classnames";
import { forwardRef } from "react";
import { IconType } from "react-icons";

interface IconProps {
  name: IconName;
  size?: "xs" | "s" | "m" | "l" | "xl";
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
        className={(classNames(getSize(size)), "inline-flex")}
        ref={ref}
        {...rest}
      >
        <IconComponent className="mr-3" />
      </div>
    );
  }
);

Icon.displayName = "Icon";

function getSize(size: string): classNames.Argument {
  const sizeClasses: Record<string, string> = {
    xs: "text-xs",
    s: "text-sm",
    m: "text-base",
    l: "text-lg",
    xl: "text-xl",
  };

  return sizeClasses[size] || sizeClasses["l"];
}

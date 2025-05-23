"use client";

import { Icon, IconSize } from "@/components/shared/icons/Icon";
import { IconName } from "@/components/shared/icons/Icons";
import Image from "next/image";

interface ButtonProps {
  label: string;
  icon?: IconName;
  image?: string;
  href?: string;
  method?: () => void;
  iconSize?: IconSize;
  imageSize?: number;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  image,
  href,
  method,
  iconSize = "lg",
  imageSize = 30,
}) => {
  function open() {
    if (method) {
      method();
    } else if (href) {
      window.location.href = href;
    } else {
      console.error("No method or href provided for the button.");
    }
  }

  return (
    <button
      onClick={() => open()}
      className="rounded-full border-neutral-700 bg-neutral-900 text-neutral-200 transition-colors hover:opacity-80 cursor-pointer p-3"
    >
      <div className="flex items-center gap-2">
        {icon && <Icon name={icon} size={iconSize} />}
        {image && (
          <Image
            className="rounded-full"
            src={image}
            alt="Avatar"
            width={imageSize}
            height={imageSize}
          />
        )}
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </button>
  );
};

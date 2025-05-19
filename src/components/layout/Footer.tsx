"use client";

import { IconButton } from "@/once-ui/components";
import { person, social } from "@/resources/content";
import { IsAboutPage } from "@/utils/clientUtils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const isAbout = IsAboutPage();

  return (
    <footer
      className={`${
        isAbout ? "bg-[#40255b]" : ""
      } relative w-full p-8 flex flex-col items-center`}
    >
      <div className="max-w-screen-m py-8 px-16 gap-4 flex flex-col justify-between items-center">
        <p className="text-neutral-strong text-sm">
          <span className="text-neutral-weak">© {currentYear} /</span>
          <span className="px-4">{person.name}</span>
        </p>
        <div className="flex gap-4">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              )
          )}
        </div>
      </div>
      <div className="h-20 block sm:hidden"></div>
    </footer>
  );
};

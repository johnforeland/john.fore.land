"use client";

import { usePathname } from "next/navigation";

import { Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { menuItems } from "@/app/resources";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {menuItems.map((item) => (
                <>
                  <ToggleButton
                    key={item.id}
                    className="s-flex-show"
                    prefixIcon={item.icon}
                    href={item.path}
                    selected={pathname === item.path}
                  />
                  <ToggleButton
                    key={item.id}
                    className="s-flex-hide"
                    prefixIcon={item.icon}
                    href={item.path}
                    label={item.label}
                    selected={pathname === item.path}
                  />
                  {item.id == "home" && (
                    <Line key={item.id} vert maxHeight="24" />
                  )}
                </>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

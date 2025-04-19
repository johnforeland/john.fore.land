"use client";

import { usePathname } from "next/navigation";

import { Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/layout/Header.module.scss";

import { routes } from "@/app/resources";
import React from "react";

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
              {routes.map((route) => (
                <React.Fragment key={route.id}>
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon={route.icon}
                    href={route.path}
                    selected={pathname === route.path}
                  />
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon={route.icon}
                    href={route.path}
                    label={route.label}
                    selected={pathname === route.path}
                  />
                  {route.id == "home" && <Line vert maxHeight="24" />}
                </React.Fragment>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

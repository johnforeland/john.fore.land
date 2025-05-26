"use client";

import { usePathname } from "next/navigation";

import { Flex, Line, ToggleButton } from "@/once-ui/components";

import { routes } from "@/resources";
import React from "react";

export const Navigation = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <header
        className="fixed z-50 left-0 right-0 w-full px-12 flex justify-center inset-auto"
        style={{ bottom: "var(--static-space-24)" }}
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
                    size="l"
                    href={route.path}
                    selected={pathname === route.path}
                  />
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon={route.icon}
                    size="l"
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
      </header>
    </>
  );
};

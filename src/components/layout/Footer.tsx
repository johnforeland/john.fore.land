"use client";

import { IsAboutPage } from "@/app/utils/clientUtils";
import { Flex, IconButton, Text } from "@/once-ui/components";
import { person, social } from "@/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const isAbout = IsAboutPage();

  return (
    <Flex
      as="footer"
      style={{
        backgroundColor: isAbout ? "#40255b" : undefined,
      }}
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Flex gap="16">
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
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};

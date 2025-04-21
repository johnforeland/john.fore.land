import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Column,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { home, about, person } from "@/app/resources/content";
import { generateMetadataObject } from "@/app/utils/utils";
import GenerateScript from "@/components/layout/GenerateScript";

export async function generateMetadata() {
  return generateMetadataObject(home.title, home.description);
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <GenerateScript title={home.title} description={home.description} />

      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>

          {/* TODO: add more buttons */}
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      <Projects range={[2]} />
    </Column>
  );
}

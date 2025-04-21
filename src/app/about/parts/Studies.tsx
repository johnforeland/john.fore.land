"use client";

import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { about } from "@/app/resources/content";
import ThesisModal from "./ThesisModal";

export default function Studies({ className }: { className?: string }) {
  return (
    about.studies.display && (
      <div className={className}>
        <Heading
          as="h2"
          id={about.studies.title}
          variant="display-strong-s"
          marginBottom="m"
        >
          {about.studies.title}
        </Heading>
        <Column fillWidth gap="l" marginBottom="40">
          {about.studies.institutions.map((institution, index) => (
            <Column key={`${institution.name}-${index}`} fillWidth gap="4">
              <Flex
                fillWidth
                horizontal="space-between"
                vertical="end"
                marginBottom="4"
              >
                <Text id={institution.name} variant="heading-strong-l">
                  {institution.name}
                </Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {institution.timeframe}
                </Text>
              </Flex>
              <Text variant="heading-default-xs" onBackground="neutral-weak">
                {institution.description}
              </Text>
              {institution.thesis && (
                <ThesisModal
                  name={institution.thesis}
                  url={institution.thesisUrl}
                />
              )}
            </Column>
          ))}
        </Column>
      </div>
    )
  );
}

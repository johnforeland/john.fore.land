import { Column, Flex, Heading, Text, SmartLink } from "@/once-ui/components";
import { about } from "@/app/resources/content";

export default function Studies() {
  return (
    <>
      {about.studies.display && (
        <>
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
                  <Text
                    variant="heading-default-xs"
                    onBackground="neutral-weak"
                  >
                    {institution.timeframe}
                  </Text>
                </Flex>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {institution.description}
                </Text>
                {institution.thesis && (
                  <SmartLink href={institution.thesisUrl} iconSize="xs">
                    {institution.thesis}
                  </SmartLink>
                )}
              </Column>
            ))}
          </Column>
        </>
      )}
    </>
  );
}

import { Column, Flex, Heading, Text, SmartImage } from "@/once-ui/components";
import { about } from "@/app/resources/content";

export default function Skills({ className }: { className?: string }) {
  return (
    about.technical.display && (
      <div className={className}>
        <Heading
          as="h2"
          id={about.technical.title}
          variant="display-strong-s"
          marginBottom="40"
        >
          {about.technical.title}
        </Heading>
        <Column fillWidth gap="l">
          {about.technical.skills.map((skill, index) => (
            <Column key={`${skill}-${index}`} fillWidth gap="4">
              <Text variant="heading-strong-l">{skill.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {skill.description}
              </Text>
              {skill.images && skill.images.length > 0 && (
                <Flex fillWidth paddingTop="m" gap="12" wrap>
                  {skill.images.map((image, index) => (
                    <Flex
                      key={index}
                      border="neutral-medium"
                      radius="m"
                      //@ts-ignore
                      minWidth={image.width}
                      //@ts-ignore
                      height={image.height}
                    >
                      <SmartImage
                        enlarge
                        radius="m"
                        //@ts-ignore
                        sizes={image.width.toString()}
                        //@ts-ignore
                        alt={image.alt}
                        //@ts-ignore
                        src={image.src}
                      />
                    </Flex>
                  ))}
                </Flex>
              )}
            </Column>
          ))}
        </Column>
      </div>
    )
  );
}

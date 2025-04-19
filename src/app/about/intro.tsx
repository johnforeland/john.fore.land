import {
  Column,
  Flex,
  Heading,
  Text,
  Icon,
  IconButton,
  Button,
} from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";

export default function Intro() {
  return (
    <>
      <Column
        id={about.intro.title}
        fillWidth
        minHeight="160"
        vertical="center"
        marginBottom="32"
      >
        <Heading className={styles.textAlign} variant="display-strong-xl">
          {person.name}
        </Heading>
        <Text
          className={styles.textAlign}
          variant="display-default-xs"
          onBackground="neutral-weak"
        >
          {person.role}
        </Text>
        {social.length > 0 && (
          <Flex
            className={styles.blockAlign}
            paddingTop="20"
            paddingBottom="8"
            gap="8"
            wrap
            horizontal="center"
            fitWidth
          >
            {social.map(
              (item) =>
                item.link && (
                  <div key={item.name}>
                    <Button
                      className="s-flex-hide"
                      key={item.name}
                      href={item.link}
                      prefixIcon={item.icon}
                      label={item.name}
                      size="s"
                      variant="secondary"
                    />
                    <IconButton
                      className="s-flex-show"
                      size="l"
                      key={`${item.name}-icon`}
                      href={item.link}
                      icon={item.icon}
                      variant="secondary"
                    />
                  </div>
                )
            )}
          </Flex>
        )}
      </Column>

      {about.intro.display && (
        <Column
          textVariant="body-default-l"
          fillWidth
          gap="m"
          marginBottom="xl"
        >
          {about.intro.description}
        </Column>
      )}
    </>
  );
}

import {
  Column,
  Flex,
  Heading,
  Text,
  Icon,
  IconButton,
  Button,
  LogoCloud,
  InlineCode,
} from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";

export default function Name() {
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
        <LogoCloud
          columns="1"
          style={{
            transform: "translate(140px, -45px) rotate(-20deg) scale(1.4)",
          }}
          mobileColumns="1"
          rotationInterval={3000}
          limit={1}
          logos={[
            {
              iconSrc: "/images/about/titles/frontend.gif",
              wordmark: false,
            },
            {
              iconSrc: "/images/about/titles/architect.gif",
              wordmark: false,
            },
            {
              iconSrc: "/images/about/titles/devops.gif",
              wordmark: false,
            },
            {
              iconSrc: "/images/about/titles/backend.gif",
              wordmark: false,
            },
            {
              iconSrc: "/images/about/titles/integration.gif",
              wordmark: false,
            },
          ]}
        />

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
    </>
  );
}

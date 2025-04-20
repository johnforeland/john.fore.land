import { Flex, IconButton, Button } from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { social } from "@/app/resources/content";

export default function SocialButtons() {
  return (
    social.length > 0 && (
      <Flex
        className={styles.blockAlign}
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
                <IconButton
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
    )
  );
}

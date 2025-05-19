import styles from "@/components/about/about.module.scss";
import { Flex, IconButton } from "@/once-ui/components";
import { social } from "@/resources/content";

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

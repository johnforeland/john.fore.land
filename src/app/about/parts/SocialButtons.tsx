import { Flex, IconButton, Button } from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { social } from "@/app/resources/content";

export default function Title() {
  return (
    social.length > 0 && (
      <Flex
        className={styles.blockAlign}
        style={{ transform: "translateY(-60px)" }}
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
    )
  );
}

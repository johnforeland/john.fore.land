import { Column, Flex, Tag } from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { person, about } from "@/app/resources/content";
import SkyAvatar from "@/components/about/sky-avatar/SkyAvatar";

export default function Photo({ width = 24 }: { width?: number }) {
  return (
    about.avatar.display && (
      <Column
        className={styles.avatar}
        width={width}
        paddingX="l"
        paddingBottom="xl"
        gap="m"
        flex={3}
        horizontal="center"
      >
        <Flex
          direction="column"
          mobileDirection="row"
          vertical="center"
          horizontal="center"
        >
          <div style={{ width: "50px" }}></div>
          <SkyAvatar></SkyAvatar>
          <div style={{ width: "50px" }}></div>
        </Flex>
      </Column>
    )
  );
}

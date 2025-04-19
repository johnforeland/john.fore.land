import { Column, Flex, Tag } from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { person, about } from "@/app/resources/content";
import SkyAvatar from "@/components/about/sky-avatar/SkyAvatar";

export default function Photo() {
  return (
    <>
      {about.avatar.display && (
        <Column
          className={styles.avatar}
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Flex
            gap="128"
            direction="column"
            mobileDirection="row"
            vertical="center"
            horizontal="center"
            fillWidth={true}
          >
            <div style={{ width: "50px" }}></div>
            <SkyAvatar></SkyAvatar>
            <div style={{ width: "50px" }}></div>
          </Flex>

          {person.languages.length > 0 && (
            <Flex wrap gap="8">
              {person.languages.map((language, index) => (
                <Tag key={index} size="l">
                  {language}
                </Tag>
              ))}
            </Flex>
          )}
        </Column>
      )}
    </>
  );
}

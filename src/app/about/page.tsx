import {
  Column,
  Flex,
  Heading,
  SmartImage,
  SmartLink,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import Contents from "./contents";
import Photo from "./photo";
import Intro from "./intro";
import Work from "./work";
import Studies from "./studies";
import Skills from "./skills";
import MountainBackground from "@/components/backgrounds/mountains/MountainBackground";

import { generateMetadataObject } from "@/app/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(about.title, about.description, "about");
}

export default function About() {
  return (
    <MountainBackground>
      <Column maxWidth="m">
        <Contents />
        <Flex fillWidth mobileDirection="column" horizontal="center">
          <Photo />
          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            <Intro />

            <Work />

            <Studies />

            <Skills />
          </Column>
        </Flex>
      </Column>
    </MountainBackground>
  );
}

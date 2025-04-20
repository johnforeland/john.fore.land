import { Column, Flex, Grid } from "@/once-ui/components";

import styles from "@/components/about/about.module.scss";
import { about } from "@/app/resources/content";

import Photo from "./photo";
import Intro from "./intro";
import Work from "./work";
import Studies from "./studies";
import Skills from "./skills";
import MountainBackground from "@/components/backgrounds/mountains/MountainBackground";

import { generateMetadataObject } from "@/app/utils/utils";
import Name from "./name";

export async function generateMetadata() {
  return generateMetadataObject(about.title, about.description, "about");
}

export default function About() {
  return (
    <MountainBackground>
      <Grid
        columns={2}
        mobileColumns={1}
        gap="24"
        padding="24"
        fillWidth={true}
      >
        <Column />
        <Column>
          <Flex className="s-flex-show" height={24} />
          <Name />
          <Intro />
          <Work />
          <Studies />
          <Skills />
        </Column>
      </Grid>
    </MountainBackground>
  );
}

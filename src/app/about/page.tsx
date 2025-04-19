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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              description: about.intro.description,
              url: `https://${baseURL}/about`,
              image: `${baseURL}/images/${person.avatar}`,
              sameAs: social
                .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
                .map((item) => item.link),
              worksFor: {
                "@type": "Organization",
                name: about.work.experiences[0].company || "",
              },
            }),
          }}
        />
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

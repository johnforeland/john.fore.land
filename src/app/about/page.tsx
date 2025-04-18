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

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
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

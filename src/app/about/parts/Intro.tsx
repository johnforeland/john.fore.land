import { Column, Heading } from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { person, about } from "@/app/resources/content";

export default function Intro() {
  return (
    about.intro.display && (
      <>
        <Heading
          as="h2"
          id={about.intro.title}
          variant="display-strong-s"
          marginBottom="m"
        >
          {about.intro.title}
        </Heading>
        <Column
          textVariant="body-default-l"
          fillWidth
          gap="m"
          marginBottom="xl"
        >
          {about.intro.description}
        </Column>
      </>
    )
  );
}

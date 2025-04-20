import { Column, Heading } from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { person, about } from "@/app/resources/content";
import Title from "./Title";
import SocialButtons from "./SocialButtons";

export default function Name() {
  return (
    <>
      <Column
        id={about.intro.title}
        fillWidth
        minHeight="160"
        vertical="center"
        marginBottom="32"
      >
        <Heading className={styles.textAlign} variant="display-strong-xl">
          {person.name}
        </Heading>

        <Title />

        <SocialButtons />
      </Column>
    </>
  );
}

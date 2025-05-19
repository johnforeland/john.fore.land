import { Projects } from "@/components/work";
import { Column } from "@/once-ui/components";
import { work } from "@/resources/content";

import { generateMetadataObject } from "@/app/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(work.title, work.description, "work");
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Projects />
    </Column>
  );
}

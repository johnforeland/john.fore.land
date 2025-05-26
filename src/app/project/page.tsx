import { Projects } from "@/components/project";
import { Column } from "@/once-ui/components";
import { project } from "@/resources/content";

import { generateMetadataObject } from "@/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(project.title, project.description, "project");
}

export default function Project() {
  return (
    <Column maxWidth="m">
      <Projects />
    </Column>
  );
}

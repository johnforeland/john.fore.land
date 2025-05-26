import { Projects } from "@/components/project";
import { project } from "@/resources/content";

import { generateMetadataObject } from "@/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(project.title, project.description, "project");
}

export default function Project() {
  return (
    <div className="max-w-5xl mx-auto pb-22 md:pd-0">
      <Projects />
    </div>
  );
}

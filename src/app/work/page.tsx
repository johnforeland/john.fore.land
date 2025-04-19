import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";

import { generateMetadataObject } from "@/app/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(work.title, work.description, "work");
}

export default function Work() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
    <Column maxWidth="m">
      <Projects />
    </Column>
  );
}

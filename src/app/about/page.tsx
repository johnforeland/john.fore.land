import { about } from "@/resources/content";
import { generateMetadataObject } from "@/utils/utils";

import Skills from "@/app/about/parts/Skills";
import Studies from "@/app/about/parts/Studies";
import Work from "@/app/about/parts/Work";
import { MountainBackground } from "@/components/backgrounds";

export async function generateMetadata() {
  return generateMetadataObject(about.title, about.description, "about");
}

export default function About() {
  return (
    <>
      <div className="flex flex-col flex-grow-3">
        <MountainBackground>
          <div className="flex flex-col gap-6 pb-40 mb-10">
            <Work className="mb-10 text-white" />
            <Studies className="mb-10 text-white" />
            <Skills className="mb-10 text-white" />
          </div>
        </MountainBackground>
      </div>
    </>
  );
}

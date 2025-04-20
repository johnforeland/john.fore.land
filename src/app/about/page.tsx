import { about } from "@/app/resources/content";

import Intro from "./parts/Intro";
import Work from "./parts/Work";
import Studies from "./parts/Studies";
import Skills from "./parts/Skills";
import MountainBackground from "@/components/backgrounds/mountains/MountainBackground";

import { generateMetadataObject } from "@/app/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(about.title, about.description, "about");
}

export default function About() {
  return (
    <MountainBackground>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 col-start-2 mx-10">
          <Intro />
          <Work />
          <Studies />
          <Skills />
        </div>
      </div>
    </MountainBackground>
  );
}

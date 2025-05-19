import { stats } from "@/resources/content";

import { generateMetadataObject } from "@/utils/utils";
import { Terminal } from "./terminal";

export async function generateMetadata() {
  return generateMetadataObject(stats.title, stats.description, "stats");
}

export default function Stats() {
  console.log(process.title);
  return (
    <div className="w-full ">
      <Terminal nodeVersion={process.version} nextVersion={process.title} />
    </div>
  );
}

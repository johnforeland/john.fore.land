import { stats } from "@/resources/content";

import { generateMetadataObject } from "@/utils/utils";
import { Terminal } from "./terminal";

export async function generateMetadata() {
  return generateMetadataObject(stats.title, stats.description, "stats");
}

export default function Stats() {
  console.log(process.title);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-center">
      <div className="col-span-1 md:col-span-2 md:col-start-2">
        <Terminal nodeVersion={process.version} nextVersion={process.title} />
      </div>
    </div>
  );
}

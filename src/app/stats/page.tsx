import { stats } from "@/resources/content";

import { generateMetadataObject } from "@/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(stats.title, stats.description, "stats");
}

export default function Stats() {
  return <div className="max-w-md mx-auto"></div>;
}

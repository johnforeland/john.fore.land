import { gallery } from "@/app/resources/content";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { Flex } from "@/once-ui/components";

import { generateMetadataObject } from "@/app/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(gallery.title, gallery.description, "gallery");
}

export default function Gallery() {
  return (
    <Flex fillWidth>
      <MasonryGrid />
    </Flex>
  );
}

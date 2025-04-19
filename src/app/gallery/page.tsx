import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";

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

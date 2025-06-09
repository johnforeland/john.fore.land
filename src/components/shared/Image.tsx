import fs from "fs/promises";
import NextImage, { ImageProps } from "next/image";
import { getPlaiceholder } from "plaiceholder";
import React from "react";

export default async function Image(
  props: ImageProps & { style?: React.CSSProperties }
) {
  const imageProps = { ...props };

  if (
    imageProps.src &&
    typeof imageProps.src === "string" &&
    imageProps.src.startsWith("/")
  ) {
    imageProps.blurDataURL = await blurImage(imageProps.src);
  }

  return <NextImage {...imageProps} style={imageProps.style} />;
}

async function blurImage(src: string): Promise<string> {
  const buffer = await fs.readFile("public/" + src);
  const { base64 } = await getPlaiceholder(buffer);

  return base64;
}

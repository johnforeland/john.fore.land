import fs from "fs/promises";
import NextImage, { ImageProps } from "next/image";
import { getPlaiceholder } from "plaiceholder";
import React from "react";

export default async function Image(
  props: ImageProps & { style?: React.CSSProperties }
) {
  if (props.src && typeof props.src === "string" && props.src.startsWith("/")) {
    props.blurDataURL = await blurImage(props.src);
  }

  return <NextImage {...props} style={props.style} />;
}

async function blurImage(src: string): Promise<string> {
  const buffer = await fs.readFile(src);
  const { base64 } = await getPlaiceholder(buffer);

  return base64;
}

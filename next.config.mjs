import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "s3.eu-north-1.amazonaws.com/media.fore.land",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default withMDX(nextConfig);

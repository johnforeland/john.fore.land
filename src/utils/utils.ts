import { baseURL } from "@/resources";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  tags: string[];
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  video?: string;
  videoTitle?: string;
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    tags: data.tags || [],
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    video: data.video || "",
    videoTitle: data.videoTitle || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}

interface MetadataObject {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    type: string;
    url: string;
    images: { url: string; alt: string }[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
  [key: string]: unknown;
}

export async function generateMetadataObject(
  title: string,
  description: string,
  path: string = "",
  extraFields?: Record<string, unknown>
): Promise<MetadataObject> {
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    ...extraFields,
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${path}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

import { home } from "@/resources/content";

export async function generateMetadataObjectLayout(): Promise<object> {
  return generateMetadataObject(home.title, home.description, "", {
    metadataBase: new URL(`https://${baseURL}`),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  });
}

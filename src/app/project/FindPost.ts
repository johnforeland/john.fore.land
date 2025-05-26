import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

export type PostMetadata = {
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

  const metadata: PostMetadata = {
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

export function getPost(slug: string) {
  return getPosts(["src", "app", "project", "projects"]).find(
    (post) => post.slug === slug
  );
}

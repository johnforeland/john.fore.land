import { getPosts } from "@/components/project";

export async function GenerateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "project", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

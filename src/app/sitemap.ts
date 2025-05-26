import { getPosts } from "@/components/project";
import { baseURL, validRoutes as routesConfig } from "@/resources";

export default async function sitemap() {
  const projects = getPosts(["src", "app", "project", "projects"]).map(
    (post) => ({
      url: `https://${baseURL}/project/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    })
  );

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route]
  );

  const routes = activeRoutes.map((route) => ({
    url: `https://${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...projects];
}

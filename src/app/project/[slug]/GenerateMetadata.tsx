import { baseURL } from "@/resources";
import { person } from "@/resources/content";
import { PostMetadata } from "../FindPost";

export default function GenerateMetadata({
  post,
  slug,
}: {
  post: PostMetadata;
  slug: string;
}) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          description: post.summary,
          image: post.image
            ? `https://${baseURL}${post.image}`
            : `https://${baseURL}/og?title=${post.title}`,
          url: `https://${baseURL}/project/${slug}`,
          author: {
            "@type": "Person",
            name: person.name,
          },
        }),
      }}
    />
  );
}

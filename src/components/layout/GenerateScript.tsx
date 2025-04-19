import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export default function GenerateScript({
  title,
  description,
  type = "WebPage",
  path,
}: {
  title: string;
  description: string;
  type?: string;
  path?: string;
}) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": type,
          name: title,
          description: description,
          url: `https://${baseURL}/${path}`,
          image: `${baseURL}/og?title=${encodeURIComponent(title)}`,
          publisher: {
            "@type": "Person",
            name: person.name,
            image: {
              "@type": "ImageObject",
              url: `${baseURL}${person.avatar}`,
            },
          },
        }),
      }}
    />
  );
}

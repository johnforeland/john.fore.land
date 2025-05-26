import { baseURL } from "@/resources";

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

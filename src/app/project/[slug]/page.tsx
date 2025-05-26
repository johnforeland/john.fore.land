import { getPosts, PostMetadata } from "@/app/project/FindPost";
import { CustomMDX, Video } from "@/components/project";
import { ScrollToHash } from "@/components/shared";
import {
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  SmartImage,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { notFound } from "next/navigation";
import GenerateMetadata from "./GenerateMetadata";

interface ProjectParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "project", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ProjectParams) {
  const { slug } = await params;
  const post = getPosts(["src", "app", "project", "projects"]).find(
    (post) => post.slug === slug
  );

  if (!post) {
    return;
  }
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  const ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/project/${post.slug}`,
      images: [
        {
          url: ogImage,
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
export default async function Project({ params }: ProjectParams) {
  const { slug } = await params;
  const post = getPosts(["src", "app", "project", "projects"]).find(
    (post) => post.slug === slug
  );

  if (!post) {
    notFound();
  }

  const avatars = getAvatars(post);

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <GenerateMetadata post={post.metadata} slug={post.slug} />
      <Column maxWidth="xs" gap="16">
        <Button
          href="/project"
          variant="tertiary"
          weight="default"
          size="s"
          prefixIcon="chevronLeft"
        >
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.video ? (
        <Video src={post.metadata.video} title={post.metadata.title}></Video>
      ) : (
        post.metadata.images.length > 0 && (
          <SmartImage
            priority
            aspectRatio="16 / 9"
            radius="m"
            alt="image"
            src={post.metadata.images[0]}
          />
        )
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && (
            <AvatarGroup reverse avatars={avatars} size="m" />
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}

function getAvatars(post: {
  metadata: PostMetadata;
  slug: string;
  content: string;
}) {
  return (
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || []
  );
}

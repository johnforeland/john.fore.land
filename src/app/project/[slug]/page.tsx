import { PostMetadata } from "@/app/project/FindPost";
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
import { formatDate } from "@/utils/formatDate";
import { notFound } from "next/navigation";
import { getPost } from "../FindPost";
import GenerateMetadata from "./GenerateMetadata";
import { ProjectParams } from "./ProjectParams";

export { GenerateSharingMetadata } from "./GenerateSharingMetadata";
export { GenerateStaticParams } from "./GenerateStaticParams";

export default async function Project({ params }: ProjectParams) {
  const { slug } = await params;
  const post = getPost(slug);

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

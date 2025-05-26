import { CustomMDX, getAvatars, getPost, Video } from "@/components/project";
import { ProjectParams } from "@/components/project/FindPost";
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
import GenerateMetadata from "./GenerateMetadata";

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
    <section className="mx-auto max-w-3xl flex flex-col gap-8 px-8 pb-22 md:pd-0">
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
    </section>
  );
}

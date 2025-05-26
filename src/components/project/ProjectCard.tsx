"use client";

import { Carousel } from "@/once-ui/components";
import Image from "next/image";
import { Tag } from "./Tag";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  tags: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  tags = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="relative">
        {/* carousel */}
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          indicator="thumbnail"
          images={images.map((image) => ({
            src: image,
            alt: title,
          }))}
        />
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* title and tags */}

        <div className="grid grid-cols-1 gap-4">
          {/* title */}
          <h2 className="text-2xl font-bold leading-tight">{title}</h2>

          {/* tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          )}
        </div>

        {/* avatars + description + links */}
        <div className="grid grid-cols-1 gap-4">
          {/* avatars */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex -space-x-2">
              {avatars?.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar.src}
                  alt={`Avatar ${index + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>

            {/* description */}
            {description?.trim() && (
              <p className="text-sm text-gray-500">{description}</p>
            )}

            {/* open project */}
            <div className="flex flex-wrap gap-6">
              {content?.trim() && (
                <a
                  href={href}
                  className="flex items-center text-sm text-blue-600 hover:underline"
                >
                  Read case study
                  <span className="ml-1">→</span>
                </a>
              )}

              {/* project link */}
              {link && (
                <a
                  href={link}
                  className="flex items-center text-sm text-blue-600 hover:underline"
                >
                  View project
                  <span className="ml-1">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

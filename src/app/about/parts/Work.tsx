import { Flex, SmartImage } from "@/once-ui/components";
import { about } from "@/resources/content";
import { JSX } from "react";

export default function Work({ className }: { className?: string }) {
  return (
    <div className={className} id="work">
      <h2 className="text-4xl font-bold mb-12">{about.work.title}</h2>

      <div className="flex flex-col gap-6 ">
        {/* loop */}
        {about.work.experiences.map((experience, index) => (
          <div key={`${experience.company}-${experience.role}-${index}`}>
            {/* company */}
            <div className="flex w-full justify-between items-end mb-1">
              <p className="text-xl font-semibold">{experience.company}</p>
              <p className="text-sm text-gray-500">{experience.timeframe}</p>
            </div>

            {/* role */}
            <p className="text-base text-blue-500 mb-4">{experience.role}</p>

            {/* list */}
            <ul className="list-inside list-disc">
              {experience.achievements.map(
                (achievement: JSX.Element, index: number) => (
                  <li key={`${experience.company}-${index}`}>{achievement}</li>
                )
              )}
            </ul>

            {/* loop images */}
            {experience.images.length > 0 && (
              <div className="flex w-full pt-4 pl-10 flex-wrap">
                {experience.images.map((image, index) => (
                  <Flex
                    key={index}
                    border="neutral-medium"
                    radius="m"
                    minWidth={image.width}
                    height={image.height}
                  >
                    <SmartImage
                      enlarge
                      radius="m"
                      sizes={image.width.toString()}
                      alt={image.alt}
                      src={image.src}
                    />
                  </Flex>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

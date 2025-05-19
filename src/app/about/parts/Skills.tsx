import { Flex, SmartImage } from "@/once-ui/components";
import { about } from "@/resources/content";

export default function Skills({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold mb-12">{about.technical.title}</h2>

      <div className="flex flex-col gap-6 ">
        {/* loop skills */}
        {about.technical.skills.map((skill, index) => (
          <div key={`${skill}-${index}`}>
            {/* title */}
            <p className="text-xl font-semibold">{skill.title}</p>

            {/* description */}
            <p className="text-sm text-gray-500">{skill.description}</p>

            {/* loop images */}
            {skill.images && skill.images.length > 0 && (
              <div className="flex flex-wrap w-full pt-6 gap-3">
                {skill.images.map((image, index) => (
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

import { Column, Heading } from "@/once-ui/components";
import { about } from "@/app/resources/content";

export default function Intro({ className }: { className?: string }) {
  return (
    about.intro.display && (
      <div className={className}>
        <div className="text-2xl mx-4 md:pr-6 text-gray-500">
          {about.intro.description}
        </div>
      </div>
    )
  );
}

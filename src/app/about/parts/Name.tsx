import { person } from "@/app/resources/content";
import Title from "./Title";
import SocialButtons from "./SocialButtons";

export default function Name({ className }: { className?: string }) {
  return (
    <>
      <div className={className}>
        <div className="grid mb-24">
          {/* Name */}
          <h1 className="text-4xl text-gray-500 font-extrabold flex-shrink">
            {person.name}
          </h1>
          {/* Title */}
          <Title />
          {/* Social Buttons */}
          <div className="mt-8">
            <SocialButtons />
          </div>
        </div>
      </div>
    </>
  );
}

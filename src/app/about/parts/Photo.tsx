import { about } from "@/app/resources/content";
import SkyAvatar from "@/components/about/sky-avatar/SkyAvatar";

export default function Photo({ className }: { className?: string }) {
  return (
    about.avatar.display && (
      <div className={className}>
        <div className="flex flex-col items-center  px-4 pb-6 gap-4 flex-grow-3">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <SkyAvatar />
          </div>
        </div>
      </div>
    )
  );
}

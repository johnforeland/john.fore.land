import NamePhoto from "@/app/about/parts/NamePhoto";
import { Button } from "@/components/shared/Button";
import { Terminal } from "@/components/stats/Terminal";
import { home, person } from "@/resources/content";
import { generateMetadataObject } from "@/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(home.title, home.description);
}

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center h-screen pb-50">
      <div className="col-span-1 md:col-span-2">
        <NamePhoto />
      </div>

      {/* Left side */}

      <div className="col-span-1 md:col-span-3 flex flex-col w-full py-6 gap-4 justify-center">
        <div className="max-w-screen-sm">
          <h1 className="text-4xl font-extrabold leading-tight break-words">
            {home.headline}
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed break-words">
            {home.subline}
          </p>

          <div className="flex gap-2 pt-24">
            {/* about me button */}
            <Button
              label="About me"
              image={person.avatar}
              href="/about"
              imageSize={30}
            />

            {/* stats button */}
            <Terminal />

            <Button label="View my work" icon="work" href="/work" />
          </div>
        </div>
      </div>
    </div>
  );
}

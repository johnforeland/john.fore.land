import { GenerateScript } from "@/components/layout";
import { Button } from "@/components/shared/Button";
import { Terminal } from "@/components/stats/Terminal";
import { home, person } from "@/resources/content";
import { generateMetadataObject } from "@/utils/utils";

export async function generateMetadata() {
  return generateMetadataObject(home.title, home.description);
}

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-md gap-8 items-center">
      <GenerateScript title={home.title} description={home.description} />

      <div className="flex flex-col w-full py-6 gap-4">
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
            <Terminal
              nodeVersion={process.version}
              nextVersion={process.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

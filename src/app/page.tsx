import { GenerateScript } from "@/components/layout";
import { Terminal } from "@/components/stats/Terminal";
import { home, person } from "@/resources/content";
import { generateMetadataObject } from "@/utils/utils";
import Image from "next/image";

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

          {/* about me button */}
          <a
            href="/about"
            className="group inline-flex items-center rounded-full border-neutral-700 bg-neutral-900 text-white transition-colors hover:opacity-80 mr-3 mt-3"
          >
            <Image
              className="rounded-full m-2 p-2"
              src={person.avatar}
              alt="Avatar"
              width={40}
              height={40}
            />
            <span className="ml-3 mr-6 my-2.5 font-semibold">About me</span>
          </a>

          {/* stats button */}
          <Terminal nodeVersion={process.version} nextVersion={process.title} />
        </div>
      </div>
    </div>
  );
}

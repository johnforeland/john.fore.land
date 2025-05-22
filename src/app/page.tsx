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
            id="about"
            href="/about"
            className="group inline-flex items-center px-3 py-1.5 mt-4 rounded-full border border-neutral-700 bg-neutral-900 text-white transition-colors hover:bg-neutral-700"
          >
            <Image
              className="w-7 h-7 rounded-full ml-1"
              src={person.avatar}
              alt="Avatar"
              width={28}
              height={28}
            />
            <span className="ml-5 mr-1 font-semibold">About me</span>
            <svg
              className="ml-1 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
      <Terminal />
    </div>
  );
}

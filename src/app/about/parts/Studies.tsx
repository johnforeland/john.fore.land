"use client";

import { about } from "@/app/resources/content";
import ThesisModal from "./ThesisModal";

export default function Studies({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-4xl font-bold mb-12">{about.studies.title}</h2>

      <div className="flex flex-col gap-6 ">
        {/* loop */}
        {about.studies.institutions.map((institution, index) => (
          <div key={`${institution.name}-${index}`} className="flex flex-col">
            {/* title */}
            <div className="flex w-full justify-between items-end mb-1">
              <p className="text-xl font-semibold">{institution.name}</p>
              <p className="text-sm text-gray-500">{institution.timeframe}</p>
            </div>

            {/* description */}
            <p className="text-sm text-gray-500">{institution.description}</p>

            {/* thesis modal button */}
            <ThesisModal
              name={institution.thesis}
              url={institution.thesisUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

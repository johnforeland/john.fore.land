"use client";

import { about } from "@/app/resources/content";
import ThesisModal from "./ThesisModal";

export default function Studies({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 id={about.studies.title} className="text-4xl font-bold mb-4">
        {about.studies.title}
      </h2>
      <div className="flex flex-col w-full gap-6 mb-10">
        {about.studies.institutions.map((institution, index) => (
          <div
            key={`${institution.name}-${index}`}
            className="flex flex-col w-full gap-1"
          >
            <div className="flex w-full justify-between items-end mb-1">
              <p className="text-xl font-semibold">{institution.name}</p>
              <p className="text-sm text-gray-500">{institution.timeframe}</p>
            </div>
            <p className="text-sm text-gray-500">{institution.description}</p>
            {institution.thesis && (
              <ThesisModal
                name={institution.thesis}
                url={institution.thesisUrl}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

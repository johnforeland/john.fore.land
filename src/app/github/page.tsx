import { GitHubCard } from "@/components/github/GitHubCard";
import { github } from "@/resources/content";

export default function Home() {
  return (
    <div className="columns-1 md:columns-2 gap-6 max-w-6xl mx-auto px-4 md:px-0 pb-6 md:pb-0 overflow-x-hidden">
      {github.repos.map((repo) => (
        <div key={repo.repo} className="mb-6 break-inside-avoid">
          <GitHubCard repo={repo} />
        </div>
      ))}
    </div>
  );
}

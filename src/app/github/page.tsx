import { GitHubCard } from "@/components/github/GitHubCard";
import { github } from "@/resources/content";

export default function Home() {
  return (
    <div className="columns-1 md:columns-2 gap-6 max-w-6xl mx-auto pb-22 md:pd-0">
      {github.repos.map((repo) => (
        <div key={repo.repo} className="mb-6 break-inside-avoid">
          <GitHubCard repo={repo} />
        </div>
      ))}
    </div>
  );
}

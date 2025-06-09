import { GitHubCard } from "@/components/github/GitHubCard";
import { github } from "@/resources/content";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {github.repos.map((repo) => (
        <GitHubCard key={repo.repo} repo={repo} />
      ))}
    </div>
  );
}

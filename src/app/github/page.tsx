import { GitHubCard } from "@/components/github/GitHubCard";
import { github } from "@/resources/content";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto pb-22 md:pd-0">
      {github.repos.map((repo) => (
        <GitHubCard key={repo.repo} repo={repo} />
      ))}
    </div>
  );
}

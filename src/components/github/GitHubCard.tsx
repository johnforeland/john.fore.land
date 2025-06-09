import Image from "@/components/shared/Image";
import { GitHubCardProps } from "./GitHubProps";
import { fetchGitHubRepo } from "./GitHubRepoFetcher";

export async function GitHubCard({ repo }: GitHubCardProps) {
  const repoInfo = await fetchGitHubRepo(repo.username, repo.repo);

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        {repo.image && (
          <Image
            src={repo.image}
            alt={`${repo.username}/${repo.repo}`}
            width={384}
            height={216}
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{repoInfo.name}</h2>
        <p>{repoInfo.description || "No description available."}</p>
        <div className="card-actions justify-end">
          {repo.tags && repo.tags.length > 0
            ? repo.tags.map((tag: string) => (
                <div key={tag} className="badge badge-outline">
                  {tag}
                </div>
              ))
            : repoInfo.language && (
                <div className="badge badge-outline">{repoInfo.language}</div>
              )}
        </div>
      </div>
    </div>
  );
}

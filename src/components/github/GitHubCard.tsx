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
        <h2 className="card-title">
          {repoInfo.name}
          <div className="badge badge-secondary">{repoInfo.language}</div>
        </h2>
        <p>{repoInfo.description || "No description available."}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

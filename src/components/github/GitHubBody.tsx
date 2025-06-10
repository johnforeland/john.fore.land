import { fetchCommitAmount, fetchRepo } from "./GitHubApi";
import { GitHubCardProps } from "./GitHubProps";

export async function GitHubBody({ repo }: GitHubCardProps) {
  const repoInfo = await fetchRepo(repo.owner, repo.repo);
  const commitAmount = await fetchCommitAmount(
    repo.owner,
    repo.repo,
    repo.branch
  );

  function getTags(): import("react").ReactNode {
    return (
      repo.tags &&
      repo.tags.map((tag: string) => (
        <div key={tag} className="badge badge-outline">
          {tag}
        </div>
      ))
    );
  }

  return (
    <div className="card-body">
      <h2 className="card-title">{repoInfo.name}</h2>
      <h3>{repoInfo.organization}</h3>
      <h4>Commits: {commitAmount}</h4>
      {repoInfo.latestRelease && (
        <h4>Latest Release: {repoInfo.latestRelease.name}</h4>
      )}
      <p>{repoInfo.description || "No description available."}</p>
      <div className="card-actions justify-end">{getTags()}</div>
    </div>
  );
}

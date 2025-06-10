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

  function getOwner(): import("react").ReactNode {
    return (
      <a
        href={"https://github.com/" + repoInfo.organization}
        target="_blank"
        rel="noopener noreferrer"
      >
        {repoInfo.organization}
      </a>
    );
  }

  return (
    <div className="card-body">
      <div className="grid grid-cols-2  mb-4">
        <div className="flex items-center">
          <h2 className="card-title">{repoInfo.name}</h2>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex gap-2 flex-wrap">{getTags()}</div>
        </div>
        <h3>{getOwner()}</h3>
      </div>

      <h4>Commits: {commitAmount}</h4>
      {repoInfo.latestRelease && (
        <h4>Latest Release: {repoInfo.latestRelease.name}</h4>
      )}
      <p>{repoInfo.description || "No description available."}</p>
      <div className="card-actions justify-end"></div>
    </div>
  );
}

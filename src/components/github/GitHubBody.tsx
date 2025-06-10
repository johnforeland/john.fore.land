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
        className="link"
        href={"https://github.com/" + repoInfo.organization}
        target="_blank"
        rel="noopener noreferrer"
      >
        {repoInfo.organization}
      </a>
    );
  }

  function getRelease(): import("react").ReactNode {
    return (
      repoInfo.latestRelease && (
        <div className="badge badge-soft badge-secondary">
          {repoInfo.latestRelease.name}
        </div>
      )
    );
  }

  function getCommits(): import("react").ReactNode {
    return (
      commitAmount && (
        <div className="badge badge-soft badge-info">
          {commitAmount} commits
        </div>
      )
    );
  }

  function openLiveDemoButton(): import("react").ReactNode {
    return (
      repo.website && createButton(repo.website, "Live Demo", "btn-accent")
    );
  }

  function openRepoButton(): import("react").ReactNode {
    return createButton(
      `https://github.com/${repo.owner}/${repo.repo}`,
      "Open Repo",
      "btn-info"
    );
  }

  function createButton(
    href: string,
    label: string,
    btn?: string
  ): import("react").ReactNode {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-sm ${btn}`}
      >
        {label}
      </a>
    );
  }

  return (
    <div className="card-body">
      <div className="grid grid-cols-2 mb-4">
        <h2 className="card-title">{repoInfo.name}</h2>
        <div className="flex justify-end items-center">
          <div className="flex gap-2 flex-wrap">{getTags()}</div>
        </div>
        <h3>{getOwner()}</h3>
      </div>
      <p>{repoInfo.description || "No description available."}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-end">
        <div className="flex flex-wrap gap-2">
          {getCommits()}
          {getRelease()}
        </div>
        <div className="flex justify-self-end gap-2">
          {openLiveDemoButton()}
          {openRepoButton()}
        </div>
      </div>
    </div>
  );
}

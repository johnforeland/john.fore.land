import { GitHubBody } from "./GitHubBody";
import { GitHubHeader } from "./GitHubHeader";
import { GitHubCardProps } from "./GitHubProps";

export async function GitHubCard({ repo }: GitHubCardProps) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <GitHubHeader repo={repo} />
      <GitHubBody repo={repo} />
    </div>
  );
}

import Image from "@/components/shared/Image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { fetchCommitAmount, fetchRepo } from "./GitHubApi";
import { GitHubCardProps } from "./GitHubProps";

export async function GitHubCard({ repo }: GitHubCardProps) {
  const repoInfo = await fetchRepo(repo.owner, repo.repo);
  const commitAmount = await fetchCommitAmount(
    repo.owner,
    repo.repo,
    repo.main_branch
  );

  function getHeader(): import("react").ReactNode {
    return repo.image ? getImage() : getCode();
  }

  function getImage(): import("react").ReactNode {
    return (
      repo.image && (
        <Image
          src={repo.image}
          alt={`${repo.owner}/${repo.repo}`}
          width={384}
          height={216}
          style={{ width: "100%", height: "auto" }}
        />
      )
    );
  }

  function getCode(): import("react").ReactNode {
    return (
      <div className="mockup-code w-full">
        <SyntaxHighlighter
          language="yml"
          style={dark}
          customStyle={{ background: "none" }}
        >
          {repo.code}
        </SyntaxHighlighter>
      </div>
    );
  }

  function getTags(): import("react").ReactNode {
    if (!repo.tags || repo.tags.length == 0) {
      return (
        repoInfo.language && (
          <div className="badge badge-outline">{repoInfo.language}</div>
        )
      );
    }

    return repo.tags.map((tag: string) => (
      <div key={tag} className="badge badge-outline">
        {tag}
      </div>
    ));
  }

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>{getHeader()}</figure>
      <div className="card-body">
        <h2 className="card-title">{repoInfo.name}</h2>
        <h3>{repoInfo.organization}</h3>
        <h4>Commits: {commitAmount}</h4>
        <p>{repoInfo.description || "No description available."}</p>
        <div className="card-actions justify-end">{getTags()}</div>
      </div>
    </div>
  );
}

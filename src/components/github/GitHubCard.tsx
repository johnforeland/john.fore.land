import Image from "@/components/shared/Image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GitHubCardProps } from "./GitHubProps";
import { fetchGitHubRepo } from "./GitHubRepoFetcher";

export async function GitHubCard({ repo }: GitHubCardProps) {
  const repoInfo = await fetchGitHubRepo(repo.username, repo.repo);

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {repo.image && (
        <figure>
          <Image
            src={repo.image}
            alt={`${repo.username}/${repo.repo}`}
            width={384}
            height={216}
            style={{ width: "100%", height: "auto" }}
          />
        </figure>
      )}
      {repo.code && (
        <figure>
          <div className="mockup-code w-full">
            <SyntaxHighlighter
              language="yml"
              style={dark}
              customStyle={{ background: "none" }}
            >
              {repo.code}
            </SyntaxHighlighter>
          </div>
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{repoInfo.name}</h2>
        <h3>{repoInfo.organization}</h3>
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

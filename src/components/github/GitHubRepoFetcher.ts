interface RepoInfo {
  name: string;
  html_url: string;
  description: string;
  language: string;
  organization: string;
}

export async function fetchGitHubRepo(
  username: string,
  repo: string
): Promise<RepoInfo> {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const json = await res.json();

  return {
    name: json.name,
    html_url: json.html_url,
    description: json.description,
    language: json.language,
    organization: json.owner.login,
  };
}

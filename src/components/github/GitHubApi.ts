import { graphql } from "@octokit/graphql";

interface RepoInfo {
  name: string;
  html_url: string;
  description: string;
  language: string;
  organization: string;
}

export async function fetchRepo(
  owner: string,
  repo: string
): Promise<RepoInfo> {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

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

export async function fetchCommitAmount(
  owner: string,
  repo: string,
  main_branch: string
): Promise<number> {
  const { repository } = await graphql(
    `
      query ($owner: String!, $repo: String!, $branch: String!) {
        repository(owner: $owner, name: $repo) {
          ref(qualifiedName: $branch) {
            target {
              ... on Commit {
                history(first: 10) {
                  edges {
                    node {
                      oid
                      messageHeadline
                      committedDate
                      author {
                        name
                        email
                      }
                    }
                  }
                  pageInfo {
                    hasNextPage
                    endCursor
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      owner: owner,
      repo: repo,
      branch: main_branch,
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  return repository.ref.target.history.edges.length;
}

import type { GraphQlQueryResponseData } from "@octokit/graphql";
import { graphql } from "@octokit/graphql";
// import gql from "graphql-tag";

interface RepoInfo {
  name: string;
  projectsUrl: string;
  description: string;
  language: string;
  organization: string;
  openGraphImageUrl: string;
  latestRelease?: {
    name: string;
  };
}

export async function fetchRepo(
  owner: string,
  repo: string
): Promise<RepoInfo> {
  const query = `
  query ($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      name
      description
      openGraphImageUrl
      projectsUrl
      owner {
        login
      }
      releases(last: 1) {
        nodes {
          name
        }
      }
    }
  }
`;

  const { repository } = await queryGitHub({ query, owner, repo });

  return {
    name: repository?.name,
    projectsUrl: repository?.projectsUrl,
    description: repository?.description,
    language: repository?.language,
    organization: repository?.owner?.login,
    openGraphImageUrl: repository?.openGraphImageUrl,
    latestRelease: repository?.releases?.nodes?.[0] || undefined,
  };
}

export async function fetchCommitAmount(
  owner: string,
  repo: string,
  branch: string
): Promise<number> {
  const query = `
    query ($owner: String!, $repo: String!, $branch: String!) {
      repository(owner: $owner, name: $repo) {
        ref(qualifiedName: $branch) {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }
  `;

  const { repository } = await queryGitHub({ query, owner, repo, branch });
  return repository.ref.target.history.totalCount;
}

interface GraphQLApiOptions {
  query: string;
  owner: string;
  repo: string;
  branch?: string;
}

export async function queryGitHub<Response = GraphQlQueryResponseData>({
  query,
  owner,
  repo,
  branch,
}: GraphQLApiOptions): Promise<Response> {
  return graphql<Response>(query, {
    owner,
    repo,
    branch,
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
}

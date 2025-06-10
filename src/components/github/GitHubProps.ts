export interface GitHubContent {
  repos: GitHubRepo[];
  label: string;
  title: string;
  description: string;
}

export interface GitHubRepo {
  owner: string;
  repo: string;
  branch: string;
  image?: string;
  website?: string;
  video?: string;
  code?: string;
  tags: string[];
}

export interface GitHubCardProps {
  repo: GitHubRepo;
}

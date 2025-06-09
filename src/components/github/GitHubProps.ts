export interface GitHubContent {
  repos: GitHubRepo[];
  label: string;
  title: string;
  description: string;
}

export interface GitHubRepo {
  username: string;
  repo: string;
  image?: string;
}

export interface GitHubCardProps {
  repo: {
    username: string;
    repo: string;
    image?: string;
  };
}

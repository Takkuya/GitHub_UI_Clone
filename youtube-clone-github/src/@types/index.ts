export interface APIUser {
  avatar_url: string;
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
}

export interface APIRepo {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}

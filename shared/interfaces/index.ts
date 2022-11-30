export interface Job {
  title: string;
  company: string;
  range: string;
  url: string;
  descriptions: Description[];
}

export interface Project {
  name: string;
  techStack: TechStack[];
  description: string;
  liveUrl: string;
  sourceUrl: string;
  imageUrl: string;
}

export interface TechStack {
  name: string;
  path: string;
}

export type Description = string;

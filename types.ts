
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export enum Section {
  Home = 'home',
  Skills = 'skills',
  Projects = 'projects',
  Education = 'education',
  Contact = 'contact'
}

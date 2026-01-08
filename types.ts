
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  technologies: string[];
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  result: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

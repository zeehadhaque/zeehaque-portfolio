export interface ProjectStill {
  url: string;
  caption: string;
  aspectRatio?: string;
}

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface FilmProject {
  id: string;
  slug: string;
  title: string;
  bengaliTitle?: string;
  genre: string;
  format: string;
  runtime: string;
  year: string;
  role: string;
  synopsis: string;
  myRoleDescription: string;
  visualApproach: string;
  technicalSpecs: {
    camera: string;
    aspectRatio: string;
    colorSpace: string;
    lenses: string;
    audio: string;
  };
  posterImage: string;
  bannerImage: string;
  trailerUrl?: string; // YouTube or direct video embed placeholder
  stills: ProjectStill[];
  credits: ProjectCredit[];
  thematicTags: string[];
  awardsOrNotes?: string[];
}

export interface UniverseNode {
  id: string;
  projectId: string;
  title: string;
  bengaliTitle?: string;
  genre: string;
  runtime: string;
  x: number; // percentage coordinate 0-100 on canvas
  y: number; // percentage coordinate 0-100 on canvas
  themes: string[];
  connectedTo: string[]; // project ids of connected nodes
  shortHook: string;
  posterThumb: string;
}

export interface CraftItem {
  number: string;
  title: string;
  summary: string;
  fullDescription: string;
  keyAspects: string[];
  toolsAndMethods: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
}

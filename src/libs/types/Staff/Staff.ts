export interface AcademicContent {
  email: string;
  posts: { position: string; faculty: string[] }[];
  tutorial: string;
}

export interface Academic {
  _id: string;
  name: string;
  link: string;
  units: string[];
  content: AcademicContent;
}

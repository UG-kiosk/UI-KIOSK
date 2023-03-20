export interface MajorContent {
  element: string;
  text: string;
}

export interface Major {
  _id: string;
  name: string;
  url: string;
  content: MajorContent[];
}

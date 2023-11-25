export interface News {
  _id: string;
  leadingPhoto: string;
  photos: string[];
  link: string;
  datetime: string;
  title: string;
  shortBody: string;
  body: string;
  source: NewsSource;
  category: NewsCategory;
}

export type NewsCategory = 'NEWS' | 'STUDENTS' | 'ARCHIVE';
export type NewsSource = 'INF' | 'MFI';

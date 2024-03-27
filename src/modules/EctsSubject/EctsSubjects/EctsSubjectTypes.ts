export interface EctsSubject {
  subject: string;
  lectureHours: number;
  recitationHours: number;
  labsHours: number;
  pass: string;
  ects: number;
}

interface SubjectByYearAndTerm {
  term: number;
  year: number;
  subjects: EctsSubject[];
}

export interface EctsSubjectsResponse {
  degree: string;
  major: string;
  recruitmentYear: number;
  subjectsByYearAndTerm: SubjectByYearAndTerm[];
}

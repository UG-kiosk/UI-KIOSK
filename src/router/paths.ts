export const paths = {
  root: '/',
  login: '/admin-panel/login',
  majors: '/majors',
  majorsById: '/majors/:_id',
  staff: '/staff',
  staffById: '/staff/:_id',
  news: '/news',
  newsById: '/news/:_id',
  ectsDegree: '/ects',
  ectsMajor: 'ects/:degree/',
  ectsYear: 'ects/:degree/:major',
  ectsSubjects: 'ects/:degree/:major/:year',
} as const;

import { Degree } from '../Degree';

export interface Major {
  _id: string;
  name: string;
  url: string;
  content: string;
  degree: Degree;
}

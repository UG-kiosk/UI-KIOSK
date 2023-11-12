export interface Pagination<T> {
  content: T[];
  page: number;
  totalPages: number;
}

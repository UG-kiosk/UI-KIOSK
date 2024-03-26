export interface Pagination<T> {
  content: T[];
  page: number;
  totalPages: number;
}

export interface Pagination<T> {
  content: T[];
  pagination: {
    page: number;
    totalPages: number;
    itemsPerPage: number;
    hasNextPage: boolean;
  };
}

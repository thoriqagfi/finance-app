type Company = {
  id: string;
  name: string;
  short_name: string;
}

type Category = {
  name: string;
}

interface Locations {
  name: string;
}

interface Levels {
  name: string;
  short_name: string;
}

export type Jobs = {
  id: number;
  name: string;
  short_name: string;
  publication_date: string;
  locations: Locations[];
  categories: Category;
  levels: Levels[];
  company: Company;
  contents: HTMLBodyElement;
}

export interface ApiResponse {
  results: Jobs[];
  page_count: number;
  page: number;
}
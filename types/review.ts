import { USER } from "./user";

export interface REVIEW {
  id: string;
  title: string;
  stars_of_design: number;
  stars_of_durability: number;
  stars_of_usefulness: number;
  stars_of_function: number;
  stars_of_easy_to_get: number;
  avarage_star: number;
  good_point_text: string;
  bad_point_text: string;
  reviewer: USER;
  created_at: string;
}

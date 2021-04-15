import { BRAND } from "./brand";
import { CATEGORY } from "./category";
import { REVIEW } from "./review";
import { TAG } from "./tag";

export interface PRODUCT {
  id: string;
  name: string;
  description: string;
  category: CATEGORY;
  price_yen: number;
  brand: BRAND;
  tag: TAG[] | null;
  image: string;
  image_src: string;
  created_at: Date;
  updated_at: Date;
  amazon_link_to_buy: string;
  rakuten_link_to_buy: string;
  mercari_link_to_buy: string;
  number_of_review: number;
  number_of_fav: number;
  avarage_of_review_star: number;
  review: REVIEW[] | null | undefined;
}

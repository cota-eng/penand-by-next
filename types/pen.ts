import { BRAND } from "./brand";
import { CATEGORY } from "./category";
import { TAG } from "./tag";

export interface PEN {
  id: number;
  name: string;
  description: string;
  category: CATEGORY;
  price_yen: number;
  brand: BRAND;
  tag: TAG;
  image: string;
  image_src: string;
  created_at: Date;
  updated_at: Date;
  amazon_link_to_buy: string;
  rakuten_link_to_buy: string;
  mercari_link_to_buy: string;
  number_of_review: number;
  avarage_of_review_star: number;
}

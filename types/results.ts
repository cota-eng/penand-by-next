import { PEN } from "./product";

export interface RESULTS {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: PEN[];
}

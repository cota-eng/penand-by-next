import {
  atom,
} from "recoil";

// interface SAMPLE {
//   default: string;
// }

export const sampleState = atom({
  key: "sample",
  default: "default",
});

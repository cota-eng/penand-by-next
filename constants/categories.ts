interface ConstCategory {
  name: string;
  slug: string;
  img_path: string;
  description: string;
}

export const categories: ConstCategory[] = [
  {
    name: "シャーペン",
    slug: "mechanical",
    img_path: "/category/mechanical.png",
    description: "シャーペン紹介文",
  },
  {
    name: "ボールペン",
    slug: "ballpoint",
    img_path: "/category/ballpoint.png",
    description: "ボールペン紹介文",
  },
  {
    name: "万年筆",
    slug: "fountain",
    img_path: "/category/fountain.png",
    description: "万年筆紹介文",
  },
];

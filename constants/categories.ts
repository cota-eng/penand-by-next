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
    description: "シャープペンシルは英語でmechanical pencilという。芯を繰り出すことで筆記をすることができる。芯の太さも色も非常に多くのバリエーションがある。また、芯を出す機構も様々である。",
  },
  {
    name: "ボールペン",
    slug: "ballpoint",
    img_path: "/category/ballpoint.png",
    description: "ボールペンは英語でballpoint penをいう。インクを出し文字を書くことができる。その機構も様々である。インクの種類も水性、油性、ゲルインク、エマルジョンなど様々であろ、書き味がそれぞれ異なる。",
  },
  {
    name: "万年筆",
    slug: "fountain",
    img_path: "/category/fountain.png",
    description: "万年筆は英語でfountain penという。fountainとは噴水という意味であり、インクが湧き出るイメージに近い。インクは水性だが、インクの入れ方はカードリッジ式、吸引式があり、様々な楽しみ方がある。",
  },
];

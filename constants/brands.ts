interface ConstBrand {
  name: string;
  slug: string;
  official_site_link: string;
  img_path: string;
  description: string;
}

export const brands: ConstBrand[] = [
  {
    name: "カランダッシュ",
    slug: "carandache",
    img_path: "/brand/carandache.png",
    official_site_link: "https://www.carandache.com/jp/",
    description:
      "スイス最大の筆記具メーカーである。創業は1915年。エクリドールなどのシリーズが有名である。",
  },
  {
    name: "ファーバーカステル",
    slug: "faber-castell",
    official_site_link: "https://www.faber-castell.jp/",
    img_path: "/brand/faber-castell.png",
    description:
      "設立が1761年のドイツの筆記具メーカーである。鉛筆の製造が始まりである。",
  },
  {
    name: "ラミー",
    slug: "lamy",
    official_site_link: "https://lamy.jp/",
    img_path: "/brand/lamy.png",
    description:
      "1930年創業のドイツの筆記具メーカーである。限定版も盛んに販売されており、コレクションとしても美しい。",
  },
  {
    name: "オート",
    slug: "ohto",
    official_site_link: "https://ohto.co.jp/",
    img_path: "/brand/ohto.png",
    description:
      "1919年創業の日本の筆記具メーカーである。ボールペンは国内の工場で製造される。",
  },
  {
    name: "ぺんてる",
    slug: "pentel",
    official_site_link: "https://www.pentel.co.jp/",
    img_path: "/brand/pentel.png",
    description:
      "1911年創業の日本の文房具メーカーである。ペン（Pen）を伝える（tell）でPentelである。",
  },
  {
    name: "トンボ",
    slug: "tombow",
    official_site_link: "https://www.tombow.com/",
    img_path: "/brand/tombow.png",
    description:
      "1913年設立の日本の文具メーカーである。ロゴには虫のトンボが描かれている。。",
  },
  {
    name: "ユニ",
    slug: "uni",
    official_site_link: "https://www.mpuni.co.jp/",
    img_path: "/brand/uni.png",
    description:
      "正式な名称は三菱鉛筆であり、上場している数少ない文具メーカーである。設立は1925年である。",
  },
  {
    name: "ゼブラ",
    slug: "zebra",
    official_site_link: "https://www.zebra.co.jp/",
    img_path: "/brand/zebra.png",
    description: "1897年設立の日本の文具メーカーである。芯の折れないデルガードを生み出した会社である。",
  },
];

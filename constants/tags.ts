import { TAG } from "../types/tag";
interface CONSTTAG {
  pk: number;
  name: string;
  slug: string;
  image: string; // provide static url
  //   emoji: string;
}
export const tags: CONSTTAG[] = [
  {
    pk: 1,
    name: "木軸",
    slug: "wood",
    image: "text_ki.png",
  },
  {
    pk: 2,
    name: "高級",
    slug: "rich",
    image: "shopping_brand_goods.png",
  },
  {
    pk: 3,
    name: "安価",
    slug: "low-price",
    image: "money_coin_blank_500_new.png",
  },
  {
    pk: 4,
    name: "ラバー",
    slug: "rubber",
    image: "souji_tebukuro.png",
  },
  {
    pk: 5,
    name: "おしゃれ",
    slug: "fashionable",
    image: "fashion_osyare_middle_man.jpg",
  },
  {
    pk: 6,
    name: "限定",
    slug: "limited",
    image: "kandume_koukyuu.png",
  },
  {
    pk: 7,
    name: "金属",
    slug: "metal",
    image: "omori_kinzoku.png",
  },
  {
    pk: 8,
    name: "ベストセラー",
    slug: "best-seller",
    image: "building_yorozuya.png",
  },
  {
    pk: 9,
    name: "カラフル",
    slug: "colorful",
    image: "flower_rose_rainbow.png",
  },
  {
    pk: 10,
    name: "多機能",
    slug: "functional",
    image: "machine_kyokugen_sagyou_robot.png",
  },
  {
    pk: 11,
    name: "新商品",
    slug: "new",
    image: "pop_new.png",
  },
  {
    pk: 12,
    name: "製図用",
    slug: "draft",
    image: "seizu_pen.png",
  },
  {
    pk: 13,
    name: "多色",
    slug: "full-color",
    image: "lgbt_rainbow_flag.png",
  },

  {
    pk: 14,
    name: "日本",
    slug: "japan",
    image: "hata_kokki_flag_japan.png",
  },
  {
    pk: 15,
    name: "海外",
    slug: "foreign",
    image: "boueki_yunyuu.png",
  },
  {
    pk: 16,
    name: "クリップなし",
    slug: "no-grip",
    image: "building_yorozuya.png",
  },
  {
    pk: 17,
    name: "軽い",
    slug: "light",
    image: "genki_ojiisan_nimotsu.png",
  },
  {
    pk: 18,
    name: "重い",
    slug: "heavy",
    image: "school_textbook_omoi_boy.png",
  },
  {
    pk: 19,
    name: "定番",
    slug: "classic",
    image: "building_yorozuya.png",
  },
  {
    pk: 20,
    name: "ゲル",
    slug: "gel",
    image: "building_yorozuya.png",
  },
  {
    pk: 21,
    name: "折れにくい",
    slug: "",
    image: "building_yorozuya.png",
  },
  {
    pk: 22,
    name: "芯径豊富",
    slug: "variable-bold",
    image: "building_yorozuya.png",
  },
  {
    pk: 23,
    name: "頑丈",
    slug: "tough",
    image: "kagi_u-ji_lock.png",
  },
];

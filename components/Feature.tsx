/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "より高速に閲覧",
    description:
      "どのメーカーのサイトよりも高速にアクセスすることができます。無駄な待ち時間はありません。関連商品もどんどん見ましょう。",
    icon: GlobeAltIcon,
  },
  {
    name: "豊富な検索機能",
    description:
      "名前で検索するのはもちろん、価格帯やメーカー、カテゴリを絞り込んで検索することができます。（名前検索以外は今後利用可能に）",
    icon: ScaleIcon,
  },
  {
    name: "気になる商品をお気に入りに追加（今後利用可能に）",
    description:
      "この商品ほしいな、また後でみたいな、というものを保存できます。スマホでもタブレットでもPCでも、ログインすることで同じデータを確認できます。",
    icon: LightningBoltIcon,
  },
  {
    name: "便利なレビュー機能",
    description:
      "一種類の星で評価するだけではなく、良い点、悪い点などを投稿しましょう。",
    icon: AnnotationIcon,
  },
];

const Feature = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Bista
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            このサイトの特徴
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;

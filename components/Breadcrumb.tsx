import Link from "next/link";
import React from "react";
interface Bread {
  name: string;
  slug: string;
}
interface Props {
  breads: Bread[];
}
const Breadcrumb: React.FC<Props> = ({ breads }) => {
  return (
    <nav className="text-black font-bold ml-5 mt-8" aria-label="Breadcrumb">
      <ol className="flex list-none p-0 flex-wrap">
        <li className="flex items-center">
          <Link href="/">
            <a className="underline font-semibold">Home</a>
          </Link>
        </li>
        {breads &&
          breads.map((bread) => (
            <li className="flex items-center">
              <Link href={`${bread.slug}`}>
                <a className="underline font-semibold">
                  <svg
                    className="fill-current w-3 h-3 mx-3 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                  {bread.name}
                </a>
              </Link>
            </li>
          ))}
      </ol>
    </nav>
  );
};

export default React.memo(Breadcrumb);

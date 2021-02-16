import React from "react";
import Link from "next/link";
import { PEN } from "../types/penType";
const Pen: React.FC<PEN> = ({ id, name }) => {
  return (
    <div>
      <span>{id}</span>
      {" : "}

      <Link href={`/pen/${id}`}>
        <a className="cursor-pointer border-b border-gray-500 hover:bg-gray-300">
          {name}
        </a>
      </Link>
    </div>
  );
};

export default Pen;

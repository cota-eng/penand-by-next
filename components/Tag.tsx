import React from "react";
import { TAG } from "../types/tag";

const Tag: React.FC<TAG> = ({ name }) => {
  return (
    <>
      <span
        className="inline rounded-full text-white 
        bg-black hover:bg-gray-500 duration-300 
        text-xs font-bold 
        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
        opacity-90 hover:opacity-100"
      >
        {name}
      </span>
    </>
  );
};

export default Tag;

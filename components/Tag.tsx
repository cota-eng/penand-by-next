import React from "react";
import { TAG } from "../types/tag";

const Tag: React.FC<TAG> = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Tag;

import React from "react";
import { tags } from "../constants/tags";

const SearchTag: React.FC = () => {
  return (
      <div>{tags && tags.map((tag, index) =>
          <p key={index}>{tag.name}</p>)
      }</div>
  );
};

export default SearchTag;

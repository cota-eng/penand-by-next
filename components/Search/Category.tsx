import { useState } from "react";
import Select from "react-select";

const Category: React.FC = () => {
  const categories = [
    { value: "mechanical-pencil", label: "シャーペン" },
    { value: "ball-point-pen", label: "ボールペン" },
    { value: "fountain-pen", label: "万年筆" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <span>CATEGORY</span>
      <Select
        defaultValue={selectedCategory}
        onChange={setSelectedCategory}
        options={categories}
      />
    </>
  );
};

export default Category;

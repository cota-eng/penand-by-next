import { useState, useEffect } from "react";
import Select from "react-select";
interface CATEGORYPROPS {
  setCategory: (text: string) => void;
}
const Category: React.FC<CATEGORYPROPS> = ({ setCategory }) => {
  const categories = [
    { value: "mechanical-pencil", label: "シャーペン" },
    { value: "ball-point-pen", label: "ボールペン" },
    { value: "fountain-pen", label: "万年筆" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory.value);
    }
  }, [selectedCategory]);
  return (
    <>
      <span>CATEGORY</span>
      <p>{selectedCategory && selectedCategory.value}</p>
      <Select
        defaultValue={selectedCategory}
        onChange={setSelectedCategory}
        options={categories}
      />
    </>
  );
};

export default Category;

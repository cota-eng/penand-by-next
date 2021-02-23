import { useState, useEffect } from "react";
import Select from "react-select";
interface CATEGORYPROPS {
  setCategory: (text: string) => void;
}
const Category: React.FC<CATEGORYPROPS> = ({ setCategory }) => {
  const categories = [
    { value: "", label: "None" },
    { value: "1", label: "シャーペン" },
    { value: "2", label: "ボールペン" },
    { value: "3", label: "万年筆" },
  ];
  const [selectedCategory, setSelectedCategory] = useState({
    value: "",
    label: "None",
  });

  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory.value);
    }
  }, [selectedCategory]);
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

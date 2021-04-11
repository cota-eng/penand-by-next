import { useState, useEffect } from "react";
import Select from "react-select";
interface BRANDPROPS {
  setBrand: (text: string) => void;
}
const Brand: React.FC<BRANDPROPS> = ({ setBrand }) => {
  // 手動で追加（asyncで受け取るのもあり）
  const categories = [
    { value: "", label: "なし" },
    { value: "1", label: "Uni" },
    { value: "2", label: "PILOT" },
    { value: "3", label: "" },
  ];
  const [selectedBrand, setSelectedBrand] = useState({
    value: "",
    label: "None",
  });

  useEffect(() => {
    if (selectedBrand) {
      setBrand(selectedBrand.value);
    }
  }, [selectedBrand]);
  return (
    <>
      <span>Brand</span>
      <Select
        defaultValue={selectedBrand}
        onChange={setSelectedBrand}
        options={categories}
      />
    </>
  );
};

export default Brand;

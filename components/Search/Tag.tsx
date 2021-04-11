import { useState, useEffect } from "react";
import Select from "react-select";
interface TAGPROPS {
  setTag: (text: string) => void;
}
const Tag: React.FC<TAGPROPS> = ({ setTag }) => {
  // TODO: async
  const tags = [
    { value: "", label: "なし" },
    { value: "wood", label: "木軸" },
    { value: "rich", label: "高級" },
  ];
  const [selectedTag, setSelectedTag] = useState({ value: "", label: "なし" });
  useEffect(() => {
    if (selectedTag) {
      setTag(selectedTag.value);
    }
  });
  return (
    <>
      <span className="">TAG</span>
      {selectedTag && <p>{selectedTag.value}</p>}
      <Select
        defaultValue={selectedTag}
        onChange={setSelectedTag}
        options={tags}
        // isMulti
      />
    </>
  );
};

export default Tag;

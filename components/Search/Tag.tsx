import { useState, useEffect } from "react";
import Select from "react-select";
interface TAGPROPS {
  setTag: (text: string) => void;
}
const Tag: React.FC<TAGPROPS> = ({ setTag }) => {
  const tags = [
    { value: "wood", label: "木軸" },
    { value: "rich", label: "高級" },
  ];
  const [selectedTag, setSelectedTag] = useState(null);
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
        isMulti
      />
    </>
  );
};

export default Tag;

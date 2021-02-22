import { useState } from "react";
import Select from "react-select";

const Tag: React.FC = () => {
  const tags = [
    { value: "wood", label: "木軸" },
    { value: "rich", label: "高級" },
  ];
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <>
      <span>TAG</span>
      <Select
        defaultValue={selectedTag}
        onChange={setSelectedTag}
        options={tags}
      />
    </>
  );
};

export default Tag;

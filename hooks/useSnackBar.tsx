import { useEffect, useState } from "react";

const useSnackBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (isActive === true) {
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  }, [isActive]);
  const openSnackBar = (msg = "Something went wrong...") => {
    setMessage(msg);
    setIsActive(true);
  };
  return { isActive, message, openSnackBar };
};

export default useSnackBar;

import axios from "axios";
import { useState, useEffect } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
interface FAVPROPS {
  id: string;
}
const Fav: React.FC<FAVPROPS> = ({ id }) => {
  const [isFav, setIsFav] = useState(false);
  const { isAuthChecking, currentUser } = useCurrentUser();
  useEffect(() => {
    if (!currentUser) {
      return null;
    } else {
      const fetchFav = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/fav/${id}/check/`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("access_token")
              )}`,
            },
          }
        );
        setIsFav(res.data["result"]);
      };
      fetchFav();
    }
  }, []);
 
  const favChange = () => {
    if (!currentUser) {
      return null;
    } else {
      const fetchFav = async () => {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/fav/${id}/fav/`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("access_token")
              )}`,
            },
          }
        );
        console.log(res.data["result"]["is_favorite"]);
        setIsFav(res.data["result"]["is_favorite"]);
      };
      fetchFav();
    }
  };
  return (
    <div>
      <button
        className="text-pink-500 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300"
        onClick={() => favChange()}
      >
        <svg
          className="w-6 h-6"
          fill={isFav ? "red" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Fav;

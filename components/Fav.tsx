import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "../states/loginModalState";
interface FAVPROPS {
  id: string;
}
const Fav: React.FC<FAVPROPS> = ({ id }) => {
  const [isFav, setIsFav] = useState(false);
  //   const [isModalOpen, setisModalOpen] = useState(false);
  const setIsOpen = useSetRecoilState(loginModalState);
  const { isAuthChecking, currentUser } = useCurrentUser();
  const favChange = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("access_token")
        )}`,
      },
    };
    //   setIsLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/fav/${id}/fav/`,
      requestOptions
    );
    // TODO: error handling
    // TODO: forbit to keep pushing
    // 200 =>
    setIsFav(!isFav);
    // 401
    //   setIsLoading(false);
    //   .then(() => null)
    //   .catch(() => null);
  };
  useEffect(() => {
    if (!currentUser) {
      return null;
    } else {
      const fetchFav = async () => {
        await axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/fav/${id}/check/`, {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("access_token")
              )}`,
            },
          })
          .then((res) => setIsFav(res.data["result"]));
      };
      fetchFav();
    }
  }, []);
  return (
    <>
      <div>
        <button
          className="text-pink-500 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300"
          // onClick={() => favChange()}
          onClick={currentUser ? () => favChange() : () => setIsOpen(true)}
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
    </>
  );
};
export default Fav;

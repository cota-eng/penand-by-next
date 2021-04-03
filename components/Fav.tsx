import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
// import Modal from "react-modal";
interface FAVPROPS {
  id: string;
}
const Fav: React.FC<FAVPROPS> = ({ id }) => {
  const [isFav, setIsFav] = useState(false);
  const [isFavModalOpen, setIsFavModalOpen] = useState(false);
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
        onClick={
          currentUser ? () => favChange() : () => setIsFavModalOpen(true)
        }
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
      {isFavModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    <span className="text-lx">いいね</span>
                    するにはログインが必要です
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsFavModalOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    「いいね」をした商品は、プロフィール画像タップしたメニューから一覧できます。
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsFavModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    //   onClick={() => setIsFavModalOpen(false)}
                  >
                    <Link href="/login">Login</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Fav;

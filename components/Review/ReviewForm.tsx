import { useState, useEffect } from "react";
import { REVIEW } from "../../types/review";
import { Rating } from "@material-ui/lab";
import { postReview } from "../../lib/postReview";

interface PENID {
  id: string;
}
// interface POSTREVIEW {
//   id: string;
//   data: {
//     title: string;
//     starsOfDesign: string;
//     starsOfDurability: string;
//     starsOfUsefulness: string;
//     starsOfFunction: string;
//     starsOfEasyToGet: string;
//     goodPointText: string;
//     badPointText: string;
//   };
//   token: string;
// }
const ReviewForm: React.FC<PENID> = ({ id }) => {
  const [title, setTitle] = useState<REVIEW["title"]>("");
  const [starsOfDesign, setStarsOfDesign] = useState<REVIEW["stars_of_design"]>(
    0
  );
  const [starsOfDurability, setStarsOfDurability] = useState<
    REVIEW["stars_of_durability"]
  >(0);
  const [starsOfUsefulness, setStarsOfUsefulness] = useState<
    REVIEW["stars_of_usefulness"]
  >(0);
  const [starsOfFunction, setStarsOfFunction] = useState<
    REVIEW["stars_of_function"]
  >(0);
  const [starsOfEasyToGet, setStarsOfEasyToGet] = useState<
    REVIEW["stars_of_easy_to_get"]
  >(0);
  const [goodPointText, setGoodPointText] = useState<REVIEW["good_point_text"]>(
    ""
  );
  const [badPointText, setBadPointText] = useState<REVIEW["bad_point_text"]>(
    ""
  );
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("access_token")));
  }, []);
  const [token, setToken] = useState<string | undefined>("");
  //   const PostClicked = (e) => {
  //     e.preventDefault();
  //     postReview(
  //       id,
  //       {
  //         title: title,
  //         stars_of_design: starsOfDesign,
  //         stars_of_durability: starsOfDurability,
  //         stars_of_usefulness: starsOfUsefulness,
  //         stars_of_function: starsOfFunction,
  //         stars_of_easy_to_get: starsOfEasyToGet,
  //         good_point_text: goodPointText,
  //         bad_point_text: badPointText,
  //       },
  //       token
  //     );
  //     setTitle("");
  //     setStarsOfDesign(0);
  //     setStarsOfDurability(0);
  //     setStarsOfFunction(0);
  //     setStarsOfUsefulness(0);
  //     setStarsOfEasyToGet(0);
  //     setGoodPointText("");
  //     setBadPointText("");
  //   };
  return (
    <div className="flex mx-auto items-center justify-center shadow-lg mt-56  mb-4 max-w-lg">
      <form
        className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
        // onSubmit={PostClicked}
      >
        <div className="flex flex-col flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <p>デザイン性：{starsOfDesign}</p>
            <Rating
              name="starsOfDesign"
              value={starsOfDesign}
              onChange={(e, n) => {
                setStarsOfDesign(n);
              }}
            />
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <p>耐久性：{starsOfDurability}</p>
            <Rating
              name="starsOfDurability"
              value={starsOfDurability}
              onChange={(e, n) => {
                setStarsOfDurability(n);
              }}
            />
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <p>利便性：{starsOfUsefulness}</p>
            <Rating
              name="starsOfUsefulness"
              value={starsOfUsefulness}
              onChange={(e, n) => {
                setStarsOfUsefulness(n);
              }}
            />
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <p>機能性：{starsOfFunction}</p>
            <Rating
              name="starsOfFunction"
              value={starsOfFunction}
              onChange={(e, n) => {
                setStarsOfFunction(n);
              }}
            />
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <p>入手性：{starsOfEasyToGet}</p>
            <Rating
              name="starsOfEasyToGet"
              value={starsOfEasyToGet}
              onChange={(e, n) => {
                setStarsOfEasyToGet(n);
              }}
            />
          </div>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Title</h2>

            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></textarea>
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Good Point</h2>
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Good Point"
              required
              onChange={(e) => setGoodPointText(e.target.value)}
              value={goodPointText}
            ></textarea>
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Good Point</h2>
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Bad Point"
              required
              onChange={(e) => setBadPointText(e.target.value)}
              value={badPointText}
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start  px-3">
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                className="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs md:text-sm pt-px">
                ミスがないか確認しましょう
              </p>
            </div>
            <div className="-mr-1">
              <button
                type="submit"
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Post Comment"
                // onClick={() => PostClicked}
              >
                投稿する(現在利用できません)
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

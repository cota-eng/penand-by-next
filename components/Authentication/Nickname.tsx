import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PROFILE } from "../../types/profile";
import ClipLoader from "react-spinners/ClipLoader";
import { CURRENTUSER } from "../../types/currentUser";
type Inputs = {
  nickname: string;
  twitter_account: string;
};
interface Props {
  currentUser: CURRENTUSER;
}
const Nickname: React.FC<Props> = ({currentUser}) => {
  const [nickname, setNickname] = useState<string | null | undefined>("");
  const [twitterAccount, setTwitterAccount] = useState<
    string | null | undefined
  >("");
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = async ({ nickname, twitterAccount }) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("access_token")
        )}`,
      },
      body: JSON.stringify({
        nickname: nickname,
        twitter_account: twitterAccount,
      }),
    };
    setIsLoading(true);
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/profile/${currentUser.id}/`,
      requestOptions
    );
    setIsLoading(false);

    //   .then(() => null)
    //   .catch(() => null);
  };
  useEffect(() => {
    if (!currentUser) {
      return null;
    } else {
      const fetchNickname = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/profile/${currentUser.id}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("access_token")
              )}`,
            },
          }
        );
        console.log(res);
        setNickname(res.data["nickname"]);
        setTwitterAccount(res.data["twitter_account"]);
      };
      fetchNickname();
    }
  }, []);
  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2">
            nickname
          </label> */}
          <input
            name="nickname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // type="text"
            // placeholder="Username"
            defaultValue={nickname}
            ref={register({ required: true })}
          />
          {errors.nickname && <span>This field is required</span>}
          <hr />
          <input
            name="twitterAccount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            defaultValue={twitterAccount}
            ref={register({ required: true })}
          />
          {errors.twitter_account && <span>This field is required</span>}
        </div>
        <div className="flex items-center justify-between">
          {isLoading ? (
            // <input className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right" />
            <ClipLoader color={"red"} loading={isLoading} size={20} />
          ) : (
            <input
              className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
              type="submit"
            >
              {/* <svg
              fill="none"
              className="w-4 text-white mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
              </svg>
            Update */}
            </input>
          )}
        </div>
      </form>
    </div>
  );
};

export default Nickname;

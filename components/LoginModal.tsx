import { useState, useEffect } from "react";
import Link from "next/link";
import GoogleSocialAuth from "./Authentication/GoogleSocialAuth";
import { loginModalState } from "../states/loginModalState";
import { useRecoilState, useRecoilValue } from "recoil";
interface PROPS {
  isOpen: boolean;
}

// const LoginModal: React.FC<PROPS> = () => {
const LoginModal: React.FC = () => {
  const [isOpen, setisOpen] = useRecoilState(loginModalState);
  return (
    <>
      <div className="justify-center items-center flex  overflow-y-auto fixed inset-0 z-50 ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">ログイン</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setisOpen(false)}
              >
                <span className=" text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                グーグルアカウントを使ってログインします。
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid  rounded-b">
              <button
                className="text-red-500  border-red-300 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setisOpen(false)}
              >
                Close
              </button>
              <GoogleSocialAuth />
              {/* <button
                className="bg-blue-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                //   onClick={() => setisModalOpen(false)}
              >
                <Link href="/login">Login</Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    //   )}
    // </>
  );
};

export default LoginModal;

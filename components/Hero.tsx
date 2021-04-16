import { useState, useEffect } from "react";
import useSnackBar from "../hooks/useSnackBar";
import SnackBar from "./SnackBar";
import Link from "next/link";
import LoginModal from "./LoginModal";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginModalState } from "../states/loginModalState";
const Hero = () => {
  const { isActive, message, openSnackBar } = useSnackBar();
  const _showSnackbarHandler = () => {
    openSnackBar("Did you click the button?");
  };
  //   const [isModalOpen, setisModalOpen] = useState(false);
  const setIsModalOpen = useSetRecoilState(loginModalState);
  return (
    <>
      <div className="pt-24 px-10 mx-auto">
        {/* <button onClick={_showSnackbarHandler}>
          Click To Open To Snackbar
        </button>
        <SnackBar isActive={isActive} message={message} /> */}
        <div className="container px-3">
          <div className="flex flex-col w-full md:w-4/5  text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              より正確なレビューをしませんか？
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">Bista</h1>
            <p className="leading-normal text-2xl mb-8">
              「より役に立つ文房具レビューのできるサイトです」
            </p>
            <div className="flex">
              <button
                className="mr-5  text-center w-40  bg-blue-100 text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                onClick={() => setIsModalOpen(true)}
              >
                Login
              </button>
              <button className=" text-center w-40  bg-gray-50 text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                <Link href="/about">About</Link>
              </button>
            </div>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;

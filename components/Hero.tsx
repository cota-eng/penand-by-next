import React from "react";
import useSnackBar from "../hooks/useSnackBar";
import SnackBar from "./SnackBar";
import Link from "next/link";
const Hero = () => {
  const { isActive, message, openSnackBar } = useSnackBar();
  const _showSnackbarHandler = () => {
    openSnackBar("Did you click the button?");
  };
  return (
    <>
      <div className="pt-24">
        <button onClick={_showSnackbarHandler}>
          Click To Open To Snackbar
        </button>
        <SnackBar isActive={isActive} message={message} />
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              より正確なレビューをしませんか？
            </p>
            <button className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 bg-blue-500  hover:py-10 text-white font-bold py-2 px-4 rounded ">
              Hover me
            </button>
            <h1 className="my-4 text-5xl font-bold leading-tight">PENAND</h1>
            <p className="leading-normal text-2xl mb-8">
              「より役に立つ文房具レビューのできるサイトです」
            </p>
            <Link href="/login/">
              <a className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                LOGIN
              </a>
            </Link>
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

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AvatarMenu from "./Authentication/AvatarMenu";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "../states/loginModalState";
import { CURRENTUSER } from "../types/currentUser";
interface Props {
  currentUser: CURRENTUSER;
}
const NavBar: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const setIsOpen = useSetRecoilState(loginModalState);
  const { isAuthChecking, currentUser } = useCurrentUser();
  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
    } else {
      setAvatar(null);
    }
  }, []);
  return (
    <>
      <header className="z-50 fixed bg-gray-300 w-screen text-gray-600 body-font">
        <div className="container mx-auto p-5 flex flex-wrap    justify-between md:flex-row items-center">
          <div className=" ">
            <Link href="/">
              <a className="flex flex-row title-font font-medium items-center text-gray-900 ">
                {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg> */}
                <span className="ml-1 text-white text-2xl">Bista</span>
              </a>
            </Link>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/category">
              <a
                data-testid="context-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                category
              </a>
            </Link>
          </nav>

          {currentUser && <AvatarMenu />}
          {!currentUser && (
            <button
              className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 ml-2 rounded "
              onClick={() => setIsOpen(true)}
            >
              Login
            </button>
          )}
          <Link href="/search">
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-white-100 rounded text-base  md:mt-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>

  );
};

export default NavBar;

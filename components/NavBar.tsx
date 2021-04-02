import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AvatarMenu from "./Authentication/AvatarMenu";
import { useCurrentUser } from "../hooks/useCurrentUser";
const NavBar = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const { isAuthChecking, currentUser } = useCurrentUser();
  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
    } else {
      setAvatar(null);
    }
  }, []);
  return (
    <header className="z-50 fixed bg-gray-800 w-screen text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span className="ml-3 text-white text-xl">Dista</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/product">
            <a
              data-testid="context-nav"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
            >
              Pen
            </a>
          </Link>
          <Link href="/brand">
            <a
              data-testid="context-nav"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
            >
              brand
            </a>
          </Link>
          <Link href="/category">
            <a
              data-testid="context-nav"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
            >
              category
            </a>
          </Link>
        </nav>

        <Link href="/search">
          <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-white-100 rounded text-base mt-4 md:mt-0">
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
        <AvatarMenu />
      </div>
    </header>
  );
};

export default NavBar;

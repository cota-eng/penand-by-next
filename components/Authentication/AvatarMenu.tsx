import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@tailwindui/react";

const AvatarMenu = ({}) => {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!container.current?.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!show) return;

      if (event.key === "Escape") {
        setShow(false);
      }
    };

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [show]);

  return (
    <div ref={container} className="relative">
      <button
        className="menu focus:outline-none focus:shadow-solid "
        onClick={() => setShow(!show)}
      >
        <img
          className="w-10 h-10 rounded-full"
          src="https://picsum.photos/seed/picsum/200/300"
        />
      </button>

      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="origin-top-right absolute text-white right-0 w-48 py-2 mt-1 bg-gray-800 rounded shadow-md">
          <Link href="/account/nickname">
            <a className="block px-4 py-2 text-white hover:bg-green-500 hover:text-green">
              nickname
            </a>
          </Link>
          <Link href="/">
            <a className="block px-4 py-2 text-white-100 hover:bg-green-500 hover:text-green-100">
              Logout
            </a>
          </Link>
        </div>
      </Transition>
    </div>
  );
};

export default AvatarMenu;

import { animateScroll as scroll } from "react-scroll";

const ScrollToTop: React.FC = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <button
        className="z-10 focus:outline-none fixed bottom-10 right-10  bg-yellow-200 w-10 h-10 rounded-full "
        onClick={scrollTop}
      >
        <svg
          className="w-8 h-8 animate-bounce fixed bottom-10 right-11 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default ScrollToTop;

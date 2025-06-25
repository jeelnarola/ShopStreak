import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
      const [visible, setVisible] = useState(false);

  // Show only after scroll
  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // <- smooth scrolling here
    });
  };
  return (
    <>
    {
        visible && (

            <div className="fixed bottom-6 right-6 z-50 animate-bounce cursor-pointer group cursor-pointer">
      <div className="p-[6px] rounded-lg border-2 border-red-500 bg-white transition-all duration-300 group-hover:border-transparent group-hover:scale-110 cursor-pointer">
        <button
          onClick={scrollToTop}
          className="bg-red-500 text-white p-3 rounded-md transition-all duration-300 cursor-pointer"
        >
          <MdKeyboardDoubleArrowUp className="text-white text-2xl" />
        </button>
      </div>
    </div>   
        )
    }
    </>
  )
}

export default ScrollToTopButton
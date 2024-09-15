"use client";

import { MdOutlineCircle } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useColor } from "../context/color_context";
import { useSidebar } from "../context/sidebar_context";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  const { setSelectedColor, selectedColor } = useColor();
  const sidebarLinks = ["purple", "red", "blue", "green"];

  return (
    <>
      {isSidebarOpen ? (
        <div className="bg-white font-semibold h-[85vh] p-5 rounded-lg">
          <div className="flex items-center justify-between mb-5">
            <p></p>
            <p className="text-center ">Sort By</p>
            <IoIosCloseCircleOutline className="text-xl cursor-pointer" onClick={toggleSidebar} />
          </div>

          <div>
            {sidebarLinks.map((color) => {
              const isActive = selectedColor === color;
              return (
                <div
                  key={color}
                  className={`
                    text-left flex justify-between text-sm rounded-lg p-3 my-3 capitalize 
                    cursor-pointer transition-colors duration-200 ease-in-out
                    ${isActive ? "bg-sec text-white" : "bg-pri text-sec hover:bg-sec hover:text-white"}
                  `}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                  {isActive ? (
                    <FaRegDotCircle className="text-priText" />
                  ) : (
                    <MdOutlineCircle className="text-priText" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <button className="fixed top-5 left-5 p-2 bg-gray-600 rounded-full" onClick={toggleSidebar}>
            <GiHamburgerMenu className="text-xl cursor-pointer" onClick={toggleSidebar} />
          </button>
        </>
      )}
    </>
  );
}

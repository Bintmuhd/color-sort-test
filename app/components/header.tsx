// import { useState } from "react";
// import Button from "./button";
// import { BsBroadcast } from "react-icons/bs";
// import { BiSolidSearch } from "react-icons/bi";
// import { IoIosArrowUp } from "react-icons/io";
// import SortModal from "./sort_modal";
// import { useSidebar } from "../context/sidebar_context";

// export default function Header() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div className="bg-white p-5 w-12/12 md:w-9/12 flex gap-3 rounded-lg">

//         <Button text="Sample" icon={<BsBroadcast />} color="text-sec" bg="bg-pink-100" />

//         <div className="flex items-center gap-1 bg-gray-100 w-full md:pr-5 pl-5 rounded-lg">
//           <BiSolidSearch className="text-2xl text-gray-400" />
//           <input type="text" placeholder="Search Color" className="bg-gray-100 font-bold text-sm uppercase" />
//         </div>
//       </div>

//       <main className="py-3 flex gap-3">
//         <button
//           className="text-priText flex items-center rounded-lg font-bold text-xs gap-1 px-6 py-2 bg-sec"
//           onClick={openModal}
//         >
//           Sort By <IoIosArrowUp />
//         </button>
//         <Button text="Light" color="text-sec" bg="bg-white" />
//         <Button text="Dark" color="text-sec" bg="bg-white" />
//       </main>

//       {isModalOpen && <SortModal closeModal={closeModal} />}
//     </>
//   );
// }

import { useState } from "react";
import Button from "./button";
import { BsBroadcast } from "react-icons/bs";
import { BiSolidSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowUp } from "react-icons/io";
import SortModal from "./sort_modal";
import { useSidebar } from "../context/sidebar_context";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`md:w-[50rem] transition-all duration-300 `}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-3">
          {!isSidebarOpen && (
            <GiHamburgerMenu className="text-xl cursor-pointer flex-shrink-0" onClick={toggleSidebar} />
          )}
          <div className="bg-white p-5 w-12/12 md:w-9/12 flex gap-3 rounded-lg">
            <Button text="Sample" icon={<BsBroadcast />} color="text-sec" bg="bg-pink-100" />
            <div className="flex items-center gap-1 bg-gray-100 w-full pr-5 pl-5 rounded-lg">
              <BiSolidSearch className="text-2xl text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search Color"
                className="bg-gray-100 font-bold text-sm uppercase w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            className="text-priText flex items-center rounded-lg font-bold text-xs gap-1 px-6 py-2 bg-sec"
            onClick={openModal}
          >
            Sort By <IoIosArrowUp />
          </button>
          <Button text="Light" color="text-sec" bg="bg-white" />
          <Button text="Dark" color="text-sec" bg="bg-white" />
        </div>
      </div>

      {isModalOpen && <SortModal closeModal={closeModal} />}
    </div>
  );
}

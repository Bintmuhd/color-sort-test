import { useColor } from "../context/color_context";
import { MdOutlineCircle } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface sortModalProps {
  closeModal: () => void;
}

const SortModal: React.FC<sortModalProps> = ({ closeModal }) => {
  const { setSelectedColor, selectedColor } = useColor();
  const sidebarLinks = ["purple", "red", "blue", "green"];
  return (
    <div className="fixed inset-0 flex items-end justify-center z-50 md:hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-40" onClick={closeModal}></div>

      <div className="relative bg-white p-5 w-full rounded-t-3xl z-50">
        <div className="flex justify-between items-center"></div>

        <div className="bg-white font-semibold h-[40vh] p-3 rounded rounded-lg">
          <div className="flex items-center justify-between mb-10">
            <p></p>
            <p className="text-center ">Sort By</p>
            <IoIosCloseCircleOutline onClick={closeModal} className="text-4xl " />
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
      </div>
    </div>
  );
};

export default SortModal;

import Link from "next/link";
import Button from "./button";
import { GrLocation } from "react-icons/gr";
import { PiMapTrifoldBold } from "react-icons/pi";
import { colorData } from "../data/color_data";
import { useColor } from "../context/color_context";

interface ColorCardProps {
  title: string;
  description: string;
  detail: string;
  linkHref: string;
  linkText: string;
  colorCode?: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ title, description, colorCode, detail, linkText, linkHref }) => {
  const { selectedColor } = useColor();
  return (
    <main className="w-[550px] flex-shrink-0">
      <section className="card-img rounded p-4 h-32 rounded-t-3xl">
        <div className="float-right">
        <Button bg="bg-white" text={title} color={`text-[${colorCode}]`} />
        </div>
      </section>
      <div className="bg-white p-5 rounded rounded-b-3xl">
        <section className="flex justify-between gap-10 items-center">
          <div>
            <h1 className="font-bold">Colors {title}</h1>
            <p className="text-xs font-bold text-gray-500">{description}</p>
          </div>
          <Button text="View Color" color="text-sec" bg="bg-pink-100" />
        </section>
        <hr className="border-b-2 border-gray-300 mt-4" />
        <section>
          <Link href={linkHref} className="text-xs flex items-center text-sec underline font-semibold">
            <GrLocation className="text-gray-800" />
            {linkText}
          </Link>
          <p className="text-xs py-3 font-semibold  flex items-center text-gray-500">
            <PiMapTrifoldBold /> {detail}
          </p>
        </section>
      </div>
    </main>
  );
};

export default ColorCard;

import { colorData } from "../data/color_data";
import ColorCard from "./color_card";

export default function CardList() {
  return (
    <section className="absolute bottom-10 w-full max-w-[calc(100vw-2rem)]">
      <p className="font-extrabold text-2xl py-3">My Color List</p>
      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex gap-6 w-max pr-6">
          {colorData.map((color, index) => (
            <ColorCard
              key={index}
              title={color.title}
              description={color.description}
              detail={color.detail}
              linkHref={color.linkHref}
              linkText={color.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

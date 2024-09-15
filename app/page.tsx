"use client";
import CardList from "./components/card_list";
import { useColor } from "./context/color_context";

export default function Home() {
  const { selectedColor } = useColor();
  return (
    <div>
      <section>
        <h1 className="uppercase my-10">{selectedColor}</h1>
      </section>
      <CardList />
    </div>
  );
}

import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  bg: string;
  color: string;
  icon?: ReactNode
}

const Button: React.FC<ButtonProps> = ({ text, bg, color, icon }) => {
  return <button className={`rounded rounded-lg font-bold text-xs py-2 flex items-center gap-1 px-6 ${color} ${bg}`}>{icon}{text}</button>;
};

export default Button;

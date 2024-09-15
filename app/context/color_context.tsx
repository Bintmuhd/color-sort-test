"use client"
import React, { createContext, useState, useContext, ReactNode } from "react";

type ColorContextType = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState("purple");

  return <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>{children}</ColorContext.Provider>;
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context
};

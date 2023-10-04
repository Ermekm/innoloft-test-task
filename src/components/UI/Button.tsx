import { type ButtonHTMLAttributes, type FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="px-[10px] py-[5px] bg-primary text-white rounded-[6px]">
      {children}
    </button>
  );
};

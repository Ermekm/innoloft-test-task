import { type ButtonHTMLAttributes, type FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  let classes = "px-[10px] py-[5px] rounded-[6px] ";
  if (className !== null) classes += className;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

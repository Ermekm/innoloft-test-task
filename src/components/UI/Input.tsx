import { type InputHTMLAttributes, type FC } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      type="text"
      className="border-[1px] border-neutral rounded-[6px] w-full px-[10px] py-[5px]"
    />
  );
};

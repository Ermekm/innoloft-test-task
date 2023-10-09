import { type SelectHTMLAttributes, type FC } from "react";
import { type IBaseEntity } from "../../types/Product";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IBaseEntity[];
}

export const Select: FC<SelectProps> = ({ options, defaultValue, ...rest }) => {
  return (
    <select
      {...rest}
      id="countries"
      className="border-[1px] border-neutral rounded-[6px] w-full px-[10px] py-[5px]"
      value={defaultValue}
    >
      {options.map((el) => (
        <option value={el.id} key={el.id}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

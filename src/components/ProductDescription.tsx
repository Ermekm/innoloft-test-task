import { type FC } from "react";
import { EditorView } from "./Editor/EditorView";

import patent from "../assets/icons/patent.svg";
import { type IProductType } from "../types/Product";

interface ProductDescriptionProps {
  name: string;
  description: string;
  picture: string;
  type: IProductType;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
  name,
  description,
  picture,
  type,
}) => {
  return (
    <div>
      {/* image start */}
      <div className="relative rounded-tl-md overflow-hidden">
        <div className="">
          <img className="w-[100%]" src={picture} alt="product_img " />
        </div>
        <div className="flex absolute top-0 left-0  rounded-br-md overflow-hidden">
          <div className="bg-primary w-[40px] flex justify-center items-center">
            <img src={patent} alt="" />
          </div>
          <div className="bg-white text-[16px] text-accent-t font-semibold px-[10px] py-[8px]">
            {type.name}
          </div>
        </div>
      </div>
      {/* image end */}

      {/* text-start  */}
      <div className="px-[10px] py-[20px] md:px-[20px]">
        <h4 className="text-accent-t font-semibold pb-[10px]">{name}</h4>
        <EditorView content={description} />
      </div>
      {/* text-end */}
    </div>
  );
};

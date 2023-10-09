import { type FC } from "react";
import { EditorView } from "./Editor/EditorView";

import { type IProductType } from "../types/Product";

interface EditProductDescriptionProps {
  name: string;
  description: string;
  picture: string;
  type: IProductType;
}

export const EditProductDescription: FC<EditProductDescriptionProps> = ({
  name,
  description,
  picture,
  type,
}) => {
  return (
   
  );
};

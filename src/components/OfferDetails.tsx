import { type FC } from "react";
import {
  type IBusinessModel,
  type ICategory,
  type ITrl,
} from "../types/Product";

import technologyIcon from "../assets/icons/technology.svg";
import businessModelIcon from "../assets/icons/business_model.svg";
import trlIcon from "../assets/icons/time.svg";
import costsIcon from "../assets/icons/costs.svg";

interface OfferDetailsProps {
  categories: ICategory[];
  businessModels: IBusinessModel[];
  trl: ITrl;
  costs: string;
}

export const OfferDetails: FC<OfferDetailsProps> = ({
  categories,
  businessModels,
  trl,
  costs,
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-[40px]">
      <div className="flex gap-2">
        <div>
          <img src={technologyIcon} alt="" />
        </div>
        <div>
          <div>Technology</div>
          <ul className="flex gap-[6px]">
            {categories.map((categories) => (
              <li className="px-[14px] py-[5px]" key={categories.id}>{categories.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={businessModelIcon} alt="" />
        </div>
        <div>
          <div>Business Model</div>
          <ul className="flex gap-[6px]">
            {businessModels.map((businessModel) => (
              <li className="px-[14px] py-[5px]" key={businessModel.id} >{businessModel.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={trlIcon} alt="" />
        </div>
        <div>
          <div>TRL</div>
          <div className="px-[14px] py-[5px]">{trl.name}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={costsIcon} alt="" />
        </div>
        <div>
          <div>Costs</div>
          <div className="px-[14px] py-[5px]">{costs}</div>
        </div>
      </div>
    </div>
  );
};

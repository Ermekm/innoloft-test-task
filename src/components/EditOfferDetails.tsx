import { useEffect, type FC, type ChangeEvent } from "react";
import {
  type IBusinessModel,
  type ICategory,
  type ITrl,
} from "../types/Product";

import technologyIcon from "../assets/icons/technology.svg";
import businessModelIcon from "../assets/icons/business_model.svg";
import trlIcon from "../assets/icons/time.svg";
import costsIcon from "../assets/icons/costs.svg";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { Select } from "./UI/Select";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllTrl } from "../store/ActionCreators";
import { generateId } from "../helpers/generateId";

interface EditOfferDetailsProps {
  categories: ICategory[];
  businessModels: IBusinessModel[];
  activeTrlId: number | string | null;
  costs: string;
  onCategoriesChange: (categories: ICategory[]) => void;
  onBusinessModelsChange: (businessModel: IBusinessModel[]) => void;
  onActiveTrlChange: (trl: ITrl) => void;
  onCostsChange: (cost: string) => void;
}

export const EditOfferDetails: FC<EditOfferDetailsProps> = ({
  categories,
  businessModels,
  activeTrlId,
  costs,
  onCategoriesChange,
  onBusinessModelsChange,
  onActiveTrlChange,
  onCostsChange,
}) => {
  const dispatch = useAppDispatch();
  const { trlArr } = useAppSelector((state) => state.trl);
  useEffect(() => {
    dispatch(fetchAllTrl()).catch((err) => {
      console.error(err);
    });
  }, []);

  function addCategory(): void {
    const categoriesCopy = [...categories];
    const newCategory = {
      id: generateId(),
      name: "",
    };
    categoriesCopy.push(newCategory);
    onCategoriesChange(categoriesCopy);
  }

  function handleCategoryChange(
    id: number,
    e: ChangeEvent<HTMLInputElement>,
  ): void {
    const categoriesCopy: ICategory[] = JSON.parse(JSON.stringify(categories));
    const category = categoriesCopy.find((category) => category.id === id);
    if (category !== undefined) {
      category.name = e.target.value;
    }
    onCategoriesChange(categoriesCopy);
  }

  function deleteCategoryById(id: number): void {
    const filteredCategories = categories.filter(
      (category) => category.id !== id,
    );
    onCategoriesChange(filteredCategories);
  }

  function addBusinessModel(): void {
    const businessModelsCopy = [...businessModels];
    const newBusinessModel = {
      id: generateId(),
      name: "",
    };
    businessModelsCopy.push(newBusinessModel);
    onBusinessModelsChange(businessModelsCopy);
  }

  function handleBusinessModelChange(
    id: number,
    e: ChangeEvent<HTMLInputElement>,
  ): void {
    const businessModelsCopy: IBusinessModel[] = JSON.parse(
      JSON.stringify(businessModels),
    );
    const businessModel = businessModelsCopy.find(
      (businessModel) => businessModel.id === id,
    );
    if (businessModel !== undefined) {
      businessModel.name = e.target.value;
    }
    onBusinessModelsChange(businessModelsCopy);
  }

  function deleteBusinessModelById(id: number): void {
    const filteredBusinessModel = businessModels.filter(
      (businessModel) => businessModel.id !== id,
    );
    onBusinessModelsChange(filteredBusinessModel);
  }

  function handleTrlChange(e: ChangeEvent<HTMLSelectElement>): void {
    const activeTrlId = e.target.value;
    const activeTrl = trlArr.find((trl) => String(trl.id) === activeTrlId);
    if (activeTrl) {
      onActiveTrlChange(activeTrl);
    }
  }

  function handleCostChange(e: ChangeEvent<HTMLInputElement>): void {
    onCostsChange(e.target.value);
  }

  return (
    <div className="grid gap-[40px]">
      <div className="flex gap-2">
        <div>
          <img src={technologyIcon} alt="" />
        </div>
        <div className="flex-grow">
          <div>Technology</div>
          <ul>
            {categories.map((category) => (
              <li className="px-[14px] py-[5px] flex gap-2" key={category.id}>
                <Input
                  value={category.name}
                  onChange={(e) => {
                    handleCategoryChange(category.id, e);
                  }}
                ></Input>
                <Button
                  onClick={() => {
                    deleteCategoryById(category.id);
                  }}
                  className="bg-error text-white"
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
          <Button
            className="w-full bg-primary text-white"
            onClick={addCategory}
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={businessModelIcon} alt="" />
        </div>
        <div className="flex-grow">
          <div>Business Model</div>
          <ul>
            {businessModels.map((businessModel) => (
              <li
                className="px-[14px] py-[5px] flex gap-2"
                key={businessModel.id}
              >
                <Input
                  value={businessModel.name}
                  onChange={(e) => {
                    handleBusinessModelChange(businessModel.id, e);
                  }}
                ></Input>
                <Button
                  onClick={() => {
                    deleteBusinessModelById(businessModel.id);
                  }}
                  className="bg-error text-white"
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
          <Button
            className="w-full bg-primary text-white"
            onClick={addBusinessModel}
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={trlIcon} alt="" />
        </div>
        <div className="flex-grow">
          <div>TRL</div>
          <Select
            options={trlArr}
            defaultValue={activeTrlId ?? undefined}
            onChange={handleTrlChange}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <img src={costsIcon} alt="" />
        </div>
        <div className="flex-grow">
          <div>Costs</div>
          <Input value={costs} onChange={handleCostChange}></Input>
        </div>
      </div>
    </div>
  );
};

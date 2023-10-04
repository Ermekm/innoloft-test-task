import { type ICompany } from "./Company";
import { type IUser } from "./User";

interface BaseEntity {
  id: number;
  name: string;
}

interface IProductType extends BaseEntity {}

export interface ICategory extends BaseEntity {}

export interface ITrl extends BaseEntity {
  description?: string | null;
}

export interface IBusinessModel extends BaseEntity {}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: IProductType;
  categories: ICategory[];
  implementationEffortText: null;
  investmentEffort: string;
  trl: ITrl;
  video: string;
  user: IUser;
  company: ICompany;
  businessModels: IBusinessModel[];
}

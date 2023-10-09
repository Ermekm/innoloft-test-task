import { type ICompany } from "./Company";
import { type IUser } from "./User";

export interface IBaseEntity {
  id: number;
  name: string;
}

export interface IProductType extends IBaseEntity {}

export interface ICategory extends IBaseEntity {}

export interface ITrl extends IBaseEntity {
  description?: string | null;
}

export interface IBusinessModel extends IBaseEntity {}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: IProductType;
  categories: ICategory[];
  implementationEffortText: null;
  investmentEffort: string;
  trl: ITrl | null;
  video: string;
  user: IUser;
  company: ICompany;
  businessModels: IBusinessModel[];
}

import { type AxiosResponse } from "axios";
import { $api } from "../axios";
import { type IProduct } from "../../types/Product";

export default class ProductService {
  static async getOne<T = never, R = AxiosResponse<T>>(
    productId: number,
  ): Promise<R> {
    return await $api.get(`/product/${productId}/`);
  }

  static async update<T = never, R = AxiosResponse<T>>(
    product: IProduct,
  ): Promise<R> {
    return await $api.put(`/product/${product.id}/`, product);
  }
}

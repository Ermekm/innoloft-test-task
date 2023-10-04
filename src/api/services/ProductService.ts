import { type AxiosResponse } from "axios";
import { $api } from "../axios";

export default class ProductService {
  static async getOne<T = never, R = AxiosResponse<T>>(
    productId: number,
  ): Promise<R> {
    return await $api.get(`/product/${productId}/`);
  }
}

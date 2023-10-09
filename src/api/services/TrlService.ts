import { type AxiosResponse } from "axios";
import { $api } from "../axios";

export default class TrlService {
  static async getAll<T = never, R = AxiosResponse<T>>(): Promise<R> {
    return await $api.get(`/trl/`);
  }
}

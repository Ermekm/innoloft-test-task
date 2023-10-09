import { type AxiosResponse } from "axios";
import { $api } from "../axios";

export default class ConfigService {
  static async get<T = never, R = AxiosResponse<T>>(appId: number): Promise<R> {
    return await $api.get(`/configuration/${appId}/`);
  }
}

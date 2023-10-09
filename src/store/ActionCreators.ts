import ProductService from "../api/services/ProductService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import TrlService from "../api/services/TrlService";
import ConfigService from "../api/services/ConfigService";

export const fetchProduct = createAsyncThunk(
  "product/fetchOne",
  async (productId: number, thunkApi) => {
    try {
      const response = await ProductService.getOne(productId);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const fetchAllTrl = createAsyncThunk(
  "trl/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await TrlService.getAll();
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const fetchConfig = createAsyncThunk(
  "config/fetch",
  async (appId: number, thunkApi) => {
    try {
      const response = await ConfigService.get(appId);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

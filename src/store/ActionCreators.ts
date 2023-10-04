import ProductService from "../api/services/ProductService";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

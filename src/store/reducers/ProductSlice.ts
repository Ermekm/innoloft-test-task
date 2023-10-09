import { fetchProduct } from "./../ActionCreators";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type IProduct } from "../../types/Product";

interface ProductState {
  product: IProduct | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchProduct.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.error = null;
      state.product = action.payload;
    },
    [fetchProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;

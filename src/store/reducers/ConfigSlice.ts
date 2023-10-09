import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type IConfig } from "../../types/Config";
import { fetchConfig } from "../ActionCreators";

interface ConfigState {
  config: IConfig | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ConfigState = {
  config: null,
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchConfig.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchConfig.fulfilled.type]: (state, action: PayloadAction<IConfig>) => {
      state.isLoading = false;
      state.error = null;
      state.config = action.payload;
    },
    [fetchConfig.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;

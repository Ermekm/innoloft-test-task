import { fetchAllTrl } from "./../ActionCreators";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ITrl} from "../../types/Product";

interface TrlState {
  trlArr: ITrl[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TrlState = {
  trlArr: [],
  isLoading: false,
  error: null,
};

export const trlSlice = createSlice({
  name: "trl",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllTrl.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAllTrl.fulfilled.type]: (state, action: PayloadAction<ITrl[]>) => {
      state.isLoading = false;
      state.error = null;
      state.trlArr = action.payload;
    },
    [fetchAllTrl.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default trlSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductSlice";
import TrlReducer from "./reducers/TrlSlice";
import ConfigReducer from "./reducers/ConfigSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    trl: TrlReducer,
    config: ConfigReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

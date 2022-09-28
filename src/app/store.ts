import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { itemApi } from "../service/itemService";

export const store = configureStore({
  reducer: { [itemApi.reducerPath]: itemApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

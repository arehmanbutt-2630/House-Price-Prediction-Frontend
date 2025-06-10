import { configureStore } from "@reduxjs/toolkit";
import predictionReducer from "../features/prediction/predictionSlice";

export const store = configureStore({
  reducer: {
    predictions: predictionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

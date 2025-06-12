import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

interface Prediction {
  id: number;
  square_footage: number;
  bedrooms: number;
  predicted_price: number;
}

interface PredictionState {
  predictions: Prediction[];
  loading: boolean;
  error: string | null;
}

const initialState: PredictionState = {
  predictions: [],
  loading: false,
  error: null,
};

// Async thunk to fetch predictions from the backend
export const fetchPredictions = createAsyncThunk(
  "predictions/fetchPredictions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Prediction[]>(`${import.meta.env.VITE_BACKEND_BASE_URL}/predictions/`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch predictions");
    }
  }
);

const predictionSlice = createSlice({
  name: "predictions",
  initialState,
  reducers: {
    addPrediction: (state, action: PayloadAction<Prediction>) => {
      state.predictions.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPredictions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPredictions.fulfilled, (state, action: PayloadAction<Prediction[]>) => {
        state.predictions = action.payload;
        state.loading = false;
      })
      .addCase(fetchPredictions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addPrediction } = predictionSlice.actions;
export default predictionSlice.reducer;

import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export const usePredictions = () => {
  return useSelector((state: RootState) => state.predictions.predictions);
};

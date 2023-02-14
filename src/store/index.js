import { configureStore } from "@reduxjs/toolkit";
import QuranSlice from "./QuranSlice";

export const store = configureStore({
  reducer: {
    quran: QuranSlice,
  },
});

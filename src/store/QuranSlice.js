import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const getAllQuran = createAsyncThunk(
  "quran/getAllQuran",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSurah = createAsyncThunk(
  "quran/getSurah",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const quranSlice = createSlice({
  name: "quran",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllQuran.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllQuran.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(getAllQuran.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    //Get Surah
    builder.addCase(getSurah.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSurah.fulfilled, (state, action) => {
      state.loading = false;
      state.data = [action.payload.data];
    });
    builder.addCase(getSurah.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default quranSlice.reducer;

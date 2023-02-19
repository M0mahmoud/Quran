import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
  reciters: [],
};

export const getAllQuran = createAsyncThunk(
  "quran/getAllQuran",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah`);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
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
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const getAllReciters = createAsyncThunk(
  "quran/getReciters",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`https://mp3quran.net/api/v3/reciters`);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data.reciters;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const getDataReciter = createAsyncThunk(
  "quran/getDataReciter",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(
        `https://mp3quran.net/api/v3/reciters?reciter=${id}`
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data.reciters;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const getHadithLists = createAsyncThunk(
  "quran/getHadithLists",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(
        `https://hadeethenc.com/api/v1/categories/list/?language=ar`
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const getSeletedLists = createAsyncThunk(
  "quran/getSeletedLists",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(
        `https://hadeethenc.com/api/v1/hadeeths/list/?language=ar&category_id=${id}&per_page=500`
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

export const readHadith = createAsyncThunk(
  "quran/readHadith",
  async (hadithId, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(
        `https://hadeethenc.com/api/v1/hadeeths/one/?language=ar&id=${hadithId}`
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || error);
    }
  }
);

const quranSlice = createSlice({
  name: "quran",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllQuran.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(getAllQuran.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    });
    builder.addCase(getAllQuran.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    //Get Surah
    builder.addCase(getSurah.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(getSurah.fulfilled, (state, action) => {
      state.loading = false;
      state.data = [action.payload.data];
      state.error = null;
    });
    builder.addCase(getSurah.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    //Get All Reciters
    builder.addCase(getAllReciters.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllReciters.fulfilled, (state, action) => {
      state.loading = false;
      state.reciters = action.payload;
      state.error = null;
    });
    builder.addCase(getAllReciters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    //Get One Reciters
    builder.addCase(getDataReciter.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getDataReciter.fulfilled, (state, action) => {
      state.loading = false;
      state.reciters = action.payload;
      state.error = null;
    });
    builder.addCase(getDataReciter.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    //Get Hadith Lists
    builder.addCase(getHadithLists.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(getHadithLists.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getHadithLists.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    //Get Selected Lists
    builder.addCase(getSeletedLists.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(getSeletedLists.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getSeletedLists.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    //Read Hadith
    builder.addCase(readHadith.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(readHadith.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(readHadith.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default quranSlice.reducer;

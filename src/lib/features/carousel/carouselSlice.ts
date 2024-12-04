import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
const state: InitialStateType = {
  1: { progress: 50, count: 3, current: 1 },
  2: { progress: 75, count: 5, current: 2 },
};
*/
type InitialStateType = {
  [id: number]: {
    progress: number; // İlerleme durumu
    totalSnapList: number; // Toplam kaydırılabilir snap sayısı
    currentScrollSnap: number; // Mevcut snap
  };
};

const initialState: InitialStateType = {};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setScrollSnapList: (state, action: PayloadAction<{ id: number; totalSnapList: number }>) => {
      const { id, totalSnapList } = action.payload;
      if (!state[id]) {
        state[id] = { progress: 0, totalSnapList: 0, currentScrollSnap: 0 };
      }
      state[id].totalSnapList = totalSnapList;
      // progress bir number (sayı) türünde ve 0 ile 1 arasında bir değer olmalıdır.
      /*
      Örneğin:
        currentScrollSnap = 1, totalSnapList = 5:
        progress = 1 / 5 = 0.2 (yüzde 20 ilerleme)
      */
      state[id].progress = state[id].totalSnapList > 0 ? state[id].currentScrollSnap / state[id].totalSnapList : 0;
    },
    setCurrentScrollSnap: (state, action: PayloadAction<{ id: number; currentScrollSnap: number }>) => {
      const { id, currentScrollSnap } = action.payload;
      if (!state[id]) {
        state[id] = { progress: 0, totalSnapList: 0, currentScrollSnap: 0 };
      }
      state[id].currentScrollSnap = currentScrollSnap;
      // progress bir number (sayı) türünde ve 0 ile 1 arasında bir değer olmalıdır.
      state[id].progress = state[id].totalSnapList > 0 ? state[id].currentScrollSnap / state[id].totalSnapList : 0;
    },
  },
});

export const { setScrollSnapList, setCurrentScrollSnap } = carouselSlice.actions;
export default carouselSlice.reducer;

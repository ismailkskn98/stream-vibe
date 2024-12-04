import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./features/carousel/carouselSlice";
import trailerReducer from "./features/trailer/trailerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      carousel: carouselReducer,
      trailer: trailerReducer,
    },
  });
};

// makeStore'un türünü çıkaralım
export type AppStore = ReturnType<typeof makeStore>;
// "RootState" ve "AppDispatch" türlerini mağazanın kendisinden çıkarıyoruz
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

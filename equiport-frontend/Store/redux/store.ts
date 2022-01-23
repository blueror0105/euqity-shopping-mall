import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";
import cartSlice from "./slices/cartSlice";
import locationSlice from "./slices/locationSlice";
import languageSlice from "./slices/languageSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
    cart: cartSlice,
    location: locationSlice,
    language: languageSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

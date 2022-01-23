import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IUserState {
  cartItem: any;
}

// Define the initial state using that type
const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any>) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setProducts } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type

const selectProducts = (state: any) => state.cartItem;

export { selectProducts };

export default cartSlice.reducer;

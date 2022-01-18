import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IUserState {
  showModal: boolean;
  modalContent: any;
}

// Define the initial state using that type
const initialState: IUserState = {
  showModal: false,
  modalContent: "empty",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setModalContent: (state, action: PayloadAction<any>) => {
      state.modalContent = action.payload;
    },
  },
});

export const { setShowModal, setModalContent } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const modalState = (state: any) => state.user.showModal;

export default userSlice.reducer;

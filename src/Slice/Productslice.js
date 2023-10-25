import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productdata: [],
};

const Productslice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addtodata: (state, action) => {
      state.productdata = [...state.productdata, action.payload];
      console.log(state.productdata);
    },
    removeitem: (state, action) => {
      state.productdata = state.productdata.filter(
        (value) => value.id != action.payload
      );
    },
  },
});

export const { addtodata, removeitem } = Productslice.actions;
export default Productslice.reducer;

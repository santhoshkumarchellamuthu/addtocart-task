import { configureStore } from "@reduxjs/toolkit";
import Productreducer from "./Slice/Productslice";

const store = configureStore({
  reducer: {
    product: Productreducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slicer";

export default configureStore({
  reducer: {
    token: tokenSlice,
  },
});

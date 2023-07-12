import { configureStore } from "@reduxjs/toolkit";
import greetingsReducer from "./greetings";

export default configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

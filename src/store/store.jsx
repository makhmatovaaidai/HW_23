import { configureStore } from "@reduxjs/toolkit";
// import { todos } from "../todo/todos";
import todoSlice from "../todo/todos";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    // todo: todos,
  },
});

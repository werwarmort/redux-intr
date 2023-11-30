import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // любое название потому что дефолтный экспорт

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

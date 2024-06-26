import { configureStore } from "@reduxjs/toolkit";
import trainer from "../slice/trainer.slice";

const store = configureStore({
  reducer: {
    trainer,
  }
});

export default store
import { configureStore } from "@reduxjs/toolkit";
import Slice from '../slice/slice'

export default configureStore({
  reducer: {
    cartslice:Slice
  }
})
import { configureStore } from "@reduxjs/toolkit"

import movieReducer from "./movieSlice"
import { movieApi } from "./movieApiSlice"

export default configureStore({
  reducer: {
    movie: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(movieApi.middleware),
})

import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    data: null,
  },
  reducers: {
    updateMovies: (state, action) => {
      state.moviesList.push(action.payload)
      state.data = action.payload
    },
  },
})

export const { updateMovies } = movieSlice.actions

export default movieSlice.reducer

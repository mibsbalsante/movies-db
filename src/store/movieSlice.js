import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: null,
  },
  reducers: {
    updateMovies: (state, action) => {
      state.moviesList.push(action.payload)
      state.movie = action.payload
    },
  },
})

export const { updateMovies } = movieSlice.actions

export default movieSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    data: null,
  },
  reducers: {
    updateMovies: (state, action) => {
      state.data = action.payload

      const alreadyExists = state.moviesList.find(
        ({ imdbID }) => imdbID === action.payload.imdbID
      )
      if (alreadyExists) return

      state.moviesList.push(action.payload)
    },
  },
})

export const { updateMovies } = movieSlice.actions

export default movieSlice.reducer

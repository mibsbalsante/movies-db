import { createSlice } from "@reduxjs/toolkit"

import { getFromStorage, saveToStorage } from "@utl/storage"

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: getFromStorage("movies") || [],
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

      saveToStorage("movies", state.moviesList)
    },
  },
})

export const { updateMovies } = movieSlice.actions

export default movieSlice.reducer

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

const moviesBaseQuery = async (title, api, extraOptions) => {
  if (!title) return {}

  const query = `?apiKey=${apiKey}&t=${title || ""}`
  const { moviesList } = api.getState().movie

  const localResult = moviesList.find(({ Title }) =>
    Title?.toLowerCase().includes(title)
  )

  if (localResult) return localResult

  return await fetchBaseQuery({
    baseUrl: apiURL,
  })(query, api, extraOptions)
}

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: moviesBaseQuery,
  endpoints: builder => ({
    getMovieByTitle: builder.query({
      query: (title = "") => title.toLowerCase(),
    }),
  }),
})

export const { useGetMovieByTitleQuery } = movieApi

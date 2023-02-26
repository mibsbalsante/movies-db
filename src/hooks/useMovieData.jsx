import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { useGetMovieByTitleQuery } from "@str/movieApiSlice"
import { updateMovies } from "@str/movieSlice"

const useMovieData = name => {
  const dispatch = useDispatch()
  const { data: movie, error } = useGetMovieByTitleQuery(name)

  useEffect(() => {
    movie && dispatch(updateMovies(movie))
  }, [movie])

  return { movie, error }
}

export default useMovieData

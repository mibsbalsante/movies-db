import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

import { useGetMovieByTitleQuery } from "@str/movieApiSlice"
import { updateMovies } from "@str/movieSlice"

const Movie = () => {
  const { name } = useParams()

  const dispatch = useDispatch()
  const { data: movie, error } = useGetMovieByTitleQuery(name)

  useEffect(() => {
    movie && dispatch(updateMovies(movie))
  }, [movie])

  if (error) throw new Error(error.message)

  return (
    movie && (
      <div>
        {movie.Title} - {movie.Year}
      </div>
    )
  )
}

export default Movie

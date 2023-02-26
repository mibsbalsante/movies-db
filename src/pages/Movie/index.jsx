import { useParams } from "react-router-dom"
import useMovieData from "@hks/useMovieData"

const Movie = () => {
  const { name } = useParams()
  const { movie, error } = useMovieData(name)

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

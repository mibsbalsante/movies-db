import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { Title } from "@ui5/webcomponents-react"

const LastResults = () => {
  const moviesList = useSelector(state => [...state.movie.moviesList].reverse())

  return (
    moviesList.length > 0 && (
      <section>
        <Title level="H3">Latest searches</Title>

        <div>
          {moviesList.map(({ imdbID, Title }) => (
            <NavLink key={imdbID} to={`${Title.toLowerCase()}`}>
              {Title}
            </NavLink>
          ))}
        </div>
      </section>
    )
  )
}

export default LastResults

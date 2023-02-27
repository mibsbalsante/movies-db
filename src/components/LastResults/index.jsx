import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { Title } from "@ui5/webcomponents-react"

import styles from "./styles.module.scss"

const LastResults = () => {
  const moviesList = useSelector(state => [...state.movie.moviesList].reverse())

  return (
    moviesList.length > 0 && (
      <section className={styles.nav}>
        <Title level="H3">Latest searches</Title>

        <nav className={styles.navList}>
          {moviesList.map(({ imdbID, Title }) => (
            <NavLink
              className={styles.navLink}
              key={imdbID}
              to={`${Title.toLowerCase()}`}
            >
              <span>{Title}</span>
            </NavLink>
          ))}
        </nav>
      </section>
    )
  )
}

export default LastResults

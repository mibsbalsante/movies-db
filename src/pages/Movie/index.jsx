import { useParams } from "react-router-dom"
import { Loader, Title, Text, List } from "@ui5/webcomponents-react"

import useMovieData from "@hks/useMovieData"
import usePageTitle from "@hks/usePageTitle"
import Rating from "@cmp/Rating"
import ListItem from "@cmp/ListItem"

import styles from "./styles.module.scss"

const Movie = () => {
  const { name } = useParams()
  const { isLoading, movie, error } = useMovieData(name)

  if (error) throw new Error(error.message)

  if (isLoading) return <Loader />

  usePageTitle(`${movie.Title} (${movie.Year})`)

  return (
    movie && (
      <div className={styles.movie}>
        <div className={styles.movieHeading}>
          <Title level="H2">{movie.Title}</Title>

          <span className={styles.movieYear}>{movie.Year}</span>

          <Text className={styles.movieInfo}>
            <span>{movie.Type}</span>
            <span>{movie.Runtime}</span>
            <span>{movie.Rated}</span>
          </Text>
        </div>

        <main className={styles.movieMain}>
          <img className={styles.moviePoster} src={movie.Poster} alt="" />
          <div className={styles.movieReception}>
            <Rating {...movie} />
          </div>
        </main>

        <section className={styles.movieSection}>
          <List
            separators="Inner"
            headerText="Plot"
            className={styles.movieList}
          >
            <ListItem>{movie.Plot}</ListItem>
          </List>
        </section>

        <section className={styles.movieSection}>
          <List
            separators="Inner"
            headerText="Credits"
            className={styles.movieList}
          >
            <ListItem title="Production">{movie.Production}</ListItem>
            <ListItem title="Writers">{movie.Writer}</ListItem>
            <ListItem title="Directors">{movie.Director}</ListItem>
            <ListItem title="Stars">{movie.Actors}</ListItem>
          </List>
        </section>

        <section className={styles.movieSection}>
          <List
            separators="Inner"
            headerText="Details"
            className={styles.movieList}
          >
            <ListItem title="Release date">{movie.Released}</ListItem>
            <ListItem title="Genre">{movie.Genre}</ListItem>
            <ListItem title="Country">{movie.Country}</ListItem>
            <ListItem title="Language">{movie.Language}</ListItem>
            <ListItem title="Awards">{movie.Awards}</ListItem>
            <ListItem title="Box Office">{movie.BoxOffice}</ListItem>
          </List>
        </section>
      </div>
    )
  )
}

export default Movie

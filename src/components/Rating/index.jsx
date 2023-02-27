import PropTypes from "prop-types"
import { RatingIndicator, Link, Tree, TreeItem } from "@ui5/webcomponents-react"

import styles from "./styles.module.scss"

const imdbURL = import.meta.env.VITE_IMDB_URL

const Rating = ({ imdbID, imdbRating, Metascore, Ratings, className }) => {
  return (
    <div className={`${styles.ratings} ${className}`}>
      <div className={styles.ratingsLine}>
        <Link design="Emphasized" href={`${imdbURL}/${imdbID}`} target="_blank">
          IMDb
        </Link>

        <RatingIndicator
          className={styles.ratingsIndicator}
          max={5}
          value={Number(imdbRating) / 2}
          readonly
          title={imdbRating}
        />
      </div>

      <div className={styles.ratingsLine}>
        <Link design="Emphasized">Metacritic</Link>

        <RatingIndicator
          className={styles.ratingsIndicator}
          max={5}
          value={Number(Metascore) / 20}
          readonly
          title={Metascore}
        />
      </div>

      {Ratings.length > 0 && (
        <Tree className={styles.ratingsList}>
          <TreeItem text="All Ratings" icon="favorite">
            {Ratings.map(({ Source, Value }) => (
              <TreeItem key={Source} text={`${Source}: ${Value}`} />
            ))}
          </TreeItem>
        </Tree>
      )}
    </div>
  )
}

Rating.propTypes = {
  imdbID: PropTypes.string,
  imdbRating: PropTypes.string,
  Metascore: PropTypes.string,
  Ratings: PropTypes.arrayOf(
    PropTypes.shape({
      Source: PropTypes.string,
      Value: PropTypes.string,
    })
  ),
  className: PropTypes.string,
}

export default Rating

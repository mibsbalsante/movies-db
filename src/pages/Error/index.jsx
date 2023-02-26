import { IllustratedMessage } from "@ui5/webcomponents-react"
import "@ui5/webcomponents-fiori/dist/illustrations/NoFilterResults.js"

import usePageTitle from "@hks/usePageTitle"

import styles from "./styles.module.scss"

const Error = () => {
  usePageTitle("404")

  return (
    <div className={styles.page}>
      <IllustratedMessage
        name="NoFilterResults"
        size="Scene"
        titleText="Movie not found"
        subtitleText="Try searching again for a different title."
      />
    </div>
  )
}

export default Error

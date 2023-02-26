import { IllustratedMessage } from "@ui5/webcomponents-react"
import "@ui5/webcomponents-fiori/dist/illustrations/SearchEarth.js"

import LastResults from "@cmp/LastResults"
import usePageTitle from "@hks/usePageTitle"

import styles from "./styles.module.scss"

const Home = () => {
  usePageTitle("Home")

  return (
    <div className={styles.page}>
      <IllustratedMessage
        name="SearchEarth"
        size="Scene"
        titleText="Welcome to Movies Database!"
        subtitleText="Please search for the desired title above."
      />
      <LastResults />
    </div>
  )
}

export default Home

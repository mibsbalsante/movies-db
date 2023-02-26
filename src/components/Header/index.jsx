import { NavLink } from "react-router-dom"
import { Title } from "@ui5/webcomponents-react"

import Search from "@cmp/Search"

import styles from "./styles.module.scss"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <NavLink to="/" className={styles.headerLink}>
        <Title level="H1" className={styles.headerTitle}>
          Movies Database
        </Title>
      </NavLink>
      <Search />
    </div>
  </header>
)

export default Header

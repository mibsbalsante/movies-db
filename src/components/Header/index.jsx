import { NavLink } from "react-router-dom"

import Search from "@cmp/Search"

const Header = () => (
  <header>
    <NavLink to="/">
      <h1>Movies Database</h1>
    </NavLink>
    <Search />
  </header>
)

export default Header

import { Outlet } from "react-router-dom"

import Header from "@cmp/Header"

const Home = () => {
  return (
    <div>
      <Header />
      home page
      <Outlet />
    </div>
  )
}

export default Home

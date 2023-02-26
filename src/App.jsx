import { Outlet } from "react-router-dom"

import Header from "@cmp/Header"

import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App

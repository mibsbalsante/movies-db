import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Input, Button } from "@ui5/webcomponents-react"

import styles from "./styles.module.scss"

const Search = () => {
  const navigate = useNavigate()
  const { name } = useParams()

  const [inputText, setInputText] = useState(name || "")

  const handleSubmit = ev => {
    ev.preventDefault()
    navigate(`/${inputText}`)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <Input
        placeholder="Movie name"
        value={inputText}
        onInput={({ target }) => setInputText(target.value)}
      />
      <Button
        icon="search"
        iconEnd
        design="Default"
        disabled={!inputText}
        submits
      >
        Search
      </Button>
    </form>
  )
}

export default Search

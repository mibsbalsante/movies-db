import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Search = () => {
  const navigate = useNavigate()
  const { name } = useParams()

  const [inputText, setInputText] = useState(name || "")

  const handleSubmit = ev => {
    ev.preventDefault()
    navigate(`/${inputText}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={({ target }) => setInputText(target.value)}
      />
      <button disabled={!inputText}>pls do search</button>
    </form>
  )
}

export default Search

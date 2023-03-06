import "../Questions/Questions.css"
import React, { useState, useEffect } from "react"
import fetchData from "../../apiCalls"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function Questions() {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    (async () => {
      await fetchData("genres/anime")
      .then(data => {
        const genreData = data.data
        const allGenres = genreData.map(genre => {
          const newGenre = {
            id: genre.mal_id,
            name: genre.name
          }
          return newGenre
        })
        setLoading(false)
        allGenres.splice(20,1)
        return setGenres(allGenres)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })
    })()
  },[])
  return (
    <section className="questionWrapper">
      <h1>What are you in the mood for? </h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error.message}. Please try again!</h2>}
      <div className="genreOptions">
        {genres.map(genre => {
          return (
            <button className="genre" key={genre.id}><Link to={`/${genre.id}`} key={genre.id}>{genre.name}</Link></button>
          )
        })}
      </div>
    </section>
  )
}

export default Questions;

Questions.propTypes = {
  genres: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  key: PropTypes.number
}
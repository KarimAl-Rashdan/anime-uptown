import "../Questions/Questions.css"
import React, { useState, useEffect } from "react"
import fetchData from "../../apiCalls"
import { Link } from "react-router-dom"

function Questions() {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetchData("genres/anime")
    .then(data => {
      const genreData = data.data
      const allGenres = genreData.map(genre => {
        const newGenre = {
          id: genre.mal_id,
          name: genre.name
        }
        return newGenre
      })
      allGenres.splice(20,1)
      return setGenres(allGenres)
    })
    .catch(error => console.log(error))
  },[])
  return (
    <section className="questionWrapper">
      <h1>What are you in the mood for? </h1>
      <div className="genreOptions">
        {genres.map(genre => {
          return (
            <button key={genre.id}><Link to={`/${genre.id}`} key={genre.id}>{genre.name}</Link></button>
          )
        })}
      </div>
    </section>
  )
}

export default Questions;
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
      // console.log("data", data.data, data.data)
      const allGenres = genreData.map(genre => {
        const newGenre = {
          id: genre.mal_id,
          name: genre.name
        }
        return newGenre
      })
      console.log("genres", allGenres)
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
            <button><Link to={"/:id"}>{genre.name}</Link></button>
          )
        })}
      </div>
    </section>
  )
}

export default Questions;
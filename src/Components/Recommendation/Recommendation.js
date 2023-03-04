import "../Recommendation/Recommendation.css"
import React, { useState, useEffect } from "react"
import fetchData from "../../apiCalls"
import AnimeCard from "../AnimeCard/AnimeCard"

function Recommendation(id) {
  const [recommendedAnime, setRecommendedAnime] = useState([])
  console.log("props", id)
  useEffect(() => {
    fetchData(`anime?rating="r17"&genres=${id.id}`)
    .then(data => {
      console.log("data", data.data)
      const recommendationData = data.data
      const allRecommendations = recommendationData.map(recommendation => {
        const newRecommendation = {
          title: recommendation.title,
          image: recommendation.images.jpg.image_url,
          rating: recommendation.popularity,
          key: recommendation.mal_id
        }
        return newRecommendation
      })
      return setRecommendedAnime(allRecommendations)
    })
    .catch(error => console.log(error))
  },[])
  return (
    <section className="recommendationContainer">
      <h1>recommendation</h1>
      <section className="recommendationWrapper">
        {recommendedAnime.map(recAnime => {
          return (

          )
        }
          )}
      </section>
    </section>
  )
}
export default Recommendation
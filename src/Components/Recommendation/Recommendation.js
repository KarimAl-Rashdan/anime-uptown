import "../Recommendation/Recommendation.css"
import React, { useState, useEffect } from "react"
import fetchData from "../../apiCalls"
import AnimeCard from "../AnimeCard/AnimeCard"

function Recommendation(id) {
  const [recommendedAnime, setRecommendedAnime] = useState([])
  useEffect(() => {
    fetchData(`anime?rating=r17&genres=${id.id}`)
    .then(data => {
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
      {recommendedAnime.length < 1 && <h2>No Recommendations for this Category</h2>}
      <section className="recommendationWrapper">
        {recommendedAnime.map(recAnime => {
          return (
            <div className="allRecommendations" key={recAnime.key}>
              <AnimeCard image={recAnime.image} title={recAnime.title} rating={recAnime.rating} key={recAnime.key} />
            </div>
          )
        })}
      </section>
    </section>
  )
}
export default Recommendation
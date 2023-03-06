import "../Recommendation/Recommendation.css"
import React, { useState, useEffect } from "react"
import fetchData from "../../apiCalls"
import AnimeCard from "../AnimeCard/AnimeCard"
import ErrorPage from "../ErrorPage/ErrorPage"

function Recommendation({id,addToList, addToFavorites, savedTitles, favoriteTitles}) {
  const possibleIds = [...Array(81).keys()].map(x => ++x).toString()
  const [recommendedAnime, setRecommendedAnime] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData(`anime?rating=r17&genres=${id}`)
    .then(data => {
      console.log(data)
      console.log(possibleIds, id)
      const recommendationData = data.data
      console.log(recommendationData)
      const allRecommendations = recommendationData.map(recommendation => {
        const newRecommendation = {
          title: recommendation.title,
          image: recommendation.images.jpg.image_url,
          rating: recommendation.popularity,
          key: recommendation.mal_id
        }
        console.log("rec", newRecommendation)
        return newRecommendation
      })
      console.log("here", possibleIds)
      setLoading(false)
      return setRecommendedAnime(allRecommendations)
    })
    .catch(error => {
      console.log(error)
      setLoading(false)
      setError(error)
    })
  
  },[])

  if(possibleIds.includes(id)) {

  return (
    <section className="recommendationContainer">
      <h1>recommendation</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong. Please try again</h2>}
      {recommendedAnime.length < 1 && <h2>No Recommendations for this Category</h2>}
      <section className="recommendationWrapper">
        {recommendedAnime.map(recAnime => {
          return (
            <div className="allRecommendations" key={recAnime.key}>
              <AnimeCard image={recAnime.image} title={recAnime.title} rating={recAnime.rating} key={recAnime.key}  id={recAnime.key} addToList={addToList} addToFavorites={addToFavorites} savedTitles={savedTitles} favoriteTitles={favoriteTitles}/>
            </div>
          )
        })}
      </section>
    </section>
  )
      }else {
        return (
          <div>
          <ErrorPage />
          </div>
        )
      }
}
export default Recommendation
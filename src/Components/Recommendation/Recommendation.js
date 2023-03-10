import "../Recommendation/Recommendation.css"
import React, { useState, useEffect } from "react"
import fetchData from "../../apiCalls"
import AnimeCard from "../AnimeCard/AnimeCard"
import ErrorPage from "../ErrorPage/ErrorPage"
import PropTypes from "prop-types"


function Recommendation({id,addToList, addToFavorites, savedTitles, favoriteTitles}) {
  const possibleIds = [...Array(81).keys()].map(x => ++x).toString()
  const [recommendedAnime, setRecommendedAnime] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (async () => {
      await fetchData(`anime?rating=r17&genres=${id}`)
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
        setLoading(false)
        return setRecommendedAnime(allRecommendations)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })
    })()
  },[])

  if(possibleIds.includes(id)) {
    return (
      <section className="recommendationContainer">
        <h1>Recommendations</h1>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error.message}. Please try again!</h2>}
        <div style={{display: error ? "none" : "block"}}>
          {recommendedAnime.length < 1 && <h2>No Recommendations for this Category</h2>}
        </div>
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
    )} else {
      return (
        <div className="errorRequest">
        <ErrorPage />
        </div>
      )
    }
}
export default Recommendation

Recommendation.propTypes = {
  possibleIds: PropTypes.arrayOf(PropTypes.string),
  recommendedAnime: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
  loading: PropTypes.bool,
  newRecommendation: PropTypes.object,
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
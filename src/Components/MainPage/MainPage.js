import "../MainPage/MainPage.css"
import React, { useState, useEffect } from "react"
import fetchData from "../../apiCalls"
import AnimeCard from "../AnimeCard/AnimeCard"
import ErrorPage from "../ErrorPage/ErrorPage"

function MainPage({addToList, addToFavorites, savedTitles, favoriteTitles}) {
  const [animeTitles, setAnimeTitles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    // (async () => {
      // await fetchMainList()
      fetchData("anime")
      .then(data => {
        const allTitles = data["data"].map(animeInfo => {
          let newTitle = {
            id: animeInfo.mal_id,
            title: animeInfo.title,
            image: animeInfo.images.jpg.image_url,
            rating: animeInfo.popularity,
            key: animeInfo.mal_id
          }
          return newTitle
        })
        setLoading(false)
        return setAnimeTitles(allTitles)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
        console.log(error)
      })
},[])
  return (
    <main className="mainpage">
      <h1>Welcome to Anime Uptown!!!</h1>
      <p>The perfect place to find recommendations of new anime to watch, update your Anime List, and keep track of your favorites ^-^</p>
      {loading && <h2>Loading...</h2>}
      {error && <ErrorPage />}
      <section className="animeContainer">
        {animeTitles.sort((a,b) => b.rating - a.rating)
        .map(featuredAnime => {
          return(
            <div className="allCards" key={featuredAnime.key}>
              <AnimeCard addToList={addToList} addToFavorites={addToFavorites} id={featuredAnime.id} image={featuredAnime.image} title={featuredAnime.title} rating={featuredAnime.rating} key={featuredAnime.key} savedTitles={savedTitles} favoriteTitles={favoriteTitles}/>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default MainPage;
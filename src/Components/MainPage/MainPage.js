import "../MainPage/MainPage.css"
import React, { useState, useEffect } from "react"
import fetchData from "../../apiCalls"
import AnimeCard from "../AnimeCard/AnimeCard"

function MainPage() {
  const [animeTitles, setAnimeTitles] = useState([])

  useEffect(() => {
    // (async () => {
      // await fetchMainList()
      fetchData("anime")
      .then(data => {
        const allTitles = data["data"].map(animeInfo => {
          let newTitle = {
            title: animeInfo.title,
            image: animeInfo.images.jpg.image_url,
            rating: animeInfo.popularity,
            key: animeInfo.mal_id
          }
          return newTitle
        })
        return setAnimeTitles(allTitles)
          // return setAnimeTitles(animeTitles => [...animeTitles, allTitles])
      })
      .catch(error => console.log(error))
  // })()
},[])
  return (
    <main className="mainpage">
      <h2>hey</h2>
      <section className="animeContainer">
    {animeTitles.sort((a,b) => b.rating - a.rating)
    .map(featuredAnime => {
      return(
      <div className="allCards" key={featuredAnime.key}>
        <AnimeCard image={featuredAnime.image} title={featuredAnime.title} rating={featuredAnime.rating} key={featuredAnime.key} />
        
      </div>
      )
    })}
    </section>
    
    </main>
  )
}

export default MainPage;
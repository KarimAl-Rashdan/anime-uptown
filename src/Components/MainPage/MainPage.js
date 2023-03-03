import "../MainPage/MainPage.css"
import React, { useState, useEffect } from "react"
import fetchMainList from "../../apiCalls"

function MainPage() {
  const [animeTitles, setAnimeTitles] = useState([])

  useEffect(() => {
    // (async () => {
      // await fetchMainList()
      fetchMainList()
      .then(data => {
        console.log(data["data"])
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
      <div className="animeCard" key={featuredAnime.key}>
        <img src={featuredAnime.image} alt={featuredAnime.title}></img>
        <p>{featuredAnime.title}</p>
        <p>{featuredAnime.rating} Rating</p>
      </div>
      )
    })}
    </section>
    
    </main>
  )
}

export default MainPage;
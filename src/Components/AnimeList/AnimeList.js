import "../AnimeList/AnimeList.css"

function AnimeList(savedList) {
  console.log("hsajnf", savedList.savedList)
  return (
    <section className="animeListContainer">
      <h1>MyAnimeList</h1>
      <p>Keep track of the animes you have watched!</p>
      <ol>
        {savedList.savedList.map(anime => {
          return (
            <li key={Date.now()}>{anime}</li>
          )
        })}
      </ol>
    </section>
  )
}

export default AnimeList
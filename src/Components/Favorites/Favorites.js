import "../Favorites/Favorites.css"

function Favorites(favoriteList) {
  return (
    <section className="favoriteListContainer">
      <h1>Favorites</h1>
      {favoriteList.favoriteList.length > 0 ? 
      <ol>
        {favoriteList.favoriteList.map(anime => {
          return (
            <li key={Date.now()}>{anime}</li>
          )
        })}
      </ol>
      : <h2>No Likes So Far</h2>
      }
    </section>
  )
}

export default Favorites
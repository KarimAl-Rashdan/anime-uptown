import "../Favorites/Favorites.css"

function Favorites(favoriteList) {
  return (
    <section className="favoriteListContainer">
      <h1>Favorites</h1>
      <ol>
        {favoriteList.favoriteList.map(anime => {
          return (
            <li key={Date.now()}>{anime}</li>
          )
        })}
      </ol>
    </section>
  )
}

export default Favorites
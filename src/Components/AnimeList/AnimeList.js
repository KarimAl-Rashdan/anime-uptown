import "../AnimeList/AnimeList.css"
import PropTypes from "prop-types"

function AnimeList(savedList) {
  return (
    <section className="animeListContainer">
      <h1>My Anime List</h1>
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

AnimeList.propTypes = {
  savedList: PropTypes.arrayOf(PropTypes.string)
}
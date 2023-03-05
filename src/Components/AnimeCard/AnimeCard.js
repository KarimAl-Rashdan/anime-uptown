import "../AnimeCard/AnimeCard.css"
import React, { useEffect, useState } from "react";
import saveOrangeIcon from "../../images/saveicon.png"
import unSaveIcon from "../../images/unsaveicon.png"
import favoriteIcon from "../../images/likeicon.png"
import unFavoriteIcon from "../../images/unlikeicon.png"


function AnimeCard({addToList, addToFavorites, id, image, title, rating}) {
  const [saveIcon, setSaveIcon] = useState(false)
  const [likeIcon, setLikeIcon] = useState(false)

  useEffect(() => {
    return saveIcon ? addToList(title) : undefined
  },[saveIcon]);
  
  useEffect(() => {
    return likeIcon ? addToFavorites(title) : undefined

  }, [likeIcon])

  const toggleSaveIcon = () => {
    return setSaveIcon(!saveIcon)
  }

  const toggleFavoriteIcon = () => {
    return setLikeIcon(!likeIcon)
  }
return (
  <div className="animeCard">
    <div className="iconContainer">
      <button onClick={() => {
        // addToList({title})
        toggleSaveIcon()}}>
        {saveIcon ? <img id={id} src={saveOrangeIcon} alt="Checked save icon"></img> : <img src={unSaveIcon} alt="Not checked save icon"></img>}
      </button>
      <button onClick={() => {
        // addToList({title})
        toggleFavoriteIcon()}}>
        {likeIcon ? <img id={id} src={favoriteIcon} alt="Checked favorite icon"></img> : <img src={unFavoriteIcon} alt="Not checked favorite icon"></img>}
      </button>
    </div>
    <img src={image} alt={title}></img>
    <p>{title}</p>
    <p>{rating} Rating</p>
  </div>
)
}

export default AnimeCard;
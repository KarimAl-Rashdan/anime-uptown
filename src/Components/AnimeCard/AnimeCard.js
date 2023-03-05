import "../AnimeCard/AnimeCard.css"
import React, { useEffect, useState } from "react";
import saveOrangeIcon from "../../images/saveicon.png"
import unSaveIcon from "../../images/unsaveicon.png"

function AnimeCard({addToList, id, image, title, rating}) {
  const [saveIcon, setSaveIcon] = useState(false)
  useEffect(() => {
    return saveIcon ? addToList(title) : undefined
  },[saveIcon]);

  const toggleSaveIcon = () => {
    return setSaveIcon(!saveIcon)
  }
return (
  <div className="animeCard">
    <div className="iconContainer">
      <button onClick={() => {
        // addToList({title})
        toggleSaveIcon()}}>
        {saveIcon ? <img id={id} src={saveOrangeIcon} alt="Checked save icon"></img> : <img src={unSaveIcon} alt="Not checked save icon"></img>}
      </button>
    </div>
    <img src={image} alt={title}></img>
    <p>{title}</p>
    <p>{rating} Rating</p>
  </div>
)
}

export default AnimeCard;
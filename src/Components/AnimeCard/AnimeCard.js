import "../AnimeCard/AnimeCard.css"
import React, { useState } from "react";
import saveOrangeIcon from "../../images/saveicon.png"
import unSaveIcon from "../../images/unsaveicon.png"

function AnimeCard({image, title, rating}) {
  const [saveIcon, setSaveIcon] = useState(false)

  const toggleSaveIcon = () => {
    setSaveIcon(!saveIcon)
  }
return (
  <div className="animeCard">
    <div className="iconContainer">
      <button onClick={() => toggleSaveIcon()}>
        {saveIcon ? <img src={saveOrangeIcon} alt="Checked save icon"></img> : <img src={unSaveIcon} alt="Not checked save icon"></img>}
      </button>
    </div>
    <img src={image} alt={title}></img>
    <p>{title}</p>
    <p>{rating} Rating</p>
  </div>
)
}

export default AnimeCard;
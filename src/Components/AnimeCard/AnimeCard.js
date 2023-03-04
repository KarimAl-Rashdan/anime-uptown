import "../AnimeCard/AnimeCard.css"
import React from "react";
import saveIcon from "../../images/saveicon.png"
import unSaveIcon from "../../images/unsaveicon.png"

function AnimeCard({image, title, rating}) {
return (
  <div className="animeCard">
    <div className="iconContainer">
      <img src={unSaveIcon} alt="Not checked save icon"></img>
    </div>
    <img src={image} alt={title}></img>
    <p>{title}</p>
    <p>{rating} Rating</p>
  </div>
)
}

export default AnimeCard;
import "../AnimeCard/AnimeCard.css"
import React from "react";

function AnimeCard({image, title, rating}) {
return (
  <div className="animeCard">
    <img src={image} alt={title}></img>
    <p>{title}</p>
    <p>{rating} Rating</p>
  </div>
)
}

export default AnimeCard;
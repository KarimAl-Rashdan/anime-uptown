import "../AnimeCard/AnimeCard.css"
import React from "react";

function AnimeCard({image, title, key, rating}) {
return (
  <div className="animeCard" key={key}>
    <img src={image} alt={title}></img>
    <p>{title}</p>
    <p>{rating} Rating</p>
  </div>
)
}

export default AnimeCard;
import "../AnimeCard/AnimeCard.css"
import React, { useEffect, useState} from "react";
import saveOrangeIcon from "../../images/saveicon.png"
import unSaveIcon from "../../images/unsaveicon.png"
import favoriteIcon from "../../images/likeicon.png"
import unFavoriteIcon from "../../images/unlikeicon.png"
import PropTypes from "prop-types"

function AnimeCard({addToList, addToFavorites, id, image, title, rating, savedTitles, favoriteTitles}) {

  const [saveIcon, setSaveIcon] = useState(false)
  const [likeIcon, setLikeIcon] = useState(false)
  
  useEffect(() => {
    checkLikeStatus()
    checkSaveStatus()
    addLike()
    addSave()
  },[saveIcon, likeIcon]);

  const addSave = () => {
    return saveIcon ? addToList(title) : undefined
  }
    
  const addLike = () => {
    return likeIcon ? addToFavorites(title) : undefined  
  }
  const checkSaveStatus = () => {
    if(savedTitles.includes(title)) {
      setSaveIcon(true)
    }
  }
  const checkLikeStatus = () => {
    if(favoriteTitles.includes(title)) {
      setLikeIcon(true)
    }
  }
  const handleClick = (status) => {
    setSaveIcon(status)
    addSave()
  }

  const handleLikeClick = (status) => {
    setLikeIcon(status)
    addLike()
  }
  
  return (
    <div className="animeCard" key={id}>
      <div className="iconContainer">
        <button className="saveBtn" onClick={() => handleClick(true)}>
          {saveIcon ? <img id={id} className="checkedSave" src={saveOrangeIcon} alt="Checked save icon"></img> : <img id={id} className="unCheckedSave"src={unSaveIcon} alt="Not checked save icon"></img>}
        </button>
        <button className="likeBtn" onClick={() => handleLikeClick(true)}>
          {likeIcon ? <img id={id} className="checkedFavorite" src={favoriteIcon} alt="Checked favorite icon"></img> : <img src={unFavoriteIcon} className="unCheckedFavorite" alt="Not checked favorite icon"></img>}
        </button>
      </div>
      <img id={Date.now()} src={image} alt={title}></img>
      <p className="title">{title}</p>
      <p className="rating">{rating} Rating</p>
    </div>
  )
}

export default AnimeCard;

AnimeCard.propTypes = {
  saveIcon: PropTypes.bool,
  likeIcon: PropTypes.bool,
  handleClick: PropTypes.func,
  handleLikeClick: PropTypes.func,
  addToList: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
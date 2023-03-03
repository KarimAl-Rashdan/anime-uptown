import "../NavBar/NavBar.css"
import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
 return (
  <div className="navbarContainer">
    <ul>
      <li><Link to={`/myanimelist`}>MyAnimeList</Link></li>
      <li><Link to={`/favorites`}>Favorites</Link></li>
      <li><Link to={`/recommendations`}>Want a recommendation?</Link></li>
    </ul>
  </div>
 )
}

export default NavBar;
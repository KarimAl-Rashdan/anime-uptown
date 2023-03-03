import "../NavBar/NavBar.css"
import React from "react";
import {Link} from "react-router-dom"

function NavBar() {
 return (
  <div className="navbarContainer">
    <Link to={`/myanimelist`}>MyAnimeList</Link>
    <p>hi</p>
    <p>hello</p>
    <p>how u doing</p>
  </div>
 )
}

export default NavBar;
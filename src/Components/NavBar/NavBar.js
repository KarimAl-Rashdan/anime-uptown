import "../NavBar/NavBar.css"
import React, {useState} from "react";
import { Link } from "react-router-dom"

function NavBar() {
const [showNavBar, setShowNavBar] = useState(false)

const closeNav = () => {
  setShowNavBar(false)
}
 return (
  <nav className="navigation">
    <button className="hamburger" onClick={() => {
      setShowNavBar(!showNavBar)
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
      <div className={showNavBar ? "navigationMenuExpanded" : "navigationMenu"}>
        <ul>
          <li><Link to={`/myanimelist`} onClick={()=> closeNav()}>MyAnimeList</Link></li>
          <li><Link to={`/favorites`} onClick={()=> closeNav()}>Favorites</Link></li>
          <li><Link to={`/question`} onClick={()=> closeNav()}>Want a recommendation?</Link></li>
        </ul>
      </div>
  </nav>
 )
}

export default NavBar;
import "../NavBar/NavBar.css"
import React, {useState} from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import PropTypes from "prop-types"


function NavBar() {
const [showNavBar, setShowNavBar] = useState(false)

const closeNav = () => {
  setShowNavBar(false)
}
 return (
  <nav className="navigation">
    <Link className="logoLink" to="/">
      <img className="logo" src={logo} alt="logo"/>
    </Link>
    <button className="hamburger" onClick={() => {
      setShowNavBar(!showNavBar)
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
      <div className={showNavBar ? "navigationMenu expanded" : "navigationMenu"}>
        <ul>
          <li className="myAnimeList"><Link to={`/myanimelist`} onClick={()=> closeNav()}>My Anime List</Link></li>
          <li className="favorites"><Link to={`/favorites`} onClick={()=> closeNav()}>My Favorites List</Link></li>
          <li className="question"><Link to={`/question`} onClick={()=> closeNav()}>Want a recommendation?</Link></li>
        </ul>
      </div>
  </nav>
 )
}

export default NavBar;

NavBar.propTypes = {
  showNavBar: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
}
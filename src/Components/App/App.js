// import logo from './logo.svg';
import React, {useState} from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import MainPage from "../MainPage/MainPage"
import NavBar from "../NavBar/NavBar"
import Questions from "../Questions/Questions"
import Recommendation from "../Recommendation/Recommendation"
import AnimeList from "../AnimeList/AnimeList"
import Favorites from "../Favorites/Favorites"
import ErrorPage from "../ErrorPage/ErrorPage"
// import logo from "../../images/logo.png"


function App() {
  const [savedTitles, setSaveTitles] = useState([])
  const [favoriteTitles, setFavoriteTitles] = useState([])
  const addToList = (title) => {
    // event.preventDefault()
    if(!savedTitles.includes(title)) {
      return setSaveTitles(previousList => [...previousList, title])
    } 
    // console.log("savedTitles", savedTitles)
  }
  const addToFavorites = (title) => {
    if(!favoriteTitles.includes(title)) {
      return setFavoriteTitles(previousList => [...previousList, title])
    } 
  }

  return (
    <div className="App">
      <NavBar />
      {/* <Link className="logoLink" to="/">
        <img className="logo" src={logo} alt="logo"/>
      </Link> */}
      <Switch>
        <Route
          exact path="/"
          render={() => 
            <main className="mainPageContainer">
              <MainPage addToList={addToList} addToFavorites={addToFavorites} savedTitles={savedTitles} favoriteTitles={favoriteTitles}/>
            </main>
          }
          />
        <Route 
          exact path="/question"
          render ={() => 
            <main className="questionPageContainer">
              <Questions />
            </main>
          }
          />
        <Route
          exact path="/myanimelist"
          render = {() => 
            <main className="listPageContainer">
              <AnimeList savedList={savedTitles}/>
            </main>
          }
          />
        <Route
          exact path="/favorites"
          render = {() =>
            <main className='favoritesPageContainer'>
              <Favorites favoriteList={favoriteTitles}/>
            </main>
          }
        />
        <Route
          exact path="/:id"
          render = {({match}) => 
          <main className="recommendationPageContainer">
              <Recommendation id={match.params.id} addToList={addToList} addToFavorites={addToFavorites} savedTitles={savedTitles} favoriteTitles={favoriteTitles}/>
            </main>
          }
          />
        <Route 
        path="*"
        render={() => {
          return (
            <main className='errorPageContainer'>
              <ErrorPage />
            </main>
          )
        }}
        />
        {/* <Redirect to="/404" /> */}
      </Switch>
    </div>
  );
}

export default App;

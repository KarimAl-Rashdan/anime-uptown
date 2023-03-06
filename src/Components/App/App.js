import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import MainPage from "../MainPage/MainPage"
import NavBar from "../NavBar/NavBar"
import Questions from "../Questions/Questions"
import Recommendation from "../Recommendation/Recommendation"
import AnimeList from "../AnimeList/AnimeList"
import Favorites from "../Favorites/Favorites"
import ErrorPage from "../ErrorPage/ErrorPage"
import PropTypes from "prop-types"

function App() {
  const [savedTitles, setSaveTitles] = useState([])
  const [favoriteTitles, setFavoriteTitles] = useState([])
  const addToList = (title) => {
    if(!savedTitles.includes(title)) {
      return setSaveTitles(previousList => [...previousList, title])
    } 
  }
  const addToFavorites = (title) => {
    if(!favoriteTitles.includes(title)) {
      return setFavoriteTitles(previousList => [...previousList, title])
    } 
  }

  return (
    <div className="App">
      <NavBar />
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
      </Switch>
    </div>
  );
}

export default App;

App.propTypes = {
  savedTitles: PropTypes.arrayOf(PropTypes.string),
  favoriteTitles: PropTypes.arrayOf(PropTypes.string),
  addToList: PropTypes.func,
  addToFavorites: PropTypes.func,
  savedList: PropTypes.arrayOf(PropTypes.string),
  favoriteList: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string
}

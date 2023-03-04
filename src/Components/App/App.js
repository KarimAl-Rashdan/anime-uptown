// import logo from './logo.svg';
import React, {useState} from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import MainPage from "../MainPage/MainPage"
import NavBar from "../NavBar/NavBar"
import Questions from "../Questions/Questions"
import Recommendation from "../Recommendation/Recommendation"
import AnimeList from "../AnimeList/AnimeList"



function App() {
  const [navBar, setNavBar] = useState(false)
  const [savedTitles, setSaveTitles] = useState([])
  const toggleNavBar = () => {
    setNavBar(!navBar)
  }

  const addToList = (id) => {
    // event.preventDefault()
    setSaveTitles([...savedTitles, id])
    console.log("savedTitles", savedTitles)
  }
  return (
    <div className="App">
      <Link to="/">logo</Link>
      <div className="navBarWrapper">
        {navBar && <NavBar />}
        <button onClick={() => toggleNavBar()} className="navBtn">Nav</button>
      </div>
      <Switch>
        <Route
          exact path="/"
          render={() => 
            <main className="mainPageContainer">
              <header>You're doing great</header>
              <MainPage addToList={addToList}/>
            </main>
          }
        />
        <Route 
          exact path="/question"
          render ={() => 
            <main className="questionPageContainer">
              {setNavBar(false)}
              <Questions />
            </main>
          }
        />
        <Route
          exact path="/myanimelist"
          render = {() => 
            <main className="listPageContainer">
              {setNavBar(false)}
              <AnimeList savedList={savedTitles}/>
            </main>
          }
        />
        <Route
          exact path="/:id"
          render = {({match}) => 
            <main className="recommendationPageContainer">
              {setNavBar(false)}
              <Recommendation id={match.params.id}/>
            </main>
          }
        />
      </Switch>
    </div>
  );
}

export default App;

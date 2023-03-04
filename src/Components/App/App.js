// import logo from './logo.svg';
import React, {useState} from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import MainPage from "../MainPage/MainPage"
import NavBar from "../NavBar/NavBar"
import Questions from "../Questions/Questions"




function App() {
  const [navBar, setNavBar] = useState(false)
  const toggleNavBar = () => {
    setNavBar(!navBar)
  }
  return (
    <div className="App">
      <Link to="/">logo</Link>
      <div className="navBarWrapper">
        {navBar && <NavBar />}
        <button onClick={() => toggleNavBar()}>Nav</button>
      </div>
      <Switch>
        <Route
          exact path="/"
          render={() => 
            <main className="mainPageContainer">
              <header>You're doing great</header>
              <MainPage />
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
          exact path="/:id"
          render = {({match}) => 
            <main className="recommendationPageContainer">
              {setNavBar(false)}
              <Recommendation />
            </main>
        }
       
      </Switch>
    </div>
  );
}

export default App;

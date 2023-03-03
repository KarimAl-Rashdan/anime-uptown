// import logo from './logo.svg';
import React, {useState} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import MainPage from "../MainPage/MainPage"
import NavBar from "../NavBar/NavBar"




function App() {
  const [navBar, setNavBar] = useState(false)
  const toggleNavBar = () => {
    setNavBar(!navBar)
  }
  return (
    <div className="App">
      {navBar && <NavBar />}
      <button onClick={() => toggleNavBar()}>Nav</button>
      {/* <NavBar /> */}
      <main className="mainPageContainer">
        <header>You're doing great</header>
        <MainPage />
      </main>
    </div>
  );
}

export default App;

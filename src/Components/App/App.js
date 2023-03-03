// import logo from './logo.svg';
import React from 'react';
import './App.css';
import MainPage from "../MainPage/MainPage"
import NavBar from "../NavBar/NavBar"




function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="mainPageContainer">
        <header>You're doing great</header>
        <MainPage />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import "./App.css";
import {NavBar} from "./components/NavBar";
import {Main} from './components/Main';
import {AboutMe} from "./components/AboutMe"

function App() {
  return (
    <div >
      <NavBar />
      <Main />
      <AboutMe />
    </div>
  );
}

export default App;

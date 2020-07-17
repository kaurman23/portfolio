import React from 'react';
import "./App.css";
import {NavBar} from "./components/NavBar";
import {Main} from './components/Main';
import {AboutMe} from "./components/AboutMe"
import {Projects} from "./components/Projects"

function App() {
  return (
    <div >
      <NavBar />
      <Main />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;

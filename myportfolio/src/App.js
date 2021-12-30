import React from "react";
import About from "./components/About";
import Intro from "./components/Introduction";
import "./App.css";
import "./styles/Global.css";
//import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
      </div>
    </div>
  );
}

export default App;
import React from "react";
import About from "./components/About";
import Intro from "./components/Introduction";
import SidebarNav from "./components/SideBarNav";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/rsuite.min.css";
import Credits from "./components/Credits";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Credits></Credits>
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;
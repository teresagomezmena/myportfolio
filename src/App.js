import React from "react";
import About from "./components/About";
import Intro from "./components/Introduction";
import SidebarNav from "./components/SideBarNav";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/rsuite.min.css";
import Credits from "./components/Credits";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
        <Tabs>
        <div label="About">
          <Intro></Intro>
          <About></About>
        </div>
        <div label="Experience">
          <Experience></Experience>
        </div>
        <div label="Projects">
          <Projects></Projects>
        </div>
      </Tabs>
      <Credits></Credits>
      <SidebarNav />
    </div>
  );
}

export default App;
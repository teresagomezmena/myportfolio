import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="experience">
        <FadeInSection>
          <span className="section-header ">
            {"what did i do all this time"}
          </span>
          <JobList></JobList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
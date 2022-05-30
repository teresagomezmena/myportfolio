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
      activeKey: "1",
      visible: true
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
        <Typist avgTypingDelay={120}>
          <span className="experience-title">
          {"what do i know?"}
          </span>
      </Typist>
        <FadeInSection>
          <div className="intro-desc">
            Throughout the past years I have been trying to learn in as many ways as possible. Here is a list of
            the experiences from which I learnt the most:
          </div>
          <JobList></JobList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
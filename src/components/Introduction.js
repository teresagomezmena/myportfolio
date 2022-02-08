import React from "react";

import "../styles/Introduction.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
//import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
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
      <div id="intro">
     <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"terri"}</span>
            {" here."}
          </span>
      </Typist>
        <FadeInSection>
          <div className="intro-subtitle"> 
          Welcome to my portfolio.
          </div>
          <div className="intro-desc">
            I'm a computer scientist based in the Netherlands. As my university does not treat front-end in almost any of the courses, 
            I decided to learn it by myself by coding my own personal website.
          </div>
          <a
            href="mailto:t.gomezmena@student.tudelft.nl"
            className="intro-contact"
          >
          {"contact me!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
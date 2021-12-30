import React from "react";

import "../styles/Introduction.css";
//import Typist from "react-typist";
//import "react-typist/dist/Typist.css";
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
     
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"terri"}</span>
            {" here."}
          </span>
      
        <FadeInSection>
          <div className="intro-subtitle">I don't know what I'm doing.</div>
          <div className="intro-desc">
            I'm a computer scientist based in the Netherlands.
          </div>
          <a
            href="mailto:t.gomezmena@student.tudelft.nl"
            className="intro-contact"
          >
              {"say hi"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
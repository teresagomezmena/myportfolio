import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

// The 'About' section will be at the start of my webpage, is a short summary of me.
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      // to check what this is
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
    const one = (
      <p>
        I am currently studying <b>Computer Science</b> at{" "}
        <b> the Technical University of TU Delft </b>. I work as a Software Engineer
        for one of the Dream Teams, <a href="https://www.teamepoch.net/">Team Epoch</a>, of the university: 
        participating in  <b> Artificial Intelligence competitions </b>, hosted in platforms such as 
        Kaggle, Driven Data, Awcrowd or Zindi.
      </p>
    );
    const two = (
      <p>
        I'm into any sort of <b>software development</b> that requires
        creativity and style. My main areas of interest include <b>machine learning</b>,{" "}
        and <b>frontend development</b>. 
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:t.gomezmena@student.tudelft.nl">
          t.gomezmena@student.tudelft.nl
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Python",
      "React.js",
      "Java",
      "Node.js",
      "HTML",
      "C++",
      "CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/me.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">#me, myself and i</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
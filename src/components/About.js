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
        My name is Teresa Gomez Mena: 19 years old, born in Spain, spent my highschool experience
        in Italy. I am currently completing a bachelor in <b>Computer Science</b> at{" "}
        <b> the Technical University of TU Delft</b>.
        While studying during my second year, I worked part-time as a Software / Front-End Engineer and Scrum Master for a university 
        student Dream Team, named <a href="https://www.teamepoch.net/">Team Epoch</a>. Here, we
        aimed to participate and win  <b> artificial intelligence competitions</b>. 
      </p>
    );
    const two = (
      <p>
        I'm into any sort of <b>software development</b> that requires
        creativity and logic. In fact, my main areas of interest include 
        <b> front-end</b> development, <b> machine learning</b> and anything that has to do with <b>design</b>.
      </p>
    );
    const three = (
      <p>
        In my free time I like to play pokemon, drink tea and lift weights at the gym.
      </p>
    );
    const four = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:t.gomezmena@student.tudelft.nl" className="email">
          t.gomezmena@student.tudelft.nl
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two, three];

    const tech_stack = [
      "Javascript",
      "Python",
      "Java",
      "HTML",
      "C++",
      "CSS", 
      "SQL",
      "React.js",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "Django"
    ];

    var image = require("./assets/me2.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">#me, myself and i</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"\n \nHere are some programming languages and technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {four}
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
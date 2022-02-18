import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

class Projects extends React.Component {
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
    const projects = {
      "Portfolio": {
        desc:
          "A website created using React.js, here I talk about myself.",
        techStack: "React.js, Javascript, HTML, CSS",
        link: "https://github.com/teresagomezmena/myportfolio",
        open: "."
      }, 
      "Reversi": {
        desc:
          "A two-player online game created with Node.js. ",
        techStack: "Node.js, Javascript, HTML, CSS",
        link: ".",
        open: "."
      },
      "Knowledge WebPage": {
        desc: 
          "Webpage to keep track of Team Epoch's blogs and news. ",
        techStack: "React.js, Javascript, HTML, CSS",
        link: ".",
        open: "."
      },
      "Community Platform": {
        desc:
          "Platform that aims to connect students. To be finished. ",
        techStack: "To be determined",
        link: ".",
        open: "."
      }
    };

    return (
      <div id="projects">
        <Typist avgTypingDelay={120}>
         <span className="header">
            {"#nice projects i worked on"}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-desc">
              Here are other things I have worked on that helped me broaden my knowledge. Feel free to click on the icons to get to more information!
            </div>
        </FadeInSection>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]}>
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
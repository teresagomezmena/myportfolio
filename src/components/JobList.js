import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Epoch: {
      jobTitle: "Software (Machine Learning) Engineer @",
      duration: "AUG 2021 - MARCH 2022",
      desc: [
        "Main goal: win Artificial Intelligence competitions, hosted in online global platforms.",
        "I have worked in every step  of the process: data preprocessing, creation of the model and optimization. As well as some front end development and Scrum Master.",
        "I work in a group of four computer scientist, using sprints and weekly meetings."
      ]
    },
    Imperial_College: {
        jobTitle: "Imperial College London_Global Summer School @",
        duration: "AUG 2019",
        desc: [
          "Programme: Introduction to oscillations and Python plotting, various workshops and a team competition about the development of new products using wearable tech.",
          "Skills acquired: Critical thinking, problem solving, teamwork, presentation skills, multicultural awareness and further Python knowledge."
        ]
      },
      Polictecnico_Milano: {
        jobTitle: "Coding TechCamp @",
        duration: "JUNE 2019",
        desc: [
          "Programme: Following the Python lessons held by computer science university teachers. The main objective was to code a basic working game.",
          "Skills acquired: Python knowledge, presentation skills, teamwork skills, problem solving, time management and leadership."
         ]
      },
      Techinnova_SRL: {
        jobTitle: "Apprenticeship @",
        duration: "JUN 2019",
        desc: [
          "Techinnova S.r.l. is an Italian Start-up Incubator and 3D Printer Laboratory.",
          "Skills acquired: independent work for long periods of time, business techniques, 3D printer knowledge and deep understanding on start-up’s world."
        ]
      },
      Sintetika_Sinks: {
        jobTitle: "Apprenticeship @",
        duration: "JUN 2018 - JULY 2018",
        desc: [
          "Sintetika Sinks S.L. is a spanish thermosetting plastics' transformer.",
          "Skills acquired: Independent work for long periods of time, business techniques, digital marketing implementation and web design."
        ]
      },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
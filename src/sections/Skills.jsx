import React from "react";
import SkillCard from "../components/SkillCard";
import "../styles/skills.css";

// import skill icons from assets
import reactIcon from "../assets/skills/react.svg";
import jsIcon from "../assets/skills/javascript.svg";
import jqueryIcon from "../assets/skills/jquery.svg";
import nodeIcon from "../assets/skills/nodejs.svg";
import htmlIcon from "../assets/skills/html.svg";
import cssIcon from "../assets/skills/css.svg";
import wordpressIcon from "../assets/skills/wordpress.svg";
import mysqlIcon from "../assets/skills/mysql.svg";
// add the rest...

const skills = [
  { name: "React", icon: reactIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Jquery", icon: jqueryIcon },
  { name: "Nodejs", icon: nodeIcon },
  { name: "Html", icon: htmlIcon },
  { name: "Css", icon: cssIcon },
  { name: "Wordpress", icon: wordpressIcon },
  { name: "Mysql", icon: mysqlIcon },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

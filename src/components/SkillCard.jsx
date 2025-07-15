import React from "react";
import "../styles/skills.css";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} className="skill-icon" />
      <p className="skill-name">{name}</p>
    </div>
  );
};

export default SkillCard;

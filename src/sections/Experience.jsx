import React from "react";
import "../styles/experience.css";
import experienceData from "../data/experienceData";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.side}`}
          >
            <h3>{item.title}</h3>
            <p className="timeline-sub">{item.subtitle}</p>
            {item.extra && <p className="timeline-sub">{item.extra}</p>}
            {item.points.length > 0 && (
              <ul className="timeline-list">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            <span className="timeline-date">{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

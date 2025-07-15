import React from "react";
import "../styles/hero.css";
import profileImg from "../assets/profile.png";
import resume from '../assets/pdf/resume.pdf';
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="text-section">
          <h1>
            Hi <span className="wave">👋</span>, I'm <br />
            <strong>Pratik Deshmukh</strong>
          </h1>
          <h2>
            <span className="typed-text">
            {/* I'm a&nbsp; */}
              <Typewriter
                options={{
                  strings: ["Frontend Developer.", "Backend Developer.", "Full Stack Developer.", "Automation Developer."],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
            </span>
          </h2>

          <div className="cta-buttons">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn resume-btn">RESUME</a>
            <a href="#contact" className="btn contact-btn">CONTACT ME</a>
          </div>
        </div>
        <div className="image-section">
          <div className="profile-circle">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

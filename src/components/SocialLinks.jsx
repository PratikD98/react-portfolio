import React from "react";
import "../styles/sociallinks.css";
import GitHubIcon from "../assets/icons/github.svg"; 
import LinkedInIcon from "../assets/icons/linkedin.svg";
import Twitter from "../assets/icons/twitter-x.svg";

const SocialLinks = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com/PratikD98" target="_blank" rel="noreferrer">
        <img src={GitHubIcon} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/pratik-deshmukh98/" target="_blank" rel="noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn" />
      </a>
      <a href="https://x.com/PratikD70952346" target="_blank" rel="noreferrer">
<<<<<<< HEAD
        <img src="src/assets/icons/twitter-x.svg" alt="X (Twitter)" />
=======
>>>>>>> b40f9cb (Fix: Social icons not showing on Netlify)
        <img src={Twitter} alt="X (Twitter)" />
      </a>
      {/* <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
        <img src="src/assets/icons/stack-overflow.svg" alt="Stack Overflow" />
      </a> */}
    </div>
  );
};

export default SocialLinks;

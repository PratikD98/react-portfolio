import React from "react";
import "../styles/sociallinks.css"; 

const SocialLinks = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com/PratikD98" target="_blank" rel="noreferrer">
        <img src="src/assets/icons/github.svg" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/pratik-deshmukh98/" target="_blank" rel="noreferrer">
        <img src="src/assets/icons/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="https://x.com/PratikD70952346" target="_blank" rel="noreferrer">
        <img src="src/assets/icons/twitter-x.svg" alt="X (Twitter)" />
      </a>
      {/* <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
        <img src="src/assets/icons/stack-overflow.svg" alt="Stack Overflow" />
      </a> */}
    </div>
  );
};

export default SocialLinks;

import React from 'react';
import "../styles/thankyou.css";

const ThankYou = ({ goHome }) => {
  return (
    <section className="thankyou-section">
      <div className="thankyou-box">
        <img src="/email-icon.svg" alt="Email" className="email-icon" />
        <h1>Thanks for submitting!</h1>
        <p>Your message has been sent!</p>
        <button onClick={goHome}>Go Home</button>
      </div>
    </section>
  );
};

export default ThankYou;

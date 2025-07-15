import React, { useState } from 'react';
import SocialLinks from "../components/SocialLinks";
import "../styles/contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // Just log it (optional)
    console.log("Submitted Data:", formData);
    // Allow form to submit normally to FormSubmit.co
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="form-container">
        <p className="form-info">
          If you have any questions or concerns, please don’t hesitate to contact me.
          I am open to work opportunities that align with my skills and interests.
        </p>

        {/* ✅ Set action to your email for FormSubmit */}
        <form
          action="https://formsubmit.co/pratikdeshmukh1114@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* Required hidden inputs for behavior */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />


          <label>Name: *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email: *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message: *</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">SEND MESSAGE 📧</button>
        </form>
      </div>

      <div className="contact-details">
        <p><span className="icon">📧</span> <span className="text">pratikdeshmukh1114@gmail.com</span></p>
        <p><span className="icon">📍</span> <span className="text">Thane (west) 400602.</span></p>
        <SocialLinks />
        
      </div>
    </section>
  );
};

export default Contact;
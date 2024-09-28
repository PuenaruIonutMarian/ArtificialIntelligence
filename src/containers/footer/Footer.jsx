import React from 'react';
import './footer.css';
import aiLogo from '../../assets/artificial-intelligence.png';

const Footer = () => {
  return (
  <div className="gpt4__footer section__padding">
    <div className="gpt4__footer-heading">
      <h1 className="gradient__text">Embrace Tomorrow Today: Be Ahead of the Curve</h1>
    </div>

    <div className="gpt4__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt4__footer-links">
      <div className="gpt4__footer-links_logo">
        <img src={aiLogo} alt="ai_logo" />
        <p>Ionut, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Get in touch</h4>
        <p>Example creation</p>
        <p>00033 033 033</p>
        <p>info@email.com</p>
      </div>
    </div>

    <div className="gpt4__footer-copyright">
      <p>@2023 Artificial intelligence. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
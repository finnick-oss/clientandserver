import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
        <h1 className="contact-us-title">VisionVow</h1>
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>
        <p className='footer-copyright'>&copy; 2024 VisionVow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-trademark"> {`\u00a9 Techranga 2019`} </h1>
      <div className="footer-contacts">
        <div className="footer-contacts__email">
          <div className="footer-contacts__email_logo"></div>
          <a className="footer-contacts__email_text" href="mailto:info@techranga.lt" rel="noopener noreferrer nofollow"> info@techranga.lt </a>
        </div>
        <div className="footer-contacts__phone">
          <div className="footer-contacts__phone_logo"></div>
          <a className="footer-contacts__phone_text" href="tel:+37037451569" rel="noopener noreferrer nofollow"> +370 37 451569 </a>
        </div>
        <div className="footer-contacts__facebook">
          <div className="footer-contacts__facebook_logo"></div>
          <a className="footer-contacts__facebook_text" href="https://www.facebook.com/Ttechranga/" target="_blank" rel="noopener noreferrer nofollow"> Techranga </a>
        </div>
      </div>
  </footer>
  );
};

export default Footer;

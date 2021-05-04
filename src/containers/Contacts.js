import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

const Contacts = () => {
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  return (
    <div className={ `${ active ? "hide" : "contacts" }` }>
    <div className="contacts-header"></div>
    <div className="contacts-wrap">
      <div className="contacts-content">
        <h1 className="contacts-content__title"> { t(`contacts.title`) } </h1>
        <h2 className="contacts-content__text"> { t(`contacts.text01`) } </h2>
        <h2 className="contacts-content__text"> { t(`contacts.text02`) } </h2>
        <div className="contacts-content__location">
          <div className="contacts-content__location_logo"></div>
          <h2 className="contacts-content__location_text"> Technikos g. 7A <br /> { t(`contacts.address`) } </h2>
        </div>
        <div className="contacts-content__email">
          <div className="contacts-content__email_logo"></div>
          <a className="contacts-content__email_text" href="mailto:info@techranga.lt" rel="noopener noreferrer nofollow"> info@techranga.lt </a>
        </div>
        <div className="contacts-content__phone">
          <div className="contacts-content__phone_logo"></div>
          <a className="contacts-content__phone_text" href="tel:+37037451569" rel="noopener noreferrer nofollow"> +370 37 451569 </a>
        </div>
        <div className="contacts-content__facebook">
          <div className="contacts-content__facebook_logo"></div>
          <a className="contacts-content__facebook_text" href="https://www.facebook.com/Ttechranga/" target="_blank" rel="noopener noreferrer nofollow"> Techranga </a>
        </div>
        <div className="contacts-content__linkedin">
          <div className="contacts-content__linkedin_logo"></div>
          <a className="contacts-content__linkedin_text" href="https://www.linkedin.com/company/techranga/" target="_blank" rel="noopener noreferrer nofollow"> Techranga </a>
        </div>
      </div>
      <div className="contacts-media">
        <iframe className="contacts-media__map"
          title="Techranga"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1363.0564014027448!2d24.010492611094648!3d54.91076491004883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7183bf5e41be9%3A0x98513bb6be3cb27b!2sTechnikos%20g.%207A%2C%20Kaunas%2051209!5e0!3m2!1sen!2slt!4v1580333334219!5m2!1sen!2slt" 
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  </div>
  );
};

export default Contacts;

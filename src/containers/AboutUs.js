import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';
import ISO9001 from '../assets/ISO9001.jpg';
import ISO14001 from '../assets/ISO14001.jpg';
import ISO45001 from '../assets/ISO45001.jpg';
import media from '../assets/about_us_2x.jpg';

const AboutUs = () => {
  const [certificateISO9001, setISO9001] = useState(false);
  const [certificateISO14001, setISO14001] = useState(false);
  const [certificateISO45001, setISO45001] = useState(false);
  const { state } = useContext(NavigationContext);
  const { t } = useTranslation();
  const active = state.isMenuActive;

  return (
    <div className={ `${ active ? "hide" : "about" }` }>
      <div className={ certificateISO9001 ? "about-certificate" : "hide" }>
        <img className="about-certificate__image" src={ certificateISO9001 ? ISO9001 : "" } alt="" onClick={ () => setISO9001(false) } />
      </div>
      <div className={ certificateISO14001 ? "about-certificate" : "hide" }>
        <img className="about-certificate__image" src={ certificateISO14001 ? ISO14001 : "" } alt="" onClick={ () => setISO14001(false) } />
      </div>
      <div className={ certificateISO45001 ? "about-certificate" : "hide" }>
        <img className="about-certificate__image" src={ certificateISO45001 ? ISO45001 : "" } alt="" onClick={ () => setISO45001(false) } />
      </div>
      <div className="about-content">
        <p className="about-content__text"> { t(`about.text01`) } </p>
        <br />
        <p className="about-content__text"> { t(`about.text02`) } </p>
        <br />
        <p className="about-content__text"> { t(`about.text03`) } </p>
        <div className="about-content__certificate">
          <img className="about-content__certificate--img" src={ ISO9001 } alt="" onClick={ () => setISO9001(true) } />
          <img className="about-content__certificate--img" src={ ISO14001 } alt="" onClick={ () => setISO14001(true) } />
          <img className="about-content__certificate--img" src={ ISO45001 } alt="" onClick={ () => setISO45001(true) } />
        </div>
        <div className="about-content__tables">
          <Link className="about-content__tables--text" to='/milling'> { t(`about.tables`) } </Link>
        </div>
      </div>
      <img className="about-media" src={media} alt="" />
  </div>
  );
};

export default AboutUs;

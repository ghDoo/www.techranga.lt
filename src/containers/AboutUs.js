import React from 'react';
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="about-content">
        <p className="about-content__text"> { t(`about.text01`) } </p>
        <br />
        <p className="about-content__text"> { t(`about.text02`) } </p>
        <br />
        <p className="about-content__text"> { t(`about.text03`) } </p>
        <div className="about-content__iso">
          <div className="about-content__iso_logo"></div>
          <div className="about-content__iso_wrap">
            <h2 className="about-content__iso_wrap--number"> ISO 9001:2015 </h2>
            <h2 className="about-content__iso_wrap--number"> ISO 14001:2015 </h2>
            <h2 className="about-content__iso_wrap--number"> ISO 45001:2018 </h2>
          </div>
        </div>
      </div>
      <div className="about-media"></div>
  </div>
  );
};

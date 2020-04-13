import React from 'react';
import { useTranslation } from "react-i18next";

export const Languages = () => {
  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header-languages">
      <button className="header-languages__lt" onClick={() => changeLanguage('lt')}> LT </button>
      <button className="header-languages__en" onClick={() => changeLanguage('en')}> EN </button>
      <button className="header-languages__de" onClick={() => changeLanguage('de')}> DE </button>
    </div>
  );
};

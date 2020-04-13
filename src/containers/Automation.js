import React from 'react';
import { useTranslation } from "react-i18next";

export const Automation = () => {
  const { t } = useTranslation();
  return (
    <div className="automation">
      <div className="automation-content">
        <p className="automation-content__text"> { t(`automation.text01`) } </p>
        <br />
        <p className="automation-content__text"> { t(`automation.text02`) } </p>
      </div>
  </div>
  );
};

import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

const Automation = () => {
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  return (
    <div className={ `${ active ? "hide" : "automation" }` }>
      <div className="automation-content"></div>
      <p className="automation-text"> { t(`automation.text01`) } <br /> <br /> { t(`automation.text02`) } </p>
  </div>
  );
};

export default Automation;

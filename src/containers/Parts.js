import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

export const Parts = () => {
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  return (
    <div className={ `${ active ? "hide" : "parts" }` }>
      <div className="parts-content">
        <p className="parts-content__text"> { t(`parts.text01`) } </p>
        <br />
        <p className="parts-content__list">
          <li> { t(`parts.list01`) } </li>
          <li> { t(`parts.list02`) } </li>
          <li> { t(`parts.list03`) } </li>
          <li> { t(`parts.list04`) } </li>
          <li> { t(`parts.list05`) } </li>
          <li> { t(`parts.list06`) } </li>
          <li> { t(`parts.list07`) } </li>
        </p>
      </div>
      <div className="parts-media"></div>
  </div>
  );
};

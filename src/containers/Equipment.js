import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

export const Equipment = () => {
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  return (
    <div className={ `${ active ? "hide" : "equipment" }` }>
      <div className="equipment-content">
        <p className="equipment-content__text"> { t(`equipment.text01`) } </p>
        <br />
        <p className="equipment-content__list">
          <li> { t(`equipment.list01`) } </li>
          <li> { t(`equipment.list02`) } </li>
          <li> { t(`equipment.list03`) } </li>
          <li> { t(`equipment.list04`) } </li>
          <li> { t(`equipment.list05`) } </li>
          <li> { t(`equipment.list06`) } </li>
          <li> { t(`equipment.list07`) } </li>
          <li> { t(`equipment.list08`) } </li>
        </p>
        <br />
        <p className="equipment-content__text"> { t(`equipment.text02`) } </p>
      </div>
      <div className="equipment-media"></div>
  </div>
  );
};

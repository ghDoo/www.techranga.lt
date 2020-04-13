import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className="header-nav">
      <ul className="header-nav__item">
        <li className="header-nav__item_button">
          <Link className="header-nav__item_button--link" to='/home'> { t(`navigation.home`) }  </Link>
        </li>
        <li className="header-nav__item_button">
          <Link className="header-nav__item_button--link" to='/about'> { t(`navigation.about`) } </Link>
        </li>
        <li className="header-nav__item_button">
          <Link className="header-nav__item_button--link" to='/equipment'> { t(`navigation.equipment`) } </Link>
        </li>
        <li className="header-nav__item_button">
          <Link className="header-nav__item_button--link" to='/parts'> { t(`navigation.parts`) } </Link>
        </li>
        <li className="header-nav__item_button"> 
          <Link className="header-nav__item_button--link" to='/automation'> { t(`navigation.automation`) }</Link>
        </li>
        <li className="header-nav__item_button">
          <Link className="header-nav__item_button--link" to='/projects'> { t(`navigation.projects`) } </Link>
        </li>
        <li className="header-nav__item_button">
          <Link className="header-nav__item_button--link" to='/contacts'> { t(`navigation.contacts`) } </Link>
        </li>
      </ul>
    </nav>
  );
};

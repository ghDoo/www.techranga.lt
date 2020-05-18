import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { NavigationContext } from '../../App';

export const MobileNav = () => {
  const { state, dispatch } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  return (
    <nav className={ `mobile` } onClick={ () => dispatch({ type: 'toggleMenu' }) }>
      <ul className={ `${ active ? "mobile-nav" : "hide" }` }>
        <li className={ `${ active ? "mobile-nav__button" : "hide" }` }>
          <Link className={ `${ active ? "mobile-nav__button_link" : "hide" }` } to='/home'>
            { t(`navigation.home`) }
          </Link>
        </li>
        <li className={ `${active ? "mobile-nav__button" : "hide" }` }>
          <Link className={ `${active ? "mobile-nav__button_link" : "hide" }` } to='/about'>
            { t(`navigation.about`) } 
          </Link>
        </li>
        <li className={ `${active ? "mobile-nav__button" : "hide" }` }>
          <Link className={ `${active ? "mobile-nav__button_link" : "hide" }` } to='/equipment'> 
            { t(`navigation.equipment`) }
          </Link>
        </li>
        <li className={ `${active ? "mobile-nav__button" : "hide" }` }>
          <Link className={ `${active ? "mobile-nav__button_link" : "hide" }` } to='/parts'> 
            { t(`navigation.parts`) } 
          </Link>
        </li>
        <li className={ `${active ? "mobile-nav__button" : "hide" }` }> 
          <Link className={ `${active ? "mobile-nav__button_link" : "hide" }` } to='/automation'> 
            { t(`navigation.automation`) }
          </Link>
        </li>
        <li className={ `${active ? "mobile-nav__button" : "hide" }` }>
          <Link className={ `${active ? "mobile-nav__button_link" : "hide" }` } to='/projects'> 
            { t(`navigation.projects`) } 
          </Link>
        </li>
        <li className={ `${active ? "mobile-nav__button" : "hide" }` }>
          <Link className={ `${active ? "mobile-nav__button_link" : "hide" }` } to='/contacts'> 
            { t(`navigation.contacts`) }
          </Link>
        </li>
      </ul>
    </nav>
  );
};

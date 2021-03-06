import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { NavigationContext } from '../../App';

const Nav = () => {
  const { state, dispatch } = useContext(NavigationContext);
  const { t } = useTranslation();

  return (
    <nav className="header-nav">
      <ul className="header-nav__item">
        <li className='header-nav__item_button'>
          <Link className="header-nav__item_button--link" to='/'> { t(`navigation.home`) }  </Link>
        </li>
        <li className='header-nav__item_button'>
          <Link className="header-nav__item_button--link" to='/about'> { t(`navigation.about`) } </Link>
        </li>
        <li className='header-nav__item_button'>
          <Link className="header-nav__item_button--link" to='/equipment'> { t(`navigation.equipment`) } </Link>
        </li>
        <li className='header-nav__item_button'>
          <Link className="header-nav__item_button--link" to='/parts'> { t(`navigation.parts`) } </Link>
        </li>
        <li className='header-nav__item_button'> 
          <Link className="header-nav__item_button--link" to='/automation'> { t(`navigation.automation`) }</Link>
        </li>
        <li className='header-nav__item_button'>
          <Link className="header-nav__item_button--link" to='/projects'> { t(`navigation.projects`) } </Link>
        </li>
        <li className='header-nav__item_button'>
          <Link className="header-nav__item_button--link" to='/es_projects'> { t(`navigation.es_projects`) } </Link>
        </li>
        <li className='header-nav__item_button'>
          <Link className="header-nav__item_button--link" to='/contacts'> { t(`navigation.contacts`) } </Link>
        </li>
      </ul>
      <div className={ `header-nav__menu` } onClick={ () => dispatch({ type: 'toggleMenu' }) }>
      </div>
    </nav>
  );
};

export default Nav;

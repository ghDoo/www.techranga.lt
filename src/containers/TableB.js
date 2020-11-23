import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

const Tables = () => {
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  return (
    <div className={ `${ active ? "hide" : "tables" }` }>
      <table className="tables-wrapper">
        <thead className="tables-header">
          <tr className="tables-header__row">
            <th className="tables-header__title">
              <Link className="tables-header__title--button" to='/milling'> Frezavimo staklės </Link>
            </th>
            <th className="tables-header__title">
              <Link className="tables-header__title--button" to='/turning'> Tekinimo staklės </Link>
            </th>
            <th className="tables-header__title">
              <Link className="tables-header__title--button" to='/other'> Kiti įrenginiai </Link>
            </th>
          </tr>
        </thead>
        <thead className="tables-header">
          <tr className="tables-header__row">
            <th className="tables-header__title">Tekinimo staklės</th>
            <th className="tables-header__title">Diametras</th>
            <th className="tables-header__title">Ilgis</th>
          </tr>
        </thead>
        <tbody className="tables-body">
          <tr className="tables-body__row">
            <td className="tables-body__column--title">Hitachi SEIKI NF-20</td>
            <td>200</td>
            <td>500</td>
          </tr>
          <tr className="tables-body__row">
            <td className="tables-body__column--title">PROMA SPE-1000PV</td>
            <td className="tables-body__column">200</td>
            <td className="tables-body__column">900</td>
          </tr>
          <tr className="tables-body__row">
            <td className="tables-body__column--title">1K62</td>
            <td className="tables-body__column">250</td>
            <td className="tables-body__column">1000</td>
          </tr>
          <tr className="tables-body__row">
            <td className="tables-body__column--title">1K62</td>
            <td className="tables-body__column">250</td>
            <td className="tables-body__column">1400</td>
          </tr>
          <tr className="tables-body__row">
            <td className="tables-body__column--title">1M63F101</td>
            <td className="tables-body__column">500</td>
            <td className="tables-body__column">1400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;

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
            <th className="tables-header__title" colSpan="2">
              <Link className="tables-header__title--button" to='/milling'> Frezavimo staklės </Link>
            </th>
            <th className="tables-header__title" colSpan="2">
              <Link className="tables-header__title--button" to='/turning'> Tekinimo staklės </Link>
            </th>
            <th className="tables-header__title" colSpan="2">
              <Link className="tables-header__title--button" to='/other'> Kiti įrenginiai </Link>
            </th>
          </tr>
        </thead>
        <thead className="tables-header">
          <tr className="tables-header__row">
            <th className="tables-header__title">Frezavimo staklės</th>
            <th className="tables-header__title">Ašys</th>
            <th className="tables-header__title">Darbinis paviršius</th>
            <th className="tables-header__title">X</th>
            <th className="tables-header__title">Y</th>
            <th className="tables-header__title">Z</th>
          </tr>
        </thead>
        <tbody className="tables-body">
          <tr className="tables-body__row">
            <td className="tables-body__column--title">HAAS VF-2</td>
            <td className="tables-body__column">3</td>
            <td className="tables-body__column">914x356</td>
            <td className="tables-body__column">762</td>
            <td className="tables-body__column">406</td>
            <td className="tables-body__column">504</td>
          </tr>
          <tr className="tables-body__row">
            <td className="tables-body__column--title">HAAS VF-2</td>
            <td className="tables-body__column">3</td>
            <td className="tables-body__column">914x356</td>
            <td className="tables-body__column">762</td>
            <td className="tables-body__column">406</td>
            <td className="tables-body__column">508</td>
          </tr>
          <tr className="tables-body__row">
            <td className="tables-body__column--title">KIRA KV-5MC</td>
            <td className="tables-body__column">3</td>
            <td className="tables-body__column">895x410</td>
            <td className="tables-body__column">650</td>
            <td className="tables-body__column">410</td>
            <td className="tables-body__column">510</td>
          </tr>
          <tr className="tables-body__row">
            <td className="tables-body__column--title">MAZAK Micro-center V</td>
            <td className="tables-body__column">3</td>
            <td className="tables-body__column">760x400</td>
            <td className="tables-body__column">760</td>
            <td className="tables-body__column">400</td>
            <td className="tables-body__column">460</td>
          </tr>
          <tr className="tables-body__row">
            <td className="tables-body__column--title">VEB DDB SA 315/1 AS</td>
            <td className="tables-body__column">3</td>
            <td className="tables-body__column">710x400</td>
            <td className="tables-body__column">400</td>
            <td className="tables-body__column">220</td>
            <td className="tables-body__column">340</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;

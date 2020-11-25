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
            <th className="tables-header__title--btn">
              <Link className="tables-header__title--button" to='/milling'> { t(`tables.milling.milling-title`) } </Link>
            </th>
            <th className="tables-header__title--btn">
              <Link className="tables-header__title--button" to='/turning'> { t(`tables.turning.turning-title`) } </Link>
            </th>
            <th className="tables-header__title--btn active">
              <Link className="tables-header__title--button active-btn" to='/other'> { t(`tables.other.other-title`) } </Link>
            </th>
          </tr>
        </thead>
        <thead className="tables-header">
          <tr className="tables-header__row">
            <th className="tables-header__title" colSpan="3"> { t(`tables.other.other-title`) } </th>
          </tr>
        </thead>
        <tbody className="tables-body">
          <tr className="tables-body__row--other">
            <td className="tables-body__column--other" colSpan="3">
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_01`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_02`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_03`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_04`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_05`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_06`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_07`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_08`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_09`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_10`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_11`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_12`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_13`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_14`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_15`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_16`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_17`) } </p>
              <p className="tables-body__column--other_p"> { t(`tables.other.other-equipment_18`) } </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;

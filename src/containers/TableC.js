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
            <th className="tables-header__title" colSpan="3">KITI ĮRENGINIAI</th>
          </tr>
        </thead>
        <tbody className="tables-body">
          <tr className="tables-body__row--other">
            <td className="tables-body__column--other" colSpan="3">
              <p className="tables-body__column--other_p">Koordinatinio ištekinimo staklės MAHO MH800P (1150x700mm)</p>
              <p className="tables-body__column--other_p">Apvalaus šlifavimo staklės 3U13DF11 (Ø200x500mm)</p>
              <p className="tables-body__column--other_p">Plokščio šlifavimo staklės 3L722 (1100x320x280mm)</p>
              <p className="tables-body__column--other_p">Elektroerozinės staklės (400x800mm)</p>
              <p className="tables-body__column--other_p">Elektroerozinės staklės SP150</p>
              <p className="tables-body__column--other_p">Juostinės pjovimo staklės Pegas Gonda 220x250 GH-R</p>
              <p className="tables-body__column--other_p">Vertikalaus drožimo staklės Kommunar 7A420 (Ø500x200mm)</p>
              <p className="tables-body__column--other_p">Vertikalios gręžimo staklės, 2 vnt.</p>
              <p className="tables-body__column--other_p">Presas (alkūninis) (100T, 850x560mm)</p>
              <p className="tables-body__column--other_p">Presas (hidraulinis) (30T, 995x1000mm)</p>
              <p className="tables-body__column--other_p">Presas (rankinis) (435x325mm)</p>
              <p className="tables-body__column--other_p">Galandinimo staklės, 2 vnt.</p>
              <p className="tables-body__column--other_p">Elektrinė krosnis SNOL 10/1200 (1200°C, 295x420x295mm)</p>
              <p className="tables-body__column--other_p">Elektrinė krosnis SNOL 1 6.2.5.1/9-IZ (900°C, 170x295x115mm)</p>
              <p className="tables-body__column--other_p">Smėliapūtė SBC350 (945x605x580mm)</p>
              <p className="tables-body__column--other_p">Kietumo nustatymo įrenginys pagal HRC skalę</p>
              <p className="tables-body__column--other_p">Rankinis lakštų valcavimo įrenginys (plotis 1000 mm)</p>
              <p className="tables-body__column--other_p">Lenkimo įrenginys (plotis 700mm)</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;

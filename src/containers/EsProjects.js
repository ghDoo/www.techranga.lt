import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

const EsProjects = () => {
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  return (
    <div className={ `${ active ? "hide" : "es_projects" }` }>
      <div className="es_projects-content">
        <p className="es_projects-content__text"> { t(`es_projects.title`) } </p>
        <br />
        <p className="es_projects-content__text"> { t(`es_projects.project_title`) } </p>
        <br />
        <p className="es_projects-content__text"> { t(`es_projects.project_text`) } </p>
        <br />
        <p className="es_projects-content__text"> { t(`es_projects.project_nr`) } </p>
        <br />
        <p className="es_projects-content__text"> { t(`es_projects.project_name`) } </p>
        <br />
        <p className="es_projects-content__text"> { t(`es_projects.project_info`) } </p>
        <br />
        <p className="es_projects-content__text"> { t(`es_projects.project_date`) } </p>
        <br />
        <p className="es_projects-content__text"> { t(`es_projects.project_sum`) } </p>
      </div>
      <div className={`es_projects-media_${ t(`es_projects.project_img`) }`}></div>
  </div>
  );
};

export default EsProjects;

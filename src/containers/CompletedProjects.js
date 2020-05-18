import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

export const CompletedProjects = () => {
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  return (
    <div className={ `${ active ? "hide" : "projects" }` }>
      <div className="projects-content">
        <h2 className="projects-content__text"> { t(`projects.text01`) } </h2>
        <br />
        <a className="projects-content__text_link" href="https://www.facebook.com/Ttechranga/" target="_blank" rel="noopener noreferrer nofollow">
          <img className="projects-content__text_link--logo" src={require("../assets/facebook_logo_b.png")} alt="facebook logo" />
        </a>
      </div>
      <div className="projects-media">
        <iframe className="projects-media__01"
          title="Techranga" 
          src="https://www.youtube.com/embed/7PpWg7RLj6M" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          rel="noopener noreferrer nofollow">
        </iframe>
        <iframe className="projects-media__02"
          title="Techranga"
          src="https://www.youtube.com/embed/H_lEMg8YbL8" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          rel="noopener noreferrer nofollow">
        </iframe>
        <iframe className="projects-media__03"
          title="Techranga"
          src="https://www.youtube.com/embed/qk1RFFcUixk" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          rel="noopener noreferrer nofollow">
        </iframe>
        <iframe className="projects-media__04"
          title="Techranga"
          src="https://www.youtube.com/embed/a5_5VDc_ie0" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          rel="noopener noreferrer nofollow">
        </iframe>
        <iframe className="projects-media__05"
          title="Techranga"
          src="https://www.youtube.com/embed/rvKEFvlOwtQ" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          rel="noopener noreferrer nofollow">
        </iframe>
        <iframe className="projects-media__06"
          title="Techranga"
          src="https://www.youtube.com/embed/9JgLZXQ-yDs" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          rel="noopener noreferrer nofollow">
        </iframe>
      </div>
  </div>
  );
};

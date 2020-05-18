import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

export const Home = () => {
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();
  let slideIndex = 0;

  const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName('home-carousel');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    };
    for (i = 0; i < slides.length; i++) {
      slides[slideIndex-1].style.display = "flex";
    };
    setTimeout(showSlides, 5000);
  };

  showSlides();

  return (
    <div className={ `${ active ? "hide" : "home" }` }>
      <div className="home-carousel">
        <div className="home-carousel__01">
          <h1 className="home-carousel__01_title"> { t(`home.carousel01.title`) } </h1>
          <h2 className="home-carousel__01_text"> { t(`home.carousel01.text01`) } </h2>
          <h2 className="home-carousel__01_text"> { t(`home.carousel01.text02`) } </h2>
          <h2 className="home-carousel__01_text"> { t(`home.carousel01.text03`) } </h2>
          <h2 className="home-carousel__01_text"> { t(`home.carousel01.text04`) } </h2>
          <h2 className="home-carousel__01_text"> { t(`home.carousel01.text05`) } </h2>
        </div>
      </div>
      <div className="home-carousel">
        <div className="home-carousel__02">
          <h1 className="home-carousel__02_title"> { t(`home.carousel02.title`) } </h1>
          <h2 className="home-carousel__02_text"> { t(`home.carousel02.text01`) } </h2>
          <h2 className="home-carousel__02_text"> { t(`home.carousel02.text02`) } </h2>
          <h2 className="home-carousel__02_text"> { t(`home.carousel02.text03`) } </h2>
        </div>
      </div>
      <div className="home-info">
        <h3 className="home-info__text"> { t(`home.info.text01`) } </h3>
        <h3 className="home-info__text"> { t(`home.info.text02`) } </h3>
        <h3 className="home-info__text"> { t(`home.info.text03`) } </h3>
      </div>
    </div>
  );
};

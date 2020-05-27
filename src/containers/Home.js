import React, { useContext, useState } from 'react';
import { useTranslation } from "react-i18next";

import { NavigationContext } from '../App';

export const Home = () => {
  const [show, setShow] = useState(false);
  const { state } = useContext(NavigationContext);
  const active = state.isMenuActive;
  const { t } = useTranslation();

  const currentState = () => {
    if (show === false) {
      return true;
    } else {
      return false;
    }
  };

  const test = () => {
    const interval = setTimeout(() => {
      setShow(currentState);
    }, 5000);
    return () => clearTimeout(interval);
  };

  test();

  return (
    <div className={ `${ active ? "hide" : "home" }` }>
      <div className={ `${ show ? "hide" : "home-carousel" }` }>
        <div className={ `${ show ? "hide" : "home-carousel__01" }` }>
          <h1 className="home-carousel__01_title"> { `${ show ? "" : t(`home.carousel01.title`) }` } </h1>
          <h2 className="home-carousel__01_text"> { `${ show ? "" : t(`home.carousel01.text01`) }` } </h2>
          <h2 className="home-carousel__01_text"> { `${ show ? "" : t(`home.carousel01.text02`) }` } </h2>
          <h2 className="home-carousel__01_text"> { `${ show ? "" : t(`home.carousel01.text03`) }` } </h2>
          <h2 className="home-carousel__01_text"> { `${ show ? "" : t(`home.carousel01.text04`) }` } </h2>
          <h2 className="home-carousel__01_text"> { `${ show ? "" : t(`home.carousel01.text05`) }` } </h2>
        </div>
      </div>
      <div className={ `${ show ? "home-carousel" : "hide" }` }>
        <div className={ `${ show ? "home-carousel__02" : "hide" }` }>
          <h1 className="home-carousel__02_title"> { `${ show ? t(`home.carousel02.title`) : "" }` } </h1>
          <h2 className="home-carousel__02_text"> { `${ show ? t(`home.carousel02.text01`) : "" }` } </h2>
          <h2 className="home-carousel__02_text"> { `${ show ? t(`home.carousel02.text02`) : "" }` } </h2>
          <h2 className="home-carousel__02_text"> { `${ show ? t(`home.carousel02.text03`) : "" }` } </h2>
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

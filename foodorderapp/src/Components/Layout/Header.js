import React, { Fragment } from "react";
import mealsimage from '../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartButton onShowCart={props.onShow}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsimage} alt="Fodd picture" />
      </div>
    </Fragment>
  );
}

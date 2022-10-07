import React from 'react'
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onCloseCart}/>;
  };
  
  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  const portalElement = document.getElementById('overlays');
export default function Modal(props) {
    return (
        <Fragment>
          {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalElement)}
          {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
          )}
        </Fragment>
      );
}
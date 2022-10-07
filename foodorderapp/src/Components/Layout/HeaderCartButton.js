import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/CartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const Ctx = useContext(CartContext);

  const numberOfCartItems = Ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

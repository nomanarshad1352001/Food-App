import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import React, { useState } from 'react'
import CartContextProvider from "./Store/CartContextProvider";
function App() {
  const [cartIsShown, setcartIsShown] = useState(false)
  const ShowCartFun=()=>{
    setcartIsShown(true);
  }
  const HideCartFun=()=>{
    setcartIsShown(false);
  }
  
  return (
    
    <CartContextProvider>
      <Header onShow={ShowCartFun}/>
     { cartIsShown && <Cart onClose={HideCartFun}/>}
      <Meals/>
    </CartContextProvider>
  );
}

export default App;

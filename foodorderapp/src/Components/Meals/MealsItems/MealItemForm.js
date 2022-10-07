import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
export default function MealItemForm(props) {
  const [amountIsValid, setamountIsValid] = useState(true)
  const amountInput = useRef();
  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInput.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setamountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum)
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter The Amount (1-5).</p>}
    </form>
  );
}

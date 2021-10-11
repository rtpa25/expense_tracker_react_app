import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //stateless components as there is no internal state
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* Dont add paranthesis */}
    </Card>
  );
}

export default ExpenseItem;

// when something on the screen is changed then the state has to change
// the fucntion has to be called again and the new HTML has to be rendered again
// that can be done by useState hook that returns 2 elements in an array
// that array has the variable that has to change the state and then the function
// that actually changes the state and that is used in the handler fucntion
// the useState is a percomponent per instance basis which is great.
// we still use the const becuse state managment and assigning of value is done
// by react under the hood/.

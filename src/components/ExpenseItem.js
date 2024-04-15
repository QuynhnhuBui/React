import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card";
import React, { useState } from "react";

const ExpenseItem = ({ title, amount, date }) => {
  const [itemTitle, setTitle] = useState(title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">{amount}</div>
      </div>
      <button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Change Title
      </button>
    </Card>
  );
};
export default ExpenseItem;

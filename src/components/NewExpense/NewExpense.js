import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={(enteredExpenseData) => {
          const enteredData = { ...enteredExpenseData, id: Math.random() };
          onAddExpense(enteredData);
        }}
      />
    </div>
  );
};
export default NewExpense;

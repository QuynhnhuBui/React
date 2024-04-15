import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
import ExpensesFilter from "./Filter/ExpensesFilter";
import ExpenseChart from "./Chart/ExpenseChart";
const Expenses = ({ expenses }) => {
  const [list, setList] = useState(expenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        onSetSelectedYear={(value) => {
          const newList = expenses.filter(
            (item) => String(item.date.getFullYear()) === value
          );
          setList(newList);
        }}
      />
      <ExpenseChart expenses={list} />
      {list.length > 0 ? (
        list.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })
      ) : (
        <p>No expense found</p>
      )}
    </Card>
  );
};
export default Expenses;

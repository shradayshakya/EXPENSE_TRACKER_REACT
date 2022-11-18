import "./Expenses.css";

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredDate, setFilteredDate] = useState("2020");

  const filterChangeHandler = (filteredDate) => {
    setFilteredDate(filteredDate);
  };

  const displayExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredDate);

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selectedDate={filteredDate} onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={displayExpenses} />
      <ExpensesList items={displayExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

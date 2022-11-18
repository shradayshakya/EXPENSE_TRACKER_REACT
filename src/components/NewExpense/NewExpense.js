import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };

  const endEditingHandler = (event) => {
    event.preventDefault();

    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {
        !isEditing && <button type="button" onClick={startEditingHandler}>Add New Expense</button>
      }

      {
        isEditing && <ExpenseForm onSaveExpenseData={props.onAddExpense} endEditingHandler={endEditingHandler} />
      }
    </div>
  );
};

export default NewExpense;

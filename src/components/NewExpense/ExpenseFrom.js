import React from "react";
import "./ExpenseFrom.css";

const ExpenseFrom = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <lable>amount</lable>
          <input type="number" />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="date" min="2019-01-01" max="2022-12-31"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;

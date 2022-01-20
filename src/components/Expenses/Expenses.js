import React from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  //Another good Option
  const [selectedOption, setOptionValue] = useState("2020");
  const optionChanger = (option) => {
    setOptionValue(option);
  };

  const filteredExpenses = props.expenses.filter(expense =>{
    return expense.date.getFullYear().toString() === selectedOption;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedOption}
          onChangingOption={optionChanger}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <div>
          <ExpensesList items={filteredExpenses}/>
        </div>
      </Card>
    </div>
  );
};

export default Expenses;

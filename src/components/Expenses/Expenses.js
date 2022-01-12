import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  //Another good Option
  const eItems = props.expenses.map((it) => {
    return <ExpenseItem title={it.title} date={it.date} amount={it.amount} />;
  });

  const [selectedOption, setOptionValue] = useState("2020");
  const optionChanger = (option) => {
    setOptionValue(option);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedOption}
          onChangingOption={optionChanger}
        />
        <div>{eItems}</div>
      </Card>
    </div>
  );
};

export default Expenses;

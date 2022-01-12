import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  //Another good Option
  /*const eItems = props.items.map((it) => {
        return <ExpenseItem title={it.title} date={it.date} price={it.price}/>
      });
      
    return (
        <div>
            {eItems}
        </div>
        
    );*/
    const [selectedOption, setOptionValue] = useState('2020');
    const optionChanger = (option)=>{
      setOptionValue(option);
    }
  return (
    <div>  
      <Card className="expenses">
      <ExpensesFilter selected={selectedOption} onChangingOption={optionChanger}/>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />

        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />

        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />

        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

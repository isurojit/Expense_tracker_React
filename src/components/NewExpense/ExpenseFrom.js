import React, { useState } from "react";
import "./ExpenseFrom.css";

const ExpenseFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  /*const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    /*setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });*/

    /*setUserInput((preState)=>{
      return{
        ...preState,
        enteredTitle: e.target.value
      }
    })*/
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    /*setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });*/
    /*setUserInput((preState)=>{
      return{
        ...preState,
        enteredAmount: e.target.value
      }
    })*/
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    /*setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });*/
    /*setUserInput((preState)=>{
      return{
        ...preState,
        enteredDate: e.target.value
      }
    })*/
  };

  const submitHnadler = (e)=>{
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHnadler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <lable>amount</lable>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31" value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;

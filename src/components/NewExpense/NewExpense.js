import React from 'react';
import ExpenseFrom from './ExpenseFrom';
import './NewExpense.css';

const NewExpense = (props) =>{
    const saveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: (Math.floor(Math.random())*1000).toString()
        };
        props.onAddExpense(expenseData);
    }
    return(
        <div className='new-expense'>
            <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;
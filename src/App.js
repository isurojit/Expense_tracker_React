import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DEMO_EXPENSE = [
  {
    id: 1,
    title: "Health Insurance",
    amount: 15400,
    date: new Date(2022, 0, 7),
  },
  { id: 2, title: "Bike EMI", amount: 1400, date: new Date(2021, 4, 8) },
  {
    id: 3,
    title: "Vacation to Nainital",
    amount: 45000,
    date: new Date(2021, 10, 28),
  },
  {
    id: 4,
    title: "University Fees",
    amount: 55000,
    date: new Date(2020, 7, 31),
  },
];
const App = () => {
  
  const [expenses, setExpenses] = useState(DEMO_EXPENSE);

  const addExpenseHandler = expense =>{
    setExpenses(prevExpesnes =>{
      return [expense, ...prevExpesnes]
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>;
    </div>
  );
}

export default App;

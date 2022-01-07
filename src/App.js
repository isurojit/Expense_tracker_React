import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

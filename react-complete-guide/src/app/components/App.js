import React, { useState } from "react";
import "../assets/css/App.css";
import CreateExpense from "./features/expenses/create";
import ExpenseChart from "./features/expenses/ExpenseChart";
import Expense from "./features/expenses/listAll";

const App = () => {
  const [expenses, setExpenses] = useState(staticExpenses);

  const pushExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 className="header">Let's get started!</h2>
      <CreateExpense pushExpense={pushExpenseHandler} />

      <Expense expenses={expenses} />
    </div>
  );
};

export default App;

const staticExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

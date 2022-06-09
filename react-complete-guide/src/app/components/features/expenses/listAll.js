import "../../../assets/css/features/expenses/Expense.css";
import Card from "../../UI/Card";
import ExpenseItem from "./partials/item";
import ExpenseFilter from "./partials/filter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
const Expense = (props) => {
  const expenses = props.expenses;
  const [filterParams, setFilterParams] = useState({});
  console.log(expenses);
  const filterHandler = (data) => updateFilterParams(setFilterParams, data);
  const filteredExpenses = expenses.filter((expense) => {
    return expense?.date?.getFullYear().toString() === filterParams.year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        {filteredExpenses?.length > 0 && (
          <ConditionalItemDisplay filteredExpenses={filteredExpenses} />
        )}
      </Card>
    </div>
  );
};
const updateFilterParams = (setFilterParams, data) => {
  setFilterParams((prevState) => {
    return { ...prevState, ...data };
  });
};

const ConditionalItemDisplay = ({ filteredExpenses }) => {
  console.log(filteredExpenses);
  return filteredExpenses?.length === 0 ? (
    <h3 className="noContent"> No expenses found. </h3>
  ) : (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </ul>
  );
};

export default Expense;
